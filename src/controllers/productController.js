const WooCommerce = require('../services/woocommerce');
const dkPlusApi = require('../services/dkplus');

const productController = {
  async syncProduct(req, res) {
    try {
      const { productId } = req.params;
      
      // Fetch product from DK Plus API
      const dkPlusResponse = await dkPlusApi.get(`/products/${productId}`);
      const dkProduct = dkPlusResponse.data;

      // Transform DK Plus product to WooCommerce format
      const wooProduct = {
        name: dkProduct.name,
        regular_price: dkProduct.price.toString(),
        description: dkProduct.description,
        sku: dkProduct.sku,
        stock_quantity: dkProduct.stock,
        manage_stock: true
      };

      // Create or update product in WooCommerce
      const response = await WooCommerce.post('products', wooProduct);
      
      res.json(JSON.parse(response.body));
    } catch (error) {
      console.error('Error syncing product:', error);
      res.status(500).json({ error: 'Failed to sync product' });
    }
  },

  async syncAllProducts(req, res) {
    try {
      // Fetch all products from DK Plus
      const dkPlusResponse = await dkPlusApi.get('/products');
      const dkProducts = dkPlusResponse.data;

      const results = [];
      for (const dkProduct of dkProducts) {
        const wooProduct = {
          name: dkProduct.name,
          regular_price: dkProduct.price.toString(),
          description: dkProduct.description,
          sku: dkProduct.sku,
          stock_quantity: dkProduct.stock,
          manage_stock: true
        };

        const response = await WooCommerce.post('products', wooProduct);
        results.push(JSON.parse(response.body));
      }

      res.json(results);
    } catch (error) {
      console.error('Error syncing all products:', error);
      res.status(500).json({ error: 'Failed to sync products' });
    }
  }
};

module.exports = productController; 