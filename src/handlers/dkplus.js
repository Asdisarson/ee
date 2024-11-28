const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

class DKPlusHandler {
  constructor(user) {
    this.woocommerce = new WooCommerceRestApi({
      url: user.website_url,
      consumerKey: user.woocommerce_ck,
      consumerSecret: user.woocommerce_cs,
      version: 'wc/v3'
    });
  }

  async handleProductUpdate(data) {
    try {
      // Create warehouse meta data
      const warehouseMeta = data.warehouses ? data.warehouses.map(wh => ({
        key: `warehouse_${wh.warehouse}`,
        value: wh.quantityInStock.toString()
      })) : [];

      // Calculate total stock across all warehouses
      const totalStock = data.warehouses ? 
        data.warehouses.reduce((sum, wh) => sum + wh.quantityInStock, 0) : 
        0;

      const product = {
        name: data.description1 || data.itemCode, // Use description1 as name, fallback to itemCode
        regular_price: data.salesPrice ? data.salesPrice.toString() : '0',
        description: data.description2 || '', // Use description2 as description
        sku: data.itemCode,
        stock_quantity: totalStock,
        meta_data: warehouseMeta
      };

      // Check if product exists
      const existingProducts = await this.woocommerce.get('products', {
        sku: data.itemCode
      });

      if (existingProducts.data.length > 0) {
        // Update existing product
        await this.woocommerce.put(
          `products/${existingProducts.data[0].id}`,
          product
        );
      } else {
        // Create new product
        await this.woocommerce.post('products', product);
      }

      return true;
    } catch (error) {
      console.error('Error handling product update:', error);
      throw error;
    }
  }
}

module.exports = DKPlusHandler;                     