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
    root.DkPlusApi.DkCloudDataModelCustomersCustomerCondition = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelCustomersCustomerCondition model module.
   * @module model/DkCloudDataModelCustomersCustomerCondition
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelCustomersCustomerCondition</code>.
   * @alias module:model/DkCloudDataModelCustomersCustomerCondition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelCustomersCustomerCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelCustomersCustomerCondition} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelCustomersCustomerCondition} The populated <code>DkCloudDataModelCustomersCustomerCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CreditLimit'))
        obj.creditLimit = ApiClient.convertToType(data['CreditLimit'], 'Number');
      if (data.hasOwnProperty('CreditMax'))
        obj.creditMax = ApiClient.convertToType(data['CreditMax'], 'Number');
      if (data.hasOwnProperty('DisableSale'))
        obj.disableSale = ApiClient.convertToType(data['DisableSale'], 'Boolean');
      if (data.hasOwnProperty('DisableRetail'))
        obj.disableRetail = ApiClient.convertToType(data['DisableRetail'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} creditLimit
   */
  exports.prototype.creditLimit = undefined;

  /**
   * @member {Number} creditMax
   */
  exports.prototype.creditMax = undefined;

  /**
   * @member {Boolean} disableSale
   */
  exports.prototype.disableSale = undefined;

  /**
   * @member {Boolean} disableRetail
   */
  exports.prototype.disableRetail = undefined;


  return exports;
}));