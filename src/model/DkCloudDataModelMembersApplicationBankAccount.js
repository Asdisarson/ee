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
    root.DkPlusApi.DkCloudDataModelMembersApplicationBankAccount = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelMembersApplicationBankAccount model module.
   * @module model/DkCloudDataModelMembersApplicationBankAccount
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelMembersApplicationBankAccount</code>.
   * @alias module:model/DkCloudDataModelMembersApplicationBankAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelMembersApplicationBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelMembersApplicationBankAccount} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelMembersApplicationBankAccount} The populated <code>DkCloudDataModelMembersApplicationBankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code'))
        obj.code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('Group'))
        obj.group = ApiClient.convertToType(data['Group'], 'String');
      if (data.hasOwnProperty('Account'))
        obj.account = ApiClient.convertToType(data['Account'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * @member {String} account
   */
  exports.prototype.account = undefined;


  return exports;
}));