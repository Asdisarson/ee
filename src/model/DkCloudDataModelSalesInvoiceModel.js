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
    define(['ApiClient', 'model/DkCloudDataModelSalesInvoiceLineModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkCloudDataModelSalesInvoiceLineModel'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkCloudDataModelSalesInvoiceModel = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelSalesInvoiceLineModel);
  }
}(this, function(ApiClient, DkCloudDataModelSalesInvoiceLineModel) {
  'use strict';

  /**
   * The DkCloudDataModelSalesInvoiceModel model module.
   * @module model/DkCloudDataModelSalesInvoiceModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelSalesInvoiceModel</code>.
   * @alias module:model/DkCloudDataModelSalesInvoiceModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelSalesInvoiceModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelSalesInvoiceModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelSalesInvoiceModel} The populated <code>DkCloudDataModelSalesInvoiceModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number'))
        obj._number = ApiClient.convertToType(data['Number'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.created = ApiClient.convertToType(data['Created'], 'Date');
      if (data.hasOwnProperty('Modified'))
        obj.modified = ApiClient.convertToType(data['Modified'], 'Date');
      if (data.hasOwnProperty('CreatedBy'))
        obj.createdBy = ApiClient.convertToType(data['CreatedBy'], 'String');
      if (data.hasOwnProperty('CNumber'))
        obj.cNumber = ApiClient.convertToType(data['CNumber'], 'String');
      if (data.hasOwnProperty('CName'))
        obj.cName = ApiClient.convertToType(data['CName'], 'String');
      if (data.hasOwnProperty('CAddress1'))
        obj.cAddress1 = ApiClient.convertToType(data['CAddress1'], 'String');
      if (data.hasOwnProperty('CAddress2'))
        obj.cAddress2 = ApiClient.convertToType(data['CAddress2'], 'String');
      if (data.hasOwnProperty('CZipCode'))
        obj.cZipCode = ApiClient.convertToType(data['CZipCode'], 'String');
      if (data.hasOwnProperty('CCountryCode'))
        obj.cCountryCode = ApiClient.convertToType(data['CCountryCode'], 'String');
      if (data.hasOwnProperty('CSSNumber'))
        obj.cSSNumber = ApiClient.convertToType(data['CSSNumber'], 'String');
      if (data.hasOwnProperty('CPhone'))
        obj.cPhone = ApiClient.convertToType(data['CPhone'], 'String');
      if (data.hasOwnProperty('CContact'))
        obj.cContact = ApiClient.convertToType(data['CContact'], 'String');
      if (data.hasOwnProperty('RecordID'))
        obj.recordID = ApiClient.convertToType(data['RecordID'], 'Number');
      if (data.hasOwnProperty('OrderNumber'))
        obj.orderNumber = ApiClient.convertToType(data['OrderNumber'], 'Number');
      if (data.hasOwnProperty('InvoiceDate'))
        obj.invoiceDate = ApiClient.convertToType(data['InvoiceDate'], 'Date');
      if (data.hasOwnProperty('DueDate'))
        obj.dueDate = ApiClient.convertToType(data['DueDate'], 'Date');
      if (data.hasOwnProperty('DiscountPercent'))
        obj.discountPercent = ApiClient.convertToType(data['DiscountPercent'], 'Number');
      if (data.hasOwnProperty('Discount'))
        obj.discount = ApiClient.convertToType(data['Discount'], 'Number');
      if (data.hasOwnProperty('TotalAmount'))
        obj.totalAmount = ApiClient.convertToType(data['TotalAmount'], 'Number');
      if (data.hasOwnProperty('TotalAmountWithTax'))
        obj.totalAmountWithTax = ApiClient.convertToType(data['TotalAmountWithTax'], 'Number');
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('Reference'))
        obj.reference = ApiClient.convertToType(data['Reference'], 'String');
      if (data.hasOwnProperty('Voucher'))
        obj.voucher = ApiClient.convertToType(data['Voucher'], 'String');
      if (data.hasOwnProperty('SettledType'))
        obj.settledType = ApiClient.convertToType(data['SettledType'], 'Number');
      if (data.hasOwnProperty('SettledAmount'))
        obj.settledAmount = ApiClient.convertToType(data['SettledAmount'], 'Number');
      if (data.hasOwnProperty('SalePerson'))
        obj.salePerson = ApiClient.convertToType(data['SalePerson'], 'String');
      if (data.hasOwnProperty('Text1'))
        obj.text1 = ApiClient.convertToType(data['Text1'], 'String');
      if (data.hasOwnProperty('Text2'))
        obj.text2 = ApiClient.convertToType(data['Text2'], 'String');
      if (data.hasOwnProperty('Dim1'))
        obj.dim1 = ApiClient.convertToType(data['Dim1'], 'String');
      if (data.hasOwnProperty('Dim2'))
        obj.dim2 = ApiClient.convertToType(data['Dim2'], 'String');
      if (data.hasOwnProperty('Origin'))
        obj.origin = ApiClient.convertToType(data['Origin'], 'Number');
      if (data.hasOwnProperty('PaymentTerm'))
        obj.paymentTerm = ApiClient.convertToType(data['PaymentTerm'], 'String');
      if (data.hasOwnProperty('PaymentMode'))
        obj.paymentMode = ApiClient.convertToType(data['PaymentMode'], 'String');
      if (data.hasOwnProperty('ClaimStatus'))
        obj.claimStatus = ApiClient.convertToType(data['ClaimStatus'], 'Number');
      if (data.hasOwnProperty('Exchange'))
        obj.exchange = ApiClient.convertToType(data['Exchange'], 'Number');
      if (data.hasOwnProperty('SalesType'))
        obj.salesType = ApiClient.convertToType(data['SalesType'], 'Number');
      if (data.hasOwnProperty('Version'))
        obj.version = ApiClient.convertToType(data['Version'], 'Number');
      if (data.hasOwnProperty('Project'))
        obj.project = ApiClient.convertToType(data['Project'], 'String');
      if (data.hasOwnProperty('IRNumber'))
        obj.iRNumber = ApiClient.convertToType(data['IRNumber'], 'String');
      if (data.hasOwnProperty('IRName'))
        obj.iRName = ApiClient.convertToType(data['IRName'], 'String');
      if (data.hasOwnProperty('IRAddress1'))
        obj.iRAddress1 = ApiClient.convertToType(data['IRAddress1'], 'String');
      if (data.hasOwnProperty('IRAddress2'))
        obj.iRAddress2 = ApiClient.convertToType(data['IRAddress2'], 'String');
      if (data.hasOwnProperty('IRZipCode'))
        obj.iRZipCode = ApiClient.convertToType(data['IRZipCode'], 'String');
      if (data.hasOwnProperty('IRContact'))
        obj.iRContact = ApiClient.convertToType(data['IRContact'], 'String');
      if (data.hasOwnProperty('ExternalInvoiceNumber'))
        obj.externalInvoiceNumber = ApiClient.convertToType(data['ExternalInvoiceNumber'], 'Number');
      if (data.hasOwnProperty('ClaimNumber'))
        obj.claimNumber = ApiClient.convertToType(data['ClaimNumber'], 'Number');
      if (data.hasOwnProperty('ClaimDate'))
        obj.claimDate = ApiClient.convertToType(data['ClaimDate'], 'Date');
      if (data.hasOwnProperty('Register'))
        obj.register = ApiClient.convertToType(data['Register'], 'String');
      if (data.hasOwnProperty('PosInvoice'))
        obj.posInvoice = ApiClient.convertToType(data['PosInvoice'], 'Number');
      if (data.hasOwnProperty('JournalId'))
        obj.journalId = ApiClient.convertToType(data['JournalId'], 'Number');
      if (data.hasOwnProperty('Lines'))
        obj.lines = ApiClient.convertToType(data['Lines'], [DkCloudDataModelSalesInvoiceLineModel]);
    }
    return obj;
  }

  /**
   * @member {String} _number
   */
  exports.prototype._number = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Date} modified
   */
  exports.prototype.modified = undefined;

  /**
   * @member {String} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {String} cNumber
   */
  exports.prototype.cNumber = undefined;

  /**
   * @member {String} cName
   */
  exports.prototype.cName = undefined;

  /**
   * @member {String} cAddress1
   */
  exports.prototype.cAddress1 = undefined;

  /**
   * @member {String} cAddress2
   */
  exports.prototype.cAddress2 = undefined;

  /**
   * @member {String} cZipCode
   */
  exports.prototype.cZipCode = undefined;

  /**
   * @member {String} cCountryCode
   */
  exports.prototype.cCountryCode = undefined;

  /**
   * @member {String} cSSNumber
   */
  exports.prototype.cSSNumber = undefined;

  /**
   * @member {String} cPhone
   */
  exports.prototype.cPhone = undefined;

  /**
   * @member {String} cContact
   */
  exports.prototype.cContact = undefined;

  /**
   * @member {Number} recordID
   */
  exports.prototype.recordID = undefined;

  /**
   * @member {Number} orderNumber
   */
  exports.prototype.orderNumber = undefined;

  /**
   * @member {Date} invoiceDate
   */
  exports.prototype.invoiceDate = undefined;

  /**
   * @member {Date} dueDate
   */
  exports.prototype.dueDate = undefined;

  /**
   * @member {Number} discountPercent
   */
  exports.prototype.discountPercent = undefined;

  /**
   * @member {Number} discount
   */
  exports.prototype.discount = undefined;

  /**
   * @member {Number} totalAmount
   */
  exports.prototype.totalAmount = undefined;

  /**
   * @member {Number} totalAmountWithTax
   */
  exports.prototype.totalAmountWithTax = undefined;

  /**
   * @member {String} currency
   */
  exports.prototype.currency = undefined;

  /**
   * @member {String} reference
   */
  exports.prototype.reference = undefined;

  /**
   * @member {String} voucher
   */
  exports.prototype.voucher = undefined;

  /**
   * @member {Number} settledType
   */
  exports.prototype.settledType = undefined;

  /**
   * @member {Number} settledAmount
   */
  exports.prototype.settledAmount = undefined;

  /**
   * @member {String} salePerson
   */
  exports.prototype.salePerson = undefined;

  /**
   * @member {String} text1
   */
  exports.prototype.text1 = undefined;

  /**
   * @member {String} text2
   */
  exports.prototype.text2 = undefined;

  /**
   * @member {String} dim1
   */
  exports.prototype.dim1 = undefined;

  /**
   * @member {String} dim2
   */
  exports.prototype.dim2 = undefined;

  /**
   * @member {Number} origin
   */
  exports.prototype.origin = undefined;

  /**
   * @member {String} paymentTerm
   */
  exports.prototype.paymentTerm = undefined;

  /**
   * @member {String} paymentMode
   */
  exports.prototype.paymentMode = undefined;

  /**
   * @member {Number} claimStatus
   */
  exports.prototype.claimStatus = undefined;

  /**
   * @member {Number} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * @member {Number} salesType
   */
  exports.prototype.salesType = undefined;

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} project
   */
  exports.prototype.project = undefined;

  /**
   * @member {String} iRNumber
   */
  exports.prototype.iRNumber = undefined;

  /**
   * @member {String} iRName
   */
  exports.prototype.iRName = undefined;

  /**
   * @member {String} iRAddress1
   */
  exports.prototype.iRAddress1 = undefined;

  /**
   * @member {String} iRAddress2
   */
  exports.prototype.iRAddress2 = undefined;

  /**
   * @member {String} iRZipCode
   */
  exports.prototype.iRZipCode = undefined;

  /**
   * @member {String} iRContact
   */
  exports.prototype.iRContact = undefined;

  /**
   * @member {Number} externalInvoiceNumber
   */
  exports.prototype.externalInvoiceNumber = undefined;

  /**
   * @member {Number} claimNumber
   */
  exports.prototype.claimNumber = undefined;

  /**
   * @member {Date} claimDate
   */
  exports.prototype.claimDate = undefined;

  /**
   * @member {String} register
   */
  exports.prototype.register = undefined;

  /**
   * @member {Number} posInvoice
   */
  exports.prototype.posInvoice = undefined;

  /**
   * @member {Number} journalId
   */
  exports.prototype.journalId = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelSalesInvoiceLineModel>} lines
   */
  exports.prototype.lines = undefined;


  return exports;
}));