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
    root.DkPlusApi.DkCloudDataModelSettingsTimeClockSettingModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelSettingsTimeClockSettingModel model module.
   * @module model/DkCloudDataModelSettingsTimeClockSettingModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelSettingsTimeClockSettingModel</code>.
   * @alias module:model/DkCloudDataModelSettingsTimeClockSettingModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelSettingsTimeClockSettingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelSettingsTimeClockSettingModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelSettingsTimeClockSettingModel} The populated <code>DkCloudDataModelSettingsTimeClockSettingModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('Text'))
        obj.text = ApiClient.convertToType(data['Text'], 'String');
      if (data.hasOwnProperty('Project'))
        obj.project = ApiClient.convertToType(data['Project'], 'String');
      if (data.hasOwnProperty('Phase'))
        obj.phase = ApiClient.convertToType(data['Phase'], 'String');
      if (data.hasOwnProperty('Task'))
        obj.task = ApiClient.convertToType(data['Task'], 'String');
      if (data.hasOwnProperty('Dim1'))
        obj.dim1 = ApiClient.convertToType(data['Dim1'], 'String');
      if (data.hasOwnProperty('Dim2'))
        obj.dim2 = ApiClient.convertToType(data['Dim2'], 'String');
      if (data.hasOwnProperty('Dim3'))
        obj.dim3 = ApiClient.convertToType(data['Dim3'], 'String');
      if (data.hasOwnProperty('SendToProjectTransaction'))
        obj.sendToProjectTransaction = ApiClient.convertToType(data['SendToProjectTransaction'], 'Boolean');
      if (data.hasOwnProperty('RoundUpDaytimeAlso'))
        obj.roundUpDaytimeAlso = ApiClient.convertToType(data['RoundUpDaytimeAlso'], 'Boolean');
      if (data.hasOwnProperty('RoundFactor'))
        obj.roundFactor = ApiClient.convertToType(data['RoundFactor'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.TextEnum} text
   */
  exports.prototype.text = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.ProjectEnum} project
   */
  exports.prototype.project = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.PhaseEnum} phase
   */
  exports.prototype.phase = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.TaskEnum} task
   */
  exports.prototype.task = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.Dim1Enum} dim1
   */
  exports.prototype.dim1 = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.Dim2Enum} dim2
   */
  exports.prototype.dim2 = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.Dim3Enum} dim3
   */
  exports.prototype.dim3 = undefined;

  /**
   * @member {Boolean} sendToProjectTransaction
   */
  exports.prototype.sendToProjectTransaction = undefined;

  /**
   * @member {Boolean} roundUpDaytimeAlso
   */
  exports.prototype.roundUpDaytimeAlso = undefined;

  /**
   * @member {module:model/DkCloudDataModelSettingsTimeClockSettingModel.RoundFactorEnum} roundFactor
   */
  exports.prototype.roundFactor = undefined;



  /**
   * Allowed values for the <code>text</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TextEnum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose"
  };

  /**
   * Allowed values for the <code>project</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProjectEnum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose"
  };

  /**
   * Allowed values for the <code>phase</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PhaseEnum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose"
  };

  /**
   * Allowed values for the <code>task</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TaskEnum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose"
  };

  /**
   * Allowed values for the <code>dim1</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim1Enum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose",

    /**
     * value: "User"
     * @const
     */
    user: "User",

    /**
     * value: "Employee"
     * @const
     */
    employee: "Employee"
  };

  /**
   * Allowed values for the <code>dim2</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim2Enum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose",

    /**
     * value: "User"
     * @const
     */
    user: "User",

    /**
     * value: "Employee"
     * @const
     */
    employee: "Employee"
  };

  /**
   * Allowed values for the <code>dim3</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Dim3Enum = {
    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Optional"
     * @const
     */
    optional: "Optional",

    /**
     * value: "Mandatory"
     * @const
     */
    mandatory: "Mandatory",

    /**
     * value: "MandatoryClose"
     * @const
     */
    mandatoryClose: "MandatoryClose",

    /**
     * value: "User"
     * @const
     */
    user: "User",

    /**
     * value: "Employee"
     * @const
     */
    employee: "Employee"
  };

  /**
   * Allowed values for the <code>roundFactor</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoundFactorEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "OneMin"
     * @const
     */
    oneMin: "OneMin",

    /**
     * value: "FiveMin"
     * @const
     */
    fiveMin: "FiveMin",

    /**
     * value: "TenMin"
     * @const
     */
    tenMin: "TenMin",

    /**
     * value: "Quarter"
     * @const
     */
    quarter: "Quarter",

    /**
     * value: "Half"
     * @const
     */
    half: "Half",

    /**
     * value: "Whole"
     * @const
     */
    whole: "Whole"
  };
  return exports;
}));