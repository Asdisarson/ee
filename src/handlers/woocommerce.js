const ApiClient = require('../ApiClient');

class WooCommerceHandler {
  constructor(dkplusApiKey) {
    this.apiClient = new ApiClient();
    this.apiClient.defaultHeaders = {
      'Authorization': `Bearer ${dkplusApiKey}`
    };
  }

  async handleProductUpdate(data) {
    try {
      const product = {
        itemCode: data.sku,
        description: data.description,
        price: parseFloat(data.regular_price),
        quantity: data.stock_quantity
      };

      await this.apiClient.productUpdateProduct(
        product.itemCode,
        product,
        { isBase64: false }
      );

      return true;
    } catch (error) {
      console.error('Error handling WooCommerce product update:', error);
      throw error;
    }
  }
}

module.exports = WooCommerceHandler; 