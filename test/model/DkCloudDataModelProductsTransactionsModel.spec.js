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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DkPlusApi);
  }
}(this, function(expect, DkPlusApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DkCloudDataModelProductsTransactionsModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelProductsTransactionsModel();
      });

      it('should create an instance of DkCloudDataModelProductsTransactionsModel', function() {
        // TODO: update the code to test DkCloudDataModelProductsTransactionsModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelProductsTransactionsModel);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "CreatedBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property modified (base name: "Modified")', function() {
        // TODO: update the code to test the property modified
        expect(instance).to.have.property('modified');
        // expect(instance.modified).to.be(expectedValueLiteral);
      });

      it('should have the property origin (base name: "Origin")', function() {
        // TODO: update the code to test the property origin
        expect(instance).to.have.property('origin');
        // expect(instance.origin).to.be(expectedValueLiteral);
      });

      it('should have the property headId (base name: "HeadId")', function() {
        // TODO: update the code to test the property headId
        expect(instance).to.have.property('headId');
        // expect(instance.headId).to.be(expectedValueLiteral);
      });

      it('should have the property sequence (base name: "Sequence")', function() {
        // TODO: update the code to test the property sequence
        expect(instance).to.have.property('sequence');
        // expect(instance.sequence).to.be(expectedValueLiteral);
      });

      it('should have the property itemCode (base name: "ItemCode")', function() {
        // TODO: update the code to test the property itemCode
        expect(instance).to.have.property('itemCode');
        // expect(instance.itemCode).to.be(expectedValueLiteral);
      });

      it('should have the property warehouse (base name: "Warehouse")', function() {
        // TODO: update the code to test the property warehouse
        expect(instance).to.have.property('warehouse');
        // expect(instance.warehouse).to.be(expectedValueLiteral);
      });

      it('should have the property subGroup1 (base name: "SubGroup1")', function() {
        // TODO: update the code to test the property subGroup1
        expect(instance).to.have.property('subGroup1');
        // expect(instance.subGroup1).to.be(expectedValueLiteral);
      });

      it('should have the property subGroup2 (base name: "SubGroup2")', function() {
        // TODO: update the code to test the property subGroup2
        expect(instance).to.have.property('subGroup2');
        // expect(instance.subGroup2).to.be(expectedValueLiteral);
      });

      it('should have the property subGroup3 (base name: "SubGroup3")', function() {
        // TODO: update the code to test the property subGroup3
        expect(instance).to.have.property('subGroup3');
        // expect(instance.subGroup3).to.be(expectedValueLiteral);
      });

      it('should have the property subGroup4 (base name: "SubGroup4")', function() {
        // TODO: update the code to test the property subGroup4
        expect(instance).to.have.property('subGroup4');
        // expect(instance.subGroup4).to.be(expectedValueLiteral);
      });

      it('should have the property vendor (base name: "Vendor")', function() {
        // TODO: update the code to test the property vendor
        expect(instance).to.have.property('vendor');
        // expect(instance.vendor).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "Customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property voucher (base name: "Voucher")', function() {
        // TODO: update the code to test the property voucher
        expect(instance).to.have.property('voucher');
        // expect(instance.voucher).to.be(expectedValueLiteral);
      });

      it('should have the property transactionCode (base name: "TransactionCode")', function() {
        // TODO: update the code to test the property transactionCode
        expect(instance).to.have.property('transactionCode');
        // expect(instance.transactionCode).to.be(expectedValueLiteral);
      });

      it('should have the property journalDate (base name: "JournalDate")', function() {
        // TODO: update the code to test the property journalDate
        expect(instance).to.have.property('journalDate');
        // expect(instance.journalDate).to.be(expectedValueLiteral);
      });

      it('should have the property journalType (base name: "JournalType")', function() {
        // TODO: update the code to test the property journalType
        expect(instance).to.have.property('journalType');
        // expect(instance.journalType).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property purchasePrice (base name: "PurchasePrice")', function() {
        // TODO: update the code to test the property purchasePrice
        expect(instance).to.have.property('purchasePrice');
        // expect(instance.purchasePrice).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "CurrencyCode")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "Exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property costPrice (base name: "CostPrice")', function() {
        // TODO: update the code to test the property costPrice
        expect(instance).to.have.property('costPrice');
        // expect(instance.costPrice).to.be(expectedValueLiteral);
      });

      it('should have the property costAmount (base name: "CostAmount")', function() {
        // TODO: update the code to test the property costAmount
        expect(instance).to.have.property('costAmount');
        // expect(instance.costAmount).to.be(expectedValueLiteral);
      });

      it('should have the property salesAmount (base name: "SalesAmount")', function() {
        // TODO: update the code to test the property salesAmount
        expect(instance).to.have.property('salesAmount');
        // expect(instance.salesAmount).to.be(expectedValueLiteral);
      });

      it('should have the property inventOnHand (base name: "InventOnHand")', function() {
        // TODO: update the code to test the property inventOnHand
        expect(instance).to.have.property('inventOnHand');
        // expect(instance.inventOnHand).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "Text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "Reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property dim1 (base name: "Dim1")', function() {
        // TODO: update the code to test the property dim1
        expect(instance).to.have.property('dim1');
        // expect(instance.dim1).to.be(expectedValueLiteral);
      });

      it('should have the property dim2 (base name: "Dim2")', function() {
        // TODO: update the code to test the property dim2
        expect(instance).to.have.property('dim2');
        // expect(instance.dim2).to.be(expectedValueLiteral);
      });

      it('should have the property dim3 (base name: "Dim3")', function() {
        // TODO: update the code to test the property dim3
        expect(instance).to.have.property('dim3');
        // expect(instance.dim3).to.be(expectedValueLiteral);
      });

      it('should have the property netWeight (base name: "NetWeight")', function() {
        // TODO: update the code to test the property netWeight
        expect(instance).to.have.property('netWeight');
        // expect(instance.netWeight).to.be(expectedValueLiteral);
      });

      it('should have the property unitVolume (base name: "UnitVolume")', function() {
        // TODO: update the code to test the property unitVolume
        expect(instance).to.have.property('unitVolume');
        // expect(instance.unitVolume).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfPackages (base name: "NumberOfPackages")', function() {
        // TODO: update the code to test the property numberOfPackages
        expect(instance).to.have.property('numberOfPackages');
        // expect(instance.numberOfPackages).to.be(expectedValueLiteral);
      });

      it('should have the property countedQuantity (base name: "CountedQuantity")', function() {
        // TODO: update the code to test the property countedQuantity
        expect(instance).to.have.property('countedQuantity');
        // expect(instance.countedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property jobNumber (base name: "JobNumber")', function() {
        // TODO: update the code to test the property jobNumber
        expect(instance).to.have.property('jobNumber');
        // expect(instance.jobNumber).to.be(expectedValueLiteral);
      });

      it('should have the property vendorPrice (base name: "VendorPrice")', function() {
        // TODO: update the code to test the property vendorPrice
        expect(instance).to.have.property('vendorPrice');
        // expect(instance.vendorPrice).to.be(expectedValueLiteral);
      });

      it('should have the property vendorDiscount (base name: "VendorDiscount")', function() {
        // TODO: update the code to test the property vendorDiscount
        expect(instance).to.have.property('vendorDiscount');
        // expect(instance.vendorDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property fabrication (base name: "Fabrication")', function() {
        // TODO: update the code to test the property fabrication
        expect(instance).to.have.property('fabrication');
        // expect(instance.fabrication).to.be(expectedValueLiteral);
      });

      it('should have the property batch (base name: "Batch")', function() {
        // TODO: update the code to test the property batch
        expect(instance).to.have.property('batch');
        // expect(instance.batch).to.be(expectedValueLiteral);
      });

      it('should have the property batchExpiry (base name: "BatchExpiry")', function() {
        // TODO: update the code to test the property batchExpiry
        expect(instance).to.have.property('batchExpiry');
        // expect(instance.batchExpiry).to.be(expectedValueLiteral);
      });

      it('should have the property _typeOf (base name: "TypeOf")', function() {
        // TODO: update the code to test the property _typeOf
        expect(instance).to.have.property('_typeOf');
        // expect(instance._typeOf).to.be(expectedValueLiteral);
      });

      it('should have the property purchaseAmount (base name: "PurchaseAmount")', function() {
        // TODO: update the code to test the property purchaseAmount
        expect(instance).to.have.property('purchaseAmount');
        // expect(instance.purchaseAmount).to.be(expectedValueLiteral);
      });

      it('should have the property unitCode (base name: "UnitCode")', function() {
        // TODO: update the code to test the property unitCode
        expect(instance).to.have.property('unitCode');
        // expect(instance.unitCode).to.be(expectedValueLiteral);
      });

      it('should have the property iNPUnitCode (base name: "INPUnitCode")', function() {
        // TODO: update the code to test the property iNPUnitCode
        expect(instance).to.have.property('iNPUnitCode');
        // expect(instance.iNPUnitCode).to.be(expectedValueLiteral);
      });

      it('should have the property poBatchId (base name: "PoBatchId")', function() {
        // TODO: update the code to test the property poBatchId
        expect(instance).to.have.property('poBatchId');
        // expect(instance.poBatchId).to.be(expectedValueLiteral);
      });

      it('should have the property jobRequestId (base name: "JobRequestId")', function() {
        // TODO: update the code to test the property jobRequestId
        expect(instance).to.have.property('jobRequestId');
        // expect(instance.jobRequestId).to.be(expectedValueLiteral);
      });

    });
  });

}));