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
    describe('DkCloudDataModelCustomersTransactionModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelCustomersTransactionModel();
      });

      it('should create an instance of DkCloudDataModelCustomersTransactionModel', function() {
        // TODO: update the code to test DkCloudDataModelCustomersTransactionModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelCustomersTransactionModel);
      });

      it('should have the property modified (base name: "Modified")', function() {
        // TODO: update the code to test the property modified
        expect(instance).to.have.property('modified');
        // expect(instance.modified).to.be(expectedValueLiteral);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
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

      it('should have the property invoiceNumber (base name: "InvoiceNumber")', function() {
        // TODO: update the code to test the property invoiceNumber
        expect(instance).to.have.property('invoiceNumber');
        // expect(instance.invoiceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "Customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "CreatedBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
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

      it('should have the property journalDate (base name: "JournalDate")', function() {
        // TODO: update the code to test the property journalDate
        expect(instance).to.have.property('journalDate');
        // expect(instance.journalDate).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "DueDate")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property journalHeadCode (base name: "JournalHeadCode")', function() {
        // TODO: update the code to test the property journalHeadCode
        expect(instance).to.have.property('journalHeadCode');
        // expect(instance.journalHeadCode).to.be(expectedValueLiteral);
      });

      it('should have the property settledCurrencyAmount (base name: "SettledCurrencyAmount")', function() {
        // TODO: update the code to test the property settledCurrencyAmount
        expect(instance).to.have.property('settledCurrencyAmount');
        // expect(instance.settledCurrencyAmount).to.be(expectedValueLiteral);
      });

      it('should have the property settledAmount (base name: "SettledAmount")', function() {
        // TODO: update the code to test the property settledAmount
        expect(instance).to.have.property('settledAmount');
        // expect(instance.settledAmount).to.be(expectedValueLiteral);
      });

      it('should have the property settledStatus (base name: "SettledStatus")', function() {
        // TODO: update the code to test the property settledStatus
        expect(instance).to.have.property('settledStatus');
        // expect(instance.settledStatus).to.be(expectedValueLiteral);
      });

      it('should have the property settled (base name: "Settled")', function() {
        // TODO: update the code to test the property settled
        expect(instance).to.have.property('settled');
        // expect(instance.settled).to.be(expectedValueLiteral);
      });

      it('should have the property inputAmount (base name: "InputAmount")', function() {
        // TODO: update the code to test the property inputAmount
        expect(instance).to.have.property('inputAmount');
        // expect(instance.inputAmount).to.be(expectedValueLiteral);
      });

      it('should have the property currencyAmount (base name: "CurrencyAmount")', function() {
        // TODO: update the code to test the property currencyAmount
        expect(instance).to.have.property('currencyAmount');
        // expect(instance.currencyAmount).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "Amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "Currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "Exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "Code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property voucher (base name: "Voucher")', function() {
        // TODO: update the code to test the property voucher
        expect(instance).to.have.property('voucher');
        // expect(instance.voucher).to.be(expectedValueLiteral);
      });

      it('should have the property origin (base name: "Origin")', function() {
        // TODO: update the code to test the property origin
        expect(instance).to.have.property('origin');
        // expect(instance.origin).to.be(expectedValueLiteral);
      });

      it('should have the property claimStatus (base name: "ClaimStatus")', function() {
        // TODO: update the code to test the property claimStatus
        expect(instance).to.have.property('claimStatus');
        // expect(instance.claimStatus).to.be(expectedValueLiteral);
      });

      it('should have the property recordType (base name: "RecordType")', function() {
        // TODO: update the code to test the property recordType
        expect(instance).to.have.property('recordType');
        // expect(instance.recordType).to.be(expectedValueLiteral);
      });

      it('should have the property journalType (base name: "JournalType")', function() {
        // TODO: update the code to test the property journalType
        expect(instance).to.have.property('journalType');
        // expect(instance.journalType).to.be(expectedValueLiteral);
      });

      it('should have the property settleId (base name: "SettleId")', function() {
        // TODO: update the code to test the property settleId
        expect(instance).to.have.property('settleId');
        // expect(instance.settleId).to.be(expectedValueLiteral);
      });

      it('should have the property objectDate (base name: "ObjectDate")', function() {
        // TODO: update the code to test the property objectDate
        expect(instance).to.have.property('objectDate');
        // expect(instance.objectDate).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "Deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

    });
  });

}));