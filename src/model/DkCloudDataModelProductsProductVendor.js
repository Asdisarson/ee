/*
 * dkPlus API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkCloudDataModelProductsProductVendor = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelProductsProductVendor model module.
   * @module model/DkCloudDataModelProductsProductVendor
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelProductsProductVendor</code>.
   * @alias module:model/DkCloudDataModelProductsProductVendor
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelProductsProductVendor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelProductsProductVendor} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelProductsProductVendor} The populated <code>DkCloudDataModelProductsProductVendor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ItemCode'))
        obj.itemCode = ApiClient.convertToType(data['ItemCode'], 'String');
      if (data.hasOwnProperty('Vendor'))
        obj.vendor = ApiClient.convertToType(data['Vendor'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('PrimarySupplier'))
        obj.primarySupplier = ApiClient.convertToType(data['PrimarySupplier'], 'Boolean');
      if (data.hasOwnProperty('LastPurchasedDate'))
        obj.lastPurchasedDate = ApiClient.convertToType(data['LastPurchasedDate'], 'Date');
      if (data.hasOwnProperty('LastPurchasedPrice'))
        obj.lastPurchasedPrice = ApiClient.convertToType(data['LastPurchasedPrice'], 'Number');
      if (data.hasOwnProperty('LastPurchasedQuantity'))
        obj.lastPurchasedQuantity = ApiClient.convertToType(data['LastPurchasedQuantity'], 'Number');
      if (data.hasOwnProperty('PurchasedDiscount'))
        obj.purchasedDiscount = ApiClient.convertToType(data['PurchasedDiscount'], 'Number');
      if (data.hasOwnProperty('Price'))
        obj.price = ApiClient.convertToType(data['Price'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} itemCode
   */
  exports.prototype.itemCode = undefined;

  /**
   * @member {String} vendor
   */
  exports.prototype.vendor = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Boolean} primarySupplier
   */
  exports.prototype.primarySupplier = undefined;

  /**
   * @member {Date} lastPurchasedDate
   */
  exports.prototype.lastPurchasedDate = undefined;

  /**
   * @member {Number} lastPurchasedPrice
   */
  exports.prototype.lastPurchasedPrice = undefined;

  /**
   * @member {Number} lastPurchasedQuantity
   */
  exports.prototype.lastPurchasedQuantity = undefined;

  /**
   * @member {Number} purchasedDiscount
   */
  exports.prototype.purchasedDiscount = undefined;

  /**
   * @member {Number} price
   */
  exports.prototype.price = undefined;


  return exports;
}));