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
    root.DkPlusApi.DkCloudDataModelPermissionSalesPermissionModel = factory(root.DkPlusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DkCloudDataModelPermissionSalesPermissionModel model module.
   * @module model/DkCloudDataModelPermissionSalesPermissionModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelPermissionSalesPermissionModel</code>.
   * @alias module:model/DkCloudDataModelPermissionSalesPermissionModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DkCloudDataModelPermissionSalesPermissionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelPermissionSalesPermissionModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelPermissionSalesPermissionModel} The populated <code>DkCloudDataModelPermissionSalesPermissionModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Invoices'))
        obj.invoices = ApiClient.convertToType(data['Invoices'], 'String');
      if (data.hasOwnProperty('InvoicesReport'))
        obj.invoicesReport = ApiClient.convertToType(data['InvoicesReport'], 'String');
      if (data.hasOwnProperty('InvoicesDashboard'))
        obj.invoicesDashboard = ApiClient.convertToType(data['InvoicesDashboard'], 'String');
      if (data.hasOwnProperty('Orders'))
        obj.orders = ApiClient.convertToType(data['Orders'], 'String');
      if (data.hasOwnProperty('Quote'))
        obj.quote = ApiClient.convertToType(data['Quote'], 'String');
      if (data.hasOwnProperty('Subscription'))
        obj.subscription = ApiClient.convertToType(data['Subscription'], 'String');
      if (data.hasOwnProperty('Settings'))
        obj.settings = ApiClient.convertToType(data['Settings'], 'String');
      if (data.hasOwnProperty('Salespersons'))
        obj.salespersons = ApiClient.convertToType(data['Salespersons'], 'String');
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.InvoicesEnum} invoices
   */
  exports.prototype.invoices = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.InvoicesReportEnum} invoicesReport
   */
  exports.prototype.invoicesReport = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.InvoicesDashboardEnum} invoicesDashboard
   */
  exports.prototype.invoicesDashboard = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.OrdersEnum} orders
   */
  exports.prototype.orders = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.QuoteEnum} quote
   */
  exports.prototype.quote = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.SubscriptionEnum} subscription
   */
  exports.prototype.subscription = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.SettingsEnum} settings
   */
  exports.prototype.settings = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.SalespersonsEnum} salespersons
   */
  exports.prototype.salespersons = undefined;

  /**
   * @member {module:model/DkCloudDataModelPermissionSalesPermissionModel.EnabledEnum} enabled
   */
  exports.prototype.enabled = undefined;



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
   * Allowed values for the <code>invoicesReport</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoicesReportEnum = {
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
   * Allowed values for the <code>invoicesDashboard</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoicesDashboardEnum = {
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
   * Allowed values for the <code>orders</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrdersEnum = {
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
   * Allowed values for the <code>quote</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QuoteEnum = {
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
   * Allowed values for the <code>subscription</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubscriptionEnum = {
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
   * Allowed values for the <code>salespersons</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SalespersonsEnum = {
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