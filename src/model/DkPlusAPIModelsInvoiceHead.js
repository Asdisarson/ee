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
    define(['ApiClient', 'model/DkPlusAPIModelsFileModel', 'model/DkPlusAPIModelsInvoiceContact', 'model/DkPlusAPIModelsInvoiceCustomer', 'model/DkPlusAPIModelsInvoiceLine', 'model/DkPlusAPIModelsInvoiceOptions', 'model/DkPlusAPIModelsInvoicePayment', 'model/DkPlusAPIModelsInvoiceReceiver'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkPlusAPIModelsFileModel'), require('./DkPlusAPIModelsInvoiceContact'), require('./DkPlusAPIModelsInvoiceCustomer'), require('./DkPlusAPIModelsInvoiceLine'), require('./DkPlusAPIModelsInvoiceOptions'), require('./DkPlusAPIModelsInvoicePayment'), require('./DkPlusAPIModelsInvoiceReceiver'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkPlusAPIModelsInvoiceHead = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkPlusAPIModelsFileModel, root.DkPlusApi.DkPlusAPIModelsInvoiceContact, root.DkPlusApi.DkPlusAPIModelsInvoiceCustomer, root.DkPlusApi.DkPlusAPIModelsInvoiceLine, root.DkPlusApi.DkPlusAPIModelsInvoiceOptions, root.DkPlusApi.DkPlusAPIModelsInvoicePayment, root.DkPlusApi.DkPlusAPIModelsInvoiceReceiver);
  }
}(this, function(ApiClient, DkPlusAPIModelsFileModel, DkPlusAPIModelsInvoiceContact, DkPlusAPIModelsInvoiceCustomer, DkPlusAPIModelsInvoiceLine, DkPlusAPIModelsInvoiceOptions, DkPlusAPIModelsInvoicePayment, DkPlusAPIModelsInvoiceReceiver) {
  'use strict';

  /**
   * The DkPlusAPIModelsInvoiceHead model module.
   * @module model/DkPlusAPIModelsInvoiceHead
   * @version v1
   */

  /**
   * Constructs a new <code>DkPlusAPIModelsInvoiceHead</code>.
   * Invoice Post Model
   * @alias module:model/DkPlusAPIModelsInvoiceHead
   * @class
   * @param customer {module:model/DkPlusAPIModelsInvoiceCustomer} Customer Model
   * @param salesPerson {String} Sales Person
   */
  var exports = function(customer, salesPerson) {
    this.customer = customer;
    this.salesPerson = salesPerson;
  };

  /**
   * Constructs a <code>DkPlusAPIModelsInvoiceHead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkPlusAPIModelsInvoiceHead} obj Optional instance to populate.
   * @return {module:model/DkPlusAPIModelsInvoiceHead} The populated <code>DkPlusAPIModelsInvoiceHead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Customer'))
        obj.customer = DkPlusAPIModelsInvoiceCustomer.constructFromObject(data['Customer']);
      if (data.hasOwnProperty('Reference'))
        obj.reference = ApiClient.convertToType(data['Reference'], 'String');
      if (data.hasOwnProperty('Text1'))
        obj.text1 = ApiClient.convertToType(data['Text1'], 'String');
      if (data.hasOwnProperty('Text2'))
        obj.text2 = ApiClient.convertToType(data['Text2'], 'String');
      if (data.hasOwnProperty('Term'))
        obj.term = ApiClient.convertToType(data['Term'], 'String');
      if (data.hasOwnProperty('Mode'))
        obj.mode = ApiClient.convertToType(data['Mode'], 'String');
      if (data.hasOwnProperty('Date'))
        obj._date = ApiClient.convertToType(data['Date'], 'Date');
      if (data.hasOwnProperty('DueDate'))
        obj.dueDate = ApiClient.convertToType(data['DueDate'], 'Date');
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('SalesPerson'))
        obj.salesPerson = ApiClient.convertToType(data['SalesPerson'], 'String');
      if (data.hasOwnProperty('Exchange'))
        obj.exchange = ApiClient.convertToType(data['Exchange'], 'Number');
      if (data.hasOwnProperty('Options'))
        obj.options = DkPlusAPIModelsInvoiceOptions.constructFromObject(data['Options']);
      if (data.hasOwnProperty('Lines'))
        obj.lines = ApiClient.convertToType(data['Lines'], [DkPlusAPIModelsInvoiceLine]);
      if (data.hasOwnProperty('Payments'))
        obj.payments = ApiClient.convertToType(data['Payments'], [DkPlusAPIModelsInvoicePayment]);
      if (data.hasOwnProperty('Attachment'))
        obj.attachment = DkPlusAPIModelsFileModel.constructFromObject(data['Attachment']);
      if (data.hasOwnProperty('Receiver'))
        obj.receiver = DkPlusAPIModelsInvoiceReceiver.constructFromObject(data['Receiver']);
      if (data.hasOwnProperty('Contact'))
        obj.contact = DkPlusAPIModelsInvoiceContact.constructFromObject(data['Contact']);
      if (data.hasOwnProperty('SaleType'))
        obj.saleType = ApiClient.convertToType(data['SaleType'], 'String');
      if (data.hasOwnProperty('Properties'))
        obj.properties = ApiClient.convertToType(data['Properties'], {'String': 'String'});
      if (data.hasOwnProperty('Project'))
        obj.project = ApiClient.convertToType(data['Project'], 'String');
    }
    return obj;
  }

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
   * Invoice Due Date
   * @member {Date} dueDate
   */
  exports.prototype.dueDate = undefined;

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
   * Options Model
   * @member {module:model/DkPlusAPIModelsInvoiceOptions} options
   */
  exports.prototype.options = undefined;

  /**
   * Invoice Lines
   * @member {Array.<module:model/DkPlusAPIModelsInvoiceLine>} lines
   */
  exports.prototype.lines = undefined;

  /**
   * Invoice Payments
   * @member {Array.<module:model/DkPlusAPIModelsInvoicePayment>} payments
   */
  exports.prototype.payments = undefined;

  /**
   * Attachment Model
   * @member {module:model/DkPlusAPIModelsFileModel} attachment
   */
  exports.prototype.attachment = undefined;

  /**
   * Item Receiver
   * @member {module:model/DkPlusAPIModelsInvoiceReceiver} receiver
   */
  exports.prototype.receiver = undefined;

  /**
   * Contact
   * @member {module:model/DkPlusAPIModelsInvoiceContact} contact
   */
  exports.prototype.contact = undefined;

  /**
   * Sales Type
   * @member {module:model/DkPlusAPIModelsInvoiceHead.SaleTypeEnum} saleType
   */
  exports.prototype.saleType = undefined;

  /**
   * Additional Properties
   * @member {Object.<String, String>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * Project Job Number
   * @member {String} project
   */
  exports.prototype.project = undefined;



  /**
   * Allowed values for the <code>saleType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SaleTypeEnum = {
    /**
     * value: "Debit"
     * @const
     */
    debit: "Debit",

    /**
     * value: "Credit"
     * @const
     */
    credit: "Credit",

    /**
     * value: "ReturnSale"
     * @const
     */
    returnSale: "ReturnSale",

    /**
     * value: "DebitComputation"
     * @const
     */
    debitComputation: "DebitComputation",

    /**
     * value: "CreditComputation"
     * @const
     */
    creditComputation: "CreditComputation"
  };
  return exports;
}));