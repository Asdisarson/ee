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
    root.DkPlusApi.DkCloudDataModelProjectProjectTaskLinkModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelProjectProjectTaskLinkModel model module.
   * @module model/DkCloudDataModelProjectProjectTaskLinkModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelProjectProjectTaskLinkModel</code>.
   * @alias module:model/DkCloudDataModelProjectProjectTaskLinkModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelProjectProjectTaskLinkModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelProjectProjectTaskLinkModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelProjectProjectTaskLinkModel} The populated <code>DkCloudDataModelProjectProjectTaskLinkModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TaskID'))
        obj.taskID = ApiClient.convertToType(data['TaskID'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} taskID
   */
  exports.prototype.taskID = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;


  return exports;
}));