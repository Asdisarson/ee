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
    root.DkPlusApi.DkCloudDataModelSettingsVendorSetting = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelSettingsVendorSetting model module.
   * @module model/DkCloudDataModelSettingsVendorSetting
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelSettingsVendorSetting</code>.
   * @alias module:model/DkCloudDataModelSettingsVendorSetting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelSettingsVendorSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelSettingsVendorSetting} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelSettingsVendorSetting} The populated <code>DkCloudDataModelSettingsVendorSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('Confirmation'))
        obj.confirmation = ApiClient.convertToType(data['Confirmation'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * @member {Boolean} confirmation
   */
  exports.prototype.confirmation = undefined;


  return exports;
}));