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
    define(['ApiClient', 'model/DkCloudDataModelMembersApplicationContactBankAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkCloudDataModelMembersApplicationContactBankAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkCloudDataModelMembersApplicationContact = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelMembersApplicationContactBankAccount);
  }
}(this, function(ApiClient, DkCloudDataModelMembersApplicationContactBankAccount) {
  'use strict';

  /**
   * The DkCloudDataModelMembersApplicationContact model module.
   * @module model/DkCloudDataModelMembersApplicationContact
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelMembersApplicationContact</code>.
   * @alias module:model/DkCloudDataModelMembersApplicationContact
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelMembersApplicationContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelMembersApplicationContact} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelMembersApplicationContact} The populated <code>DkCloudDataModelMembersApplicationContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number'))
        obj._number = ApiClient.convertToType(data['Number'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Phone'))
        obj.phone = ApiClient.convertToType(data['Phone'], 'String');
      if (data.hasOwnProperty('Mobile'))
        obj.mobile = ApiClient.convertToType(data['Mobile'], 'String');
      if (data.hasOwnProperty('Email'))
        obj.email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('BankAccount'))
        obj.bankAccount = DkCloudDataModelMembersApplicationContactBankAccount.constructFromObject(data['BankAccount']);
      if (data.hasOwnProperty('ExtraProperties'))
        obj.extraProperties = ApiClient.convertToType(data['ExtraProperties'], {'String': 'String'});
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
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {String} mobile
   */
  exports.prototype.mobile = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {module:model/DkCloudDataModelMembersApplicationContactBankAccount} bankAccount
   */
  exports.prototype.bankAccount = undefined;

  /**
   * @member {Object.<String, String>} extraProperties
   */
  exports.prototype.extraProperties = undefined;


  return exports;
}));