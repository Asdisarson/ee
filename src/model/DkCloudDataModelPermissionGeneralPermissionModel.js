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
    root.DkPlusApi.DkCloudDataModelPermissionGeneralPermissionModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelPermissionGeneralPermissionModel model module.
   * @module model/DkCloudDataModelPermissionGeneralPermissionModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelPermissionGeneralPermissionModel</code>.
   * @alias module:model/DkCloudDataModelPermissionGeneralPermissionModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelPermissionGeneralPermissionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelPermissionGeneralPermissionModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelPermissionGeneralPermissionModel} The populated <code>DkCloudDataModelPermissionGeneralPermissionModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Employee'))
        obj.employee = ApiClient.convertToType(data['Employee'], 'String');
      if (data.hasOwnProperty('MyPages'))
        obj.myPages = ApiClient.convertToType(data['MyPages'], 'String');
      if (data.hasOwnProperty('TimeClock'))
        obj.timeClock = ApiClient.convertToType(data['TimeClock'], 'String');
      if (data.hasOwnProperty('Dim1'))
        obj.dim1 = ApiClient.convertToType(data['Dim1'], 'String');
      if (data.hasOwnProperty('Dim2'))
        obj.dim2 = ApiClient.convertToType(data['Dim2'], 'String');
      if (data.hasOwnProperty('Dim3'))
        obj.dim3 = ApiClient.convertToType(data['Dim3'], 'String');
      if (data.hasOwnProperty('Dashboard'))
        obj.dashboard = ApiClient.convertToType(data['Dashboard'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.EmployeeEnum} employee
   */
  exports.prototype.employee = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.MyPagesEnum} myPages
   */
  exports.prototype.myPages = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.TimeClockEnum} timeClock
   */
  exports.prototype.timeClock = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.Dim1Enum} dim1
   */
  exports.prototype.dim1 = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.Dim2Enum} dim2
   */
  exports.prototype.dim2 = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.Dim3Enum} dim3
   */
  exports.prototype.dim3 = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionGeneralPermissionModel.DashboardEnum} dashboard
   */
  exports.prototype.dashboard = undefined;



  /**
   * Allowed values for the <code>employee</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EmployeeEnum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>myPages</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MyPagesEnum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>timeClock</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TimeClockEnum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>dim1</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim1Enum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>dim2</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim2Enum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>dim3</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim3Enum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };

  /**
   * Allowed values for the <code>dashboard</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DashboardEnum = {
    /**
     * value: "Full"
     * @const
     */
    full: "Full",

    /**
     * value: "View"
     * @const
     */
    view: "View",

    /**
     * value: "Modify"
     * @const
     */
    modify: "Modify",

    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Deny"
     * @const
     */
    deny: "Deny"
  };
  return exports;
}));