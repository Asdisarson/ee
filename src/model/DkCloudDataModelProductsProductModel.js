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
    define(['ApiClient', 'model/DkCloudDataModelGeneralAttachmentModel', 'model/DkCloudDataModelGeneralChangesModel', 'model/DkCloudDataModelProductsAlternativeProductModel', 'model/DkCloudDataModelProductsBarcodesModel', 'model/DkCloudDataModelProductsCategoriesModel', 'model/DkCloudDataModelProductsCurrencyPriceModel', 'model/DkCloudDataModelProductsProductMemo', 'model/DkCloudDataModelProductsProductUnitModel', 'model/DkCloudDataModelProductsProductVendor', 'model/DkCloudDataModelProductsProductWarehouseModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DkCloudDataModelGeneralAttachmentModel'), require('./DkCloudDataModelGeneralChangesModel'), require('./DkCloudDataModelProductsAlternativeProductModel'), require('./DkCloudDataModelProductsBarcodesModel'), require('./DkCloudDataModelProductsCategoriesModel'), require('./DkCloudDataModelProductsCurrencyPriceModel'), require('./DkCloudDataModelProductsProductMemo'), require('./DkCloudDataModelProductsProductUnitModel'), require('./DkCloudDataModelProductsProductVendor'), require('./DkCloudDataModelProductsProductWarehouseModel'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DkCloudDataModelProductsProductModel = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelGeneralAttachmentModel, root.DkPlusApi.DkCloudDataModelGeneralChangesModel, root.DkPlusApi.DkCloudDataModelProductsAlternativeProductModel, root.DkPlusApi.DkCloudDataModelProductsBarcodesModel, root.DkPlusApi.DkCloudDataModelProductsCategoriesModel, root.DkPlusApi.DkCloudDataModelProductsCurrencyPriceModel, root.DkPlusApi.DkCloudDataModelProductsProductMemo, root.DkPlusApi.DkCloudDataModelProductsProductUnitModel, root.DkPlusApi.DkCloudDataModelProductsProductVendor, root.DkPlusApi.DkCloudDataModelProductsProductWarehouseModel);
  }
}(this, function(ApiClient, DkCloudDataModelGeneralAttachmentModel, DkCloudDataModelGeneralChangesModel, DkCloudDataModelProductsAlternativeProductModel, DkCloudDataModelProductsBarcodesModel, DkCloudDataModelProductsCategoriesModel, DkCloudDataModelProductsCurrencyPriceModel, DkCloudDataModelProductsProductMemo, DkCloudDataModelProductsProductUnitModel, DkCloudDataModelProductsProductVendor, DkCloudDataModelProductsProductWarehouseModel) {
  'use strict';

  /**
   * The DkCloudDataModelProductsProductModel model module.
   * @module model/DkCloudDataModelProductsProductModel
   * @version v1
   */

  /**
   * Constructs a new <code>DkCloudDataModelProductsProductModel</code>.
   * @alias module:model/DkCloudDataModelProductsProductModel
   * @class
   * @param itemCode {String} 
   */
  var exports = function(itemCode) {
    this.itemCode = itemCode;
  };

  /**
   * Constructs a <code>DkCloudDataModelProductsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DkCloudDataModelProductsProductModel} obj Optional instance to populate.
   * @return {module:model/DkCloudDataModelProductsProductModel} The populated <code>DkCloudDataModelProductsProductModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('RecordID'))
        obj.recordID = ApiClient.convertToType(data['RecordID'], 'Number');
      if (data.hasOwnProperty('ItemCode'))
        obj.itemCode = ApiClient.convertToType(data['ItemCode'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Description2'))
        obj.description2 = ApiClient.convertToType(data['Description2'], 'String');
      if (data.hasOwnProperty('Inactive'))
        obj.inactive = ApiClient.convertToType(data['Inactive'], 'Boolean');
      if (data.hasOwnProperty('RecordCreated'))
        obj.recordCreated = ApiClient.convertToType(data['RecordCreated'], 'Date');
      if (data.hasOwnProperty('RecordModified'))
        obj.recordModified = ApiClient.convertToType(data['RecordModified'], 'Date');
      if (data.hasOwnProperty('ObjectDate'))
        obj.objectDate = ApiClient.convertToType(data['ObjectDate'], 'Date');
      if (data.hasOwnProperty('AliasItemCode'))
        obj.aliasItemCode = ApiClient.convertToType(data['AliasItemCode'], 'String');
      if (data.hasOwnProperty('ItemClass'))
        obj.itemClass = ApiClient.convertToType(data['ItemClass'], 'Number');
      if (data.hasOwnProperty('UnitCode'))
        obj.unitCode = ApiClient.convertToType(data['UnitCode'], 'String');
      if (data.hasOwnProperty('Group'))
        obj.group = ApiClient.convertToType(data['Group'], 'String');
      if (data.hasOwnProperty('UnitQuantity'))
        obj.unitQuantity = ApiClient.convertToType(data['UnitQuantity'], 'Number');
      if (data.hasOwnProperty('NetWeight'))
        obj.netWeight = ApiClient.convertToType(data['NetWeight'], 'Number');
      if (data.hasOwnProperty('UnitVolume'))
        obj.unitVolume = ApiClient.convertToType(data['UnitVolume'], 'Number');
      if (data.hasOwnProperty('TotalQuantityInWarehouse'))
        obj.totalQuantityInWarehouse = ApiClient.convertToType(data['TotalQuantityInWarehouse'], 'Number');
      if (data.hasOwnProperty('PurchasePrice'))
        obj.purchasePrice = ApiClient.convertToType(data['PurchasePrice'], 'Number');
      if (data.hasOwnProperty('CurrencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['CurrencyCode'], 'String');
      if (data.hasOwnProperty('Exchange'))
        obj.exchange = ApiClient.convertToType(data['Exchange'], 'Number');
      if (data.hasOwnProperty('UnitPrice1'))
        obj.unitPrice1 = ApiClient.convertToType(data['UnitPrice1'], 'Number');
      if (data.hasOwnProperty('Purchasefactor'))
        obj.purchasefactor = ApiClient.convertToType(data['Purchasefactor'], 'Number');
      if (data.hasOwnProperty('CostPrice'))
        obj.costPrice = ApiClient.convertToType(data['CostPrice'], 'Number');
      if (data.hasOwnProperty('ProfitRatio1'))
        obj.profitRatio1 = ApiClient.convertToType(data['ProfitRatio1'], 'Number');
      if (data.hasOwnProperty('UnitPrice1WithTax'))
        obj.unitPrice1WithTax = ApiClient.convertToType(data['UnitPrice1WithTax'], 'Number');
      if (data.hasOwnProperty('UnitPrice2'))
        obj.unitPrice2 = ApiClient.convertToType(data['UnitPrice2'], 'Number');
      if (data.hasOwnProperty('UnitPrice3WithTax'))
        obj.unitPrice3WithTax = ApiClient.convertToType(data['UnitPrice3WithTax'], 'Number');
      if (data.hasOwnProperty('ShowItemInWebShop'))
        obj.showItemInWebShop = ApiClient.convertToType(data['ShowItemInWebShop'], 'Boolean');
      if (data.hasOwnProperty('AllowDiscount'))
        obj.allowDiscount = ApiClient.convertToType(data['AllowDiscount'], 'Boolean');
      if (data.hasOwnProperty('Discount'))
        obj.discount = ApiClient.convertToType(data['Discount'], 'Number');
      if (data.hasOwnProperty('UnitPrice2WithTax'))
        obj.unitPrice2WithTax = ApiClient.convertToType(data['UnitPrice2WithTax'], 'Number');
      if (data.hasOwnProperty('UnitPrice3'))
        obj.unitPrice3 = ApiClient.convertToType(data['UnitPrice3'], 'Number');
      if (data.hasOwnProperty('PropositionPrice'))
        obj.propositionPrice = ApiClient.convertToType(data['PropositionPrice'], 'Number');
      if (data.hasOwnProperty('PropositionDateTo'))
        obj.propositionDateTo = ApiClient.convertToType(data['PropositionDateTo'], 'Date');
      if (data.hasOwnProperty('ExtraDesc1'))
        obj.extraDesc1 = ApiClient.convertToType(data['ExtraDesc1'], 'String');
      if (data.hasOwnProperty('ExtraDesc2'))
        obj.extraDesc2 = ApiClient.convertToType(data['ExtraDesc2'], 'String');
      if (data.hasOwnProperty('IsVariation'))
        obj.isVariation = ApiClient.convertToType(data['IsVariation'], 'Boolean');
      if (data.hasOwnProperty('Variation'))
        obj.variation = ApiClient.convertToType(data['Variation'], 'String');
      if (data.hasOwnProperty('TaxPercent'))
        obj.taxPercent = ApiClient.convertToType(data['TaxPercent'], 'Number');
      if (data.hasOwnProperty('SalesTaxCode'))
        obj.salesTaxCode = ApiClient.convertToType(data['SalesTaxCode'], 'String');
      if (data.hasOwnProperty('SalesLedgerCode'))
        obj.salesLedgerCode = ApiClient.convertToType(data['SalesLedgerCode'], 'String');
      if (data.hasOwnProperty('PurchaseTaxCode'))
        obj.purchaseTaxCode = ApiClient.convertToType(data['PurchaseTaxCode'], 'String');
      if (data.hasOwnProperty('PurchaseLedgerCode'))
        obj.purchaseLedgerCode = ApiClient.convertToType(data['PurchaseLedgerCode'], 'String');
      if (data.hasOwnProperty('AllowNegativeInventiry'))
        obj.allowNegativeInventiry = ApiClient.convertToType(data['AllowNegativeInventiry'], 'Boolean');
      if (data.hasOwnProperty('DiscountQuantity'))
        obj.discountQuantity = ApiClient.convertToType(data['DiscountQuantity'], 'Number');
      if (data.hasOwnProperty('MaxDiscountAllowed'))
        obj.maxDiscountAllowed = ApiClient.convertToType(data['MaxDiscountAllowed'], 'Number');
      if (data.hasOwnProperty('DefaultSaleQuantity'))
        obj.defaultSaleQuantity = ApiClient.convertToType(data['DefaultSaleQuantity'], 'Number');
      if (data.hasOwnProperty('ExtraFeeItemCode'))
        obj.extraFeeItemCode = ApiClient.convertToType(data['ExtraFeeItemCode'], 'String');
      if (data.hasOwnProperty('CostMethod'))
        obj.costMethod = ApiClient.convertToType(data['CostMethod'], 'String');
      if (data.hasOwnProperty('Dim1'))
        obj.dim1 = ApiClient.convertToType(data['Dim1'], 'String');
      if (data.hasOwnProperty('Dim2'))
        obj.dim2 = ApiClient.convertToType(data['Dim2'], 'String');
      if (data.hasOwnProperty('Dim3'))
        obj.dim3 = ApiClient.convertToType(data['Dim3'], 'String');
      if (data.hasOwnProperty('Deleted'))
        obj.deleted = ApiClient.convertToType(data['Deleted'], 'Boolean');
      if (data.hasOwnProperty('HasAttachments'))
        obj.hasAttachments = ApiClient.convertToType(data['HasAttachments'], 'Boolean');
      if (data.hasOwnProperty('HasBarcodes'))
        obj.hasBarcodes = ApiClient.convertToType(data['HasBarcodes'], 'Boolean');
      if (data.hasOwnProperty('HasCurrencyPrices'))
        obj.hasCurrencyPrices = ApiClient.convertToType(data['HasCurrencyPrices'], 'Boolean');
      if (data.hasOwnProperty('HasUnits'))
        obj.hasUnits = ApiClient.convertToType(data['HasUnits'], 'Boolean');
      if (data.hasOwnProperty('HasAlternative'))
        obj.hasAlternative = ApiClient.convertToType(data['HasAlternative'], 'Boolean');
      if (data.hasOwnProperty('Barcodes'))
        obj.barcodes = ApiClient.convertToType(data['Barcodes'], [DkCloudDataModelProductsBarcodesModel]);
      if (data.hasOwnProperty('Attachments'))
        obj.attachments = ApiClient.convertToType(data['Attachments'], [DkCloudDataModelGeneralAttachmentModel]);
      if (data.hasOwnProperty('Categories'))
        obj.categories = ApiClient.convertToType(data['Categories'], [DkCloudDataModelProductsCategoriesModel]);
      if (data.hasOwnProperty('Warehouses'))
        obj.warehouses = ApiClient.convertToType(data['Warehouses'], [DkCloudDataModelProductsProductWarehouseModel]);
      if (data.hasOwnProperty('CurrencyPrices'))
        obj.currencyPrices = ApiClient.convertToType(data['CurrencyPrices'], [DkCloudDataModelProductsCurrencyPriceModel]);
      if (data.hasOwnProperty('Units'))
        obj.units = ApiClient.convertToType(data['Units'], [DkCloudDataModelProductsProductUnitModel]);
      if (data.hasOwnProperty('Alternative'))
        obj.alternative = ApiClient.convertToType(data['Alternative'], [DkCloudDataModelProductsAlternativeProductModel]);
      if (data.hasOwnProperty('Changes'))
        obj.changes = ApiClient.convertToType(data['Changes'], [DkCloudDataModelGeneralChangesModel]);
      if (data.hasOwnProperty('Memos'))
        obj.memos = ApiClient.convertToType(data['Memos'], [DkCloudDataModelProductsProductMemo]);
      if (data.hasOwnProperty('Vendors'))
        obj.vendors = ApiClient.convertToType(data['Vendors'], [DkCloudDataModelProductsProductVendor]);
    }
    return obj;
  }

  /**
   * @member {Number} recordID
   */
  exports.prototype.recordID = undefined;

  /**
   * @member {String} itemCode
   */
  exports.prototype.itemCode = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} description2
   */
  exports.prototype.description2 = undefined;

  /**
   * @member {Boolean} inactive
   */
  exports.prototype.inactive = undefined;

  /**
   * @member {Date} recordCreated
   */
  exports.prototype.recordCreated = undefined;

  /**
   * @member {Date} recordModified
   */
  exports.prototype.recordModified = undefined;

  /**
   * @member {Date} objectDate
   */
  exports.prototype.objectDate = undefined;

  /**
   * @member {String} aliasItemCode
   */
  exports.prototype.aliasItemCode = undefined;

  /**
   * @member {Number} itemClass
   */
  exports.prototype.itemClass = undefined;

  /**
   * @member {String} unitCode
   */
  exports.prototype.unitCode = undefined;

  /**
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * @member {Number} unitQuantity
   */
  exports.prototype.unitQuantity = undefined;

  /**
   * @member {Number} netWeight
   */
  exports.prototype.netWeight = undefined;

  /**
   * @member {Number} unitVolume
   */
  exports.prototype.unitVolume = undefined;

  /**
   * @member {Number} totalQuantityInWarehouse
   */
  exports.prototype.totalQuantityInWarehouse = undefined;

  /**
   * @member {Number} purchasePrice
   */
  exports.prototype.purchasePrice = undefined;

  /**
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * @member {Number} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * @member {Number} unitPrice1
   */
  exports.prototype.unitPrice1 = undefined;

  /**
   * @member {Number} purchasefactor
   */
  exports.prototype.purchasefactor = undefined;

  /**
   * @member {Number} costPrice
   */
  exports.prototype.costPrice = undefined;

  /**
   * @member {Number} profitRatio1
   */
  exports.prototype.profitRatio1 = undefined;

  /**
   * @member {Number} unitPrice1WithTax
   */
  exports.prototype.unitPrice1WithTax = undefined;

  /**
   * @member {Number} unitPrice2
   */
  exports.prototype.unitPrice2 = undefined;

  /**
   * @member {Number} unitPrice3WithTax
   */
  exports.prototype.unitPrice3WithTax = undefined;

  /**
   * @member {Boolean} showItemInWebShop
   */
  exports.prototype.showItemInWebShop = undefined;

  /**
   * @member {Boolean} allowDiscount
   */
  exports.prototype.allowDiscount = undefined;

  /**
   * @member {Number} discount
   */
  exports.prototype.discount = undefined;

  /**
   * @member {Number} unitPrice2WithTax
   */
  exports.prototype.unitPrice2WithTax = undefined;

  /**
   * @member {Number} unitPrice3
   */
  exports.prototype.unitPrice3 = undefined;

  /**
   * @member {Number} propositionPrice
   */
  exports.prototype.propositionPrice = undefined;

  /**
   * @member {Date} propositionDateTo
   */
  exports.prototype.propositionDateTo = undefined;

  /**
   * @member {String} extraDesc1
   */
  exports.prototype.extraDesc1 = undefined;

  /**
   * @member {String} extraDesc2
   */
  exports.prototype.extraDesc2 = undefined;

  /**
   * @member {Boolean} isVariation
   */
  exports.prototype.isVariation = undefined;

  /**
   * @member {String} variation
   */
  exports.prototype.variation = undefined;

  /**
   * @member {Number} taxPercent
   */
  exports.prototype.taxPercent = undefined;

  /**
   * @member {String} salesTaxCode
   */
  exports.prototype.salesTaxCode = undefined;

  /**
   * @member {String} salesLedgerCode
   */
  exports.prototype.salesLedgerCode = undefined;

  /**
   * @member {String} purchaseTaxCode
   */
  exports.prototype.purchaseTaxCode = undefined;

  /**
   * @member {String} purchaseLedgerCode
   */
  exports.prototype.purchaseLedgerCode = undefined;

  /**
   * @member {Boolean} allowNegativeInventiry
   */
  exports.prototype.allowNegativeInventiry = undefined;

  /**
   * @member {Number} discountQuantity
   */
  exports.prototype.discountQuantity = undefined;

  /**
   * @member {Number} maxDiscountAllowed
   */
  exports.prototype.maxDiscountAllowed = undefined;

  /**
   * @member {Number} defaultSaleQuantity
   */
  exports.prototype.defaultSaleQuantity = undefined;

  /**
   * @member {String} extraFeeItemCode
   */
  exports.prototype.extraFeeItemCode = undefined;

  /**
   * @member {module:model/DkCloudDataModelProductsProductModel.CostMethodEnum} costMethod
   */
  exports.prototype.costMethod = undefined;

  /**
   * @member {String} dim1
   */
  exports.prototype.dim1 = undefined;

  /**
   * @member {String} dim2
   */
  exports.prototype.dim2 = undefined;

  /**
   * @member {String} dim3
   */
  exports.prototype.dim3 = undefined;

  /**
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * @member {Boolean} hasAttachments
   */
  exports.prototype.hasAttachments = undefined;

  /**
   * @member {Boolean} hasBarcodes
   */
  exports.prototype.hasBarcodes = undefined;

  /**
   * @member {Boolean} hasCurrencyPrices
   */
  exports.prototype.hasCurrencyPrices = undefined;

  /**
   * @member {Boolean} hasUnits
   */
  exports.prototype.hasUnits = undefined;

  /**
   * @member {Boolean} hasAlternative
   */
  exports.prototype.hasAlternative = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsBarcodesModel>} barcodes
   */
  exports.prototype.barcodes = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelGeneralAttachmentModel>} attachments
   */
  exports.prototype.attachments = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsCategoriesModel>} categories
   */
  exports.prototype.categories = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsProductWarehouseModel>} warehouses
   */
  exports.prototype.warehouses = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsCurrencyPriceModel>} currencyPrices
   */
  exports.prototype.currencyPrices = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsProductUnitModel>} units
   */
  exports.prototype.units = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsAlternativeProductModel>} alternative
   */
  exports.prototype.alternative = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelGeneralChangesModel>} changes
   */
  exports.prototype.changes = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsProductMemo>} memos
   */
  exports.prototype.memos = undefined;

  /**
   * @member {Array.<module:model/DkCloudDataModelProductsProductVendor>} vendors
   */
  exports.prototype.vendors = undefined;



  /**
   * Allowed values for the <code>costMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CostMethodEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Average"
     * @const
     */
    average: "Average",

    /**
     * value: "FIFO"
     * @const
     */
    FIFO: "FIFO",

    /**
     * value: "LIFO"
     * @const
     */
    LIFO: "LIFO"
  };
  return exports;
}));