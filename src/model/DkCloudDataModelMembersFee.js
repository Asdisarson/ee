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
    define(['ApiClient', 'model/DkCloudDataModelCustomersCustomerBaseModel', 'model/DkCloudDataModelGeneralCreditCard', 'model/DkCloudDataModelMembersFeeDiscount', 'model/DkCloudDataModelMembersFeePeriod', 'model/DkCloudDataModelMembersPaymentOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkCloudDataModelCustomersCustomerBaseModel'), require('./DkCloudDataModelGeneralCreditCard'), require('./DkCloudDataModelMembersFeeDiscount'), require('./DkCloudDataModelMembersFeePeriod'), require('./DkCloudDataModelMembersPaymentOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkCloudDataModelMembersFee = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelCustomersCustomerBaseModel, root.DkPlusApi.DkCloudDataModelGeneralCreditCard, root.DkPlusApi.DkCloudDataModelMembersFeeDiscount, root.DkPlusApi.DkCloudDataModelMembersFeePeriod, root.DkPlusApi.DkCloudDataModelMembersPaymentOptions);
  }
}(this, function(ApiClient, DkCloudDataModelCustomersCustomerBaseModel, DkCloudDataModelGeneralCreditCard, DkCloudDataModelMembersFeeDiscount, DkCloudDataModelMembersFeePeriod, DkCloudDataModelMembersPaymentOptions) {
  'use strict';

  /**
   * The DkCloudDataModelMembersFee model module.
   * @module model/DkCloudDataModelMembersFee
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelMembersFee</code>.
   * @alias module:model/DkCloudDataModelMembersFee
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelMembersFee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelMembersFee} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelMembersFee} The populated <code>DkCloudDataModelMembersFee</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Period'))
        obj.period = DkCloudDataModelMembersFeePeriod.constructFromObject(data['Period']);
      if (data.hasOwnProperty('Discount'))
        obj.discount = DkCloudDataModelMembersFeeDiscount.constructFromObject(data['Discount']);
      if (data.hasOwnProperty('Payment'))
        obj.payment = DkCloudDataModelMembersPaymentOptions.constructFromObject(data['Payment']);
      if (data.hasOwnProperty('Disabled'))
        obj.disabled = ApiClient.convertToType(data['Disabled'], 'Boolean');
      if (data.hasOwnProperty('RateMonth'))
        obj.rateMonth = ApiClient.convertToType(data['RateMonth'], 'Number');
      if (data.hasOwnProperty('IntrestRate'))
        obj.intrestRate = ApiClient.convertToType(data['IntrestRate'], 'Number');
      if (data.hasOwnProperty('Interval'))
        obj.interval = ApiClient.convertToType(data['Interval'], 'String');
      if (data.hasOwnProperty('Dim2'))
        obj.dim2 = ApiClient.convertToType(data['Dim2'], 'String');
      if (data.hasOwnProperty('Campaign'))
        obj.campaign = ApiClient.convertToType(data['Campaign'], 'String');
      if (data.hasOwnProperty('FeeType'))
        obj.feeType = ApiClient.convertToType(data['FeeType'], 'String');
      if (data.hasOwnProperty('Memo'))
        obj.memo = ApiClient.convertToType(data['Memo'], 'String');
      if (data.hasOwnProperty('ReductionPayment'))
        obj.reductionPayment = ApiClient.convertToType(data['ReductionPayment'], 'Number');
      if (data.hasOwnProperty('ContactName'))
        obj.contactName = ApiClient.convertToType(data['ContactName'], 'String');
      if (data.hasOwnProperty('Saleperson'))
        obj.saleperson = ApiClient.convertToType(data['Saleperson'], 'String');
      if (data.hasOwnProperty('RateSplit'))
        obj.rateSplit = ApiClient.convertToType(data['RateSplit'], 'Number');
      if (data.hasOwnProperty('CreditCard'))
        obj.creditCard = DkCloudDataModelGeneralCreditCard.constructFromObject(data['CreditCard']);
      if (data.hasOwnProperty('Amount'))
        obj.amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('ItemCode'))
        obj.itemCode = ApiClient.convertToType(data['ItemCode'], 'String');
      if (data.hasOwnProperty('Payer'))
        obj.payer = DkCloudDataModelCustomersCustomerBaseModel.constructFromObject(data['Payer']);
      if (data.hasOwnProperty('Properties'))
        obj.properties = ApiClient.convertToType(data['Properties'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * @member {module:model/DkCloudDataModelMembersFeePeriod} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {module:model/DkCloudDataModelMembersFeeDiscount} discount
   */
  exports.prototype.discount = undefined;

  /**
   * @member {module:model/DkCloudDataModelMembersPaymentOptions} payment
   */
  exports.prototype.payment = undefined;

  /**
   * @member {Boolean} disabled
   */
  exports.prototype.disabled = undefined;

  /**
   * @member {Number} rateMonth
   */
  exports.prototype.rateMonth = undefined;

  /**
   * @member {Number} intrestRate
   */
  exports.prototype.intrestRate = undefined;

  /**
   * @member {module:model/DkCloudDataModelMembersFee.IntervalEnum} interval
   */
  exports.prototype.interval = undefined;

  /**
   * @member {String} dim2
   */
  exports.prototype.dim2 = undefined;

  /**
   * @member {String} campaign
   */
  exports.prototype.campaign = undefined;

  /**
   * @member {String} feeType
   */
  exports.prototype.feeType = undefined;

  /**
   * @member {String} memo
   */
  exports.prototype.memo = undefined;

  /**
   * @member {Number} reductionPayment
   */
  exports.prototype.reductionPayment = undefined;

  /**
   * @member {String} contactName
   */
  exports.prototype.contactName = undefined;

  /**
   * @member {String} saleperson
   */
  exports.prototype.saleperson = undefined;

  /**
   * @member {Number} rateSplit
   */
  exports.prototype.rateSplit = undefined;

  /**
   * @member {module:model/DkCloudDataModelGeneralCreditCard} creditCard
   */
  exports.prototype.creditCard = undefined;

  /**
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * @member {String} itemCode
   */
  exports.prototype.itemCode = undefined;

  /**
   * @member {module:model/DkCloudDataModelCustomersCustomerBaseModel} payer
   */
  exports.prototype.payer = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype.properties = undefined;



  /**
   * Allowed values for the <code>interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntervalEnum = {
    /**
     * value: "OneTime"
     * @const
     */
    oneTime: "OneTime",

    /**
     * value: "Monthly"
     * @const
     */
    monthly: "Monthly",

    /**
     * value: "Yearly"
     * @const
     */
    yearly: "Yearly"
  };
  return exports;
}));