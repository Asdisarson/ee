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
    root.DkPlusApi.DkCloudDataModelPermissionVendorPermissionModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelPermissionVendorPermissionModel model module.
   * @module model/DkCloudDataModelPermissionVendorPermissionModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelPermissionVendorPermissionModel</code>.
   * @alias module:model/DkCloudDataModelPermissionVendorPermissionModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelPermissionVendorPermissionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelPermissionVendorPermissionModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelPermissionVendorPermissionModel} The populated <code>DkCloudDataModelPermissionVendorPermissionModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Vendors'))
        obj.vendors = ApiClient.convertToType(data['Vendors'], 'String');
      if (data.hasOwnProperty('VendorReport'))
        obj.vendorReport = ApiClient.convertToType(data['VendorReport'], 'String');
      if (data.hasOwnProperty('Invoices'))
        obj.invoices = ApiClient.convertToType(data['Invoices'], 'String');
      if (data.hasOwnProperty('Approval'))
        obj.approval = ApiClient.convertToType(data['Approval'], 'String');
      if (data.hasOwnProperty('Settings'))
        obj.settings = ApiClient.convertToType(data['Settings'], 'String');
      if (data.hasOwnProperty('Transactions'))
        obj.transactions = ApiClient.convertToType(data['Transactions'], 'String');
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.VendorsEnum} vendors
   */
  exports.prototype.vendors = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.VendorReportEnum} vendorReport
   */
  exports.prototype.vendorReport = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.InvoicesEnum} invoices
   */
  exports.prototype.invoices = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.ApprovalEnum} approval
   */
  exports.prototype.approval = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.SettingsEnum} settings
   */
  exports.prototype.settings = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.TransactionsEnum} transactions
   */
  exports.prototype.transactions = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionVendorPermissionModel.EnabledEnum} enabled
   */
  exports.prototype.enabled = undefined;



  /**
   * Allowed values for the <code>vendors</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VendorsEnum = {
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
   * Allowed values for the <code>vendorReport</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VendorReportEnum = {
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
   * Allowed values for the <code>invoices</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoicesEnum = {
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
   * Allowed values for the <code>approval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApprovalEnum = {
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
   * Allowed values for the <code>settings</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SettingsEnum = {
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
   * Allowed values for the <code>transactions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TransactionsEnum = {
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
   * Allowed values for the <code>enabled</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnabledEnum = {
    /**
     * value: "Enabled"
     * @const
     */
    enabled: "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Blocked"
     * @const
     */
    blocked: "Blocked"
  };
  return exports;
}));