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
    root.DkPlusApi.DkCloudDataModelGeneralDim2Model = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelGeneralDim2Model model module.
   * @module model/DkCloudDataModelGeneralDim2Model
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelGeneralDim2Model</code>.
   * @alias module:model/DkCloudDataModelGeneralDim2Model
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelGeneralDim2Model</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelGeneralDim2Model} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelGeneralDim2Model} The populated <code>DkCloudDataModelGeneralDim2Model</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number'))
        obj._number = ApiClient.convertToType(data['Number'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Modified'))
        obj.modified = ApiClient.convertToType(data['Modified'], 'Date');
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
   * @member {Date} modified
   */
  exports.prototype.modified = undefined;


  return exports;
}));