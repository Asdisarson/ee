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
    root.DkPlusApi.DkCloudDataModelSettingsCompanyModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelSettingsCompanyModel model module.
   * @module model/DkCloudDataModelSettingsCompanyModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelSettingsCompanyModel</code>.
   * @alias module:model/DkCloudDataModelSettingsCompanyModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelSettingsCompanyModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelSettingsCompanyModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelSettingsCompanyModel} The populated <code>DkCloudDataModelSettingsCompanyModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number'))
        obj._number = ApiClient.convertToType(data['Number'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('SSNumber'))
        obj.sSNumber = ApiClient.convertToType(data['SSNumber'], 'String');
      if (data.hasOwnProperty('Address1'))
        obj.address1 = ApiClient.convertToType(data['Address1'], 'String');
      if (data.hasOwnProperty('Address2'))
        obj.address2 = ApiClient.convertToType(data['Address2'], 'String');
      if (data.hasOwnProperty('Address3'))
        obj.address3 = ApiClient.convertToType(data['Address3'], 'String');
      if (data.hasOwnProperty('ZipCode'))
        obj.zipCode = ApiClient.convertToType(data['ZipCode'], 'String');
      if (data.hasOwnProperty('Country'))
        obj.country = ApiClient.convertToType(data['Country'], 'String');
      if (data.hasOwnProperty('BankCode'))
        obj.bankCode = ApiClient.convertToType(data['BankCode'], 'String');
      if (data.hasOwnProperty('BankAccGroup'))
        obj.bankAccGroup = ApiClient.convertToType(data['BankAccGroup'], 'String');
      if (data.hasOwnProperty('BankAccount'))
        obj.bankAccount = ApiClient.convertToType(data['BankAccount'], 'String');
      if (data.hasOwnProperty('VATNumber'))
        obj.vATNumber = ApiClient.convertToType(data['VATNumber'], 'String');
      if (data.hasOwnProperty('Phone'))
        obj.phone = ApiClient.convertToType(data['Phone'], 'String');
      if (data.hasOwnProperty('Mobile'))
        obj.mobile = ApiClient.convertToType(data['Mobile'], 'String');
      if (data.hasOwnProperty('Fax'))
        obj.fax = ApiClient.convertToType(data['Fax'], 'String');
      if (data.hasOwnProperty('Email'))
        obj.email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('Url'))
        obj.url = ApiClient.convertToType(data['Url'], 'String');
      if (data.hasOwnProperty('Swift'))
        obj.swift = ApiClient.convertToType(data['Swift'], 'String');
      if (data.hasOwnProperty('IBAN'))
        obj.IBAN = ApiClient.convertToType(data['IBAN'], 'String');
      if (data.hasOwnProperty('City'))
        obj.city = ApiClient.convertToType(data['City'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} _number
   */
  exports.prototype._number = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} sSNumber
   */
  exports.prototype.sSNumber = undefined;

  /**
   * @member {String} address1
   */
  exports.prototype.address1 = undefined;

  /**
   * @member {String} address2
   */
  exports.prototype.address2 = undefined;

  /**
   * @member {String} address3
   */
  exports.prototype.address3 = undefined;

  /**
   * @member {String} zipCode
   */
  exports.prototype.zipCode = undefined;

  /**
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * @member {String} bankCode
   */
  exports.prototype.bankCode = undefined;

  /**
   * @member {String} bankAccGroup
   */
  exports.prototype.bankAccGroup = undefined;

  /**
   * @member {String} bankAccount
   */
  exports.prototype.bankAccount = undefined;

  /**
   * @member {String} vATNumber
   */
  exports.prototype.vATNumber = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {String} mobile
   */
  exports.prototype.mobile = undefined;

  /**
   * @member {String} fax
   */
  exports.prototype.fax = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {String} swift
   */
  exports.prototype.swift = undefined;

  /**
   * @member {String} IBAN
   */
  exports.prototype.IBAN = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;


  return exports;
}));