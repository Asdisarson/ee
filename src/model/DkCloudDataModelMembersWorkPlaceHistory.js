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
    root.DkPlusApi.DkCloudDataModelMembersWorkPlaceHistory = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelMembersWorkPlaceHistory model module.
   * @module model/DkCloudDataModelMembersWorkPlaceHistory
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelMembersWorkPlaceHistory</code>.
   * @alias module:model/DkCloudDataModelMembersWorkPlaceHistory
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelMembersWorkPlaceHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelMembersWorkPlaceHistory} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelMembersWorkPlaceHistory} The populated <code>DkCloudDataModelMembersWorkPlaceHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('WorkPlaceNumber'))
        obj.workPlaceNumber = ApiClient.convertToType(data['WorkPlaceNumber'], 'String');
      if (data.hasOwnProperty('WorkPlaceName'))
        obj.workPlaceName = ApiClient.convertToType(data['WorkPlaceName'], 'String');
      if (data.hasOwnProperty('DateFrom'))
        obj.dateFrom = ApiClient.convertToType(data['DateFrom'], 'Date');
      if (data.hasOwnProperty('DateTo'))
        obj.dateTo = ApiClient.convertToType(data['DateTo'], 'Date');
      if (data.hasOwnProperty('JobRatio'))
        obj.jobRatio = ApiClient.convertToType(data['JobRatio'], 'Number');
      if (data.hasOwnProperty('ExtraProperties'))
        obj.extraProperties = ApiClient.convertToType(data['ExtraProperties'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * @member {String} workPlaceNumber
   */
  exports.prototype.workPlaceNumber = undefined;

  /**
   * @member {String} workPlaceName
   */
  exports.prototype.workPlaceName = undefined;

  /**
   * @member {Date} dateFrom
   */
  exports.prototype.dateFrom = undefined;

  /**
   * @member {Date} dateTo
   */
  exports.prototype.dateTo = undefined;

  /**
   * @member {Number} jobRatio
   */
  exports.prototype.jobRatio = undefined;

  /**
   * @member {Object.<String, String>} extraProperties
   */
  exports.prototype.extraProperties = undefined;


  return exports;
}));