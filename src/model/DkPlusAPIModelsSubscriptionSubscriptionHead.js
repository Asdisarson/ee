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
    define(['ApiClient', 'model/DkPlusAPIModelsInvoiceCustomer', 'model/DkPlusAPIModelsSubscriptionSubscriptionLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkPlusAPIModelsInvoiceCustomer'), require('./DkPlusAPIModelsSubscriptionSubscriptionLine'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkPlusAPIModelsSubscriptionSubscriptionHead = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkPlusAPIModelsInvoiceCustomer, root.DkPlusApi.DkPlusAPIModelsSubscriptionSubscriptionLine);
  }
}(this, function(ApiClient, DkPlusAPIModelsInvoiceCustomer, DkPlusAPIModelsSubscriptionSubscriptionLine) {
  'use strict';

  /**
   * The DkPlusAPIModelsSubscriptionSubscriptionHead model module.
   * @module model/DkPlusAPIModelsSubscriptionSubscriptionHead
   * @version v1
   */

  /**
   * Constructs a new <code>DkPlusAPIModelsSubscriptionSubscriptionHead</code>.
   * Subscription
   * @alias module:model/DkPlusAPIModelsSubscriptionSubscriptionHead
   * @class
   * @param customer {module:model/DkPlusAPIModelsInvoiceCustomer} Customer Model
   * @param salesPerson {String} Sales Person
   * @param lines {Array.<module:model/DkPlusAPIModelsSubscriptionSubscriptionLine>} Subscription Lines
   */
  var exports = function(customer, salesPerson, lines) {
    this.customer = customer;
    this.salesPerson = salesPerson;
    this.lines = lines;
  };

  /**
   * Constructs a <code>DkPlusAPIModelsSubscriptionSubscriptionHead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkPlusAPIModelsSubscriptionSubscriptionHead} obj Optional instance to populate.
   * @return {module:model/DkPlusAPIModelsSubscriptionSubscriptionHead} The populated <code>DkPlusAPIModelsSubscriptionSubscriptionHead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Number'))
        obj._number = ApiClient.convertToType(data['Number'], 'String');
      if (data.hasOwnProperty('Customer'))
        obj.customer = DkPlusAPIModelsInvoiceCustomer.constructFromObject(data['Customer']);
      if (data.hasOwnProperty('Reference'))
        obj.reference = ApiClient.convertToType(data['Reference'], 'String');
      if (data.hasOwnProperty('Text1'))
        obj.text1 = ApiClient.convertToType(data['Text1'], 'String');
      if (data.hasOwnProperty('Text2'))
        obj.text2 = ApiClient.convertToType(data['Text2'], 'String');
      if (data.hasOwnProperty('Group'))
        obj.group = ApiClient.convertToType(data['Group'], 'String');
      if (data.hasOwnProperty('Term'))
        obj.term = ApiClient.convertToType(data['Term'], 'String');
      if (data.hasOwnProperty('Mode'))
        obj.mode = ApiClient.convertToType(data['Mode'], 'String');
      if (data.hasOwnProperty('Date'))
        obj._date = ApiClient.convertToType(data['Date'], 'Date');
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('SalesPerson'))
        obj.salesPerson = ApiClient.convertToType(data['SalesPerson'], 'String');
      if (data.hasOwnProperty('Exchange'))
        obj.exchange = ApiClient.convertToType(data['Exchange'], 'Number');
      if (data.hasOwnProperty('Lines'))
        obj.lines = ApiClient.convertToType(data['Lines'], [DkPlusAPIModelsSubscriptionSubscriptionLine]);
      if (data.hasOwnProperty('Properties'))
        obj.properties = ApiClient.convertToType(data['Properties'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} _number
   */
  exports.prototype._number = undefined;

  /**
   * Customer Model
   * @member {module:model/DkPlusAPIModelsInvoiceCustomer} customer
   */
  exports.prototype.customer = undefined;

  /**
   * External Invoice Reference
   * @member {String} reference
   */
  exports.prototype.reference = undefined;

  /**
   * Invoice Detail Text
   * @member {String} text1
   */
  exports.prototype.text1 = undefined;

  /**
   * Invoice Additional Detail Text
   * @member {String} text2
   */
  exports.prototype.text2 = undefined;

  /**
   * Subscription Group
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * Payment Terms
   * @member {String} term
   */
  exports.prototype.term = undefined;

  /**
   * Payment Mode
   * @member {String} mode
   */
  exports.prototype.mode = undefined;

  /**
   * Invoice Date
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * Currency Code
   * @member {String} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Sales Person
   * @member {String} salesPerson
   */
  exports.prototype.salesPerson = undefined;

  /**
   * Currency Exchange Rate
   * @member {Number} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * Subscription Lines
   * @member {Array.<module:model/DkPlusAPIModelsSubscriptionSubscriptionLine>} lines
   */
  exports.prototype.lines = undefined;

  /**
   * 
   * @member {Object.<String, String>} properties
   */
  exports.prototype.properties = undefined;


  return exports;
}));