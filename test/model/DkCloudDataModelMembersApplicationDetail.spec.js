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
    describe('DkCloudDataModelMembersApplicationDetail', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelMembersApplicationDetail();
      });

      it('should create an instance of DkCloudDataModelMembersApplicationDetail', function() {
        // TODO: update the code to test DkCloudDataModelMembersApplicationDetail
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelMembersApplicationDetail);
      });

      it('should have the property typeOfPayment (base name: "TypeOfPayment")', function() {
        // TODO: update the code to test the property typeOfPayment
        expect(instance).to.have.property('typeOfPayment');
        // expect(instance.typeOfPayment).to.be(expectedValueLiteral);
      });

      it('should have the property actualPaymentDate (base name: "ActualPaymentDate")', function() {
        // TODO: update the code to test the property actualPaymentDate
        expect(instance).to.have.property('actualPaymentDate');
        // expect(instance.actualPaymentDate).to.be(expectedValueLiteral);
      });

      it('should have the property paymentAmount (base name: "PaymentAmount")', function() {
        // TODO: update the code to test the property paymentAmount
        expect(instance).to.have.property('paymentAmount');
        // expect(instance.paymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property paymentPaid (base name: "PaymentPaid")', function() {
        // TODO: update the code to test the property paymentPaid
        expect(instance).to.have.property('paymentPaid');
        // expect(instance.paymentPaid).to.be(expectedValueLiteral);
      });

      it('should have the property amountPaid (base name: "AmountPaid")', function() {
        // TODO: update the code to test the property amountPaid
        expect(instance).to.have.property('amountPaid');
        // expect(instance.amountPaid).to.be(expectedValueLiteral);
      });

      it('should have the property taxAmountPaid (base name: "TaxAmountPaid")', function() {
        // TODO: update the code to test the property taxAmountPaid
        expect(instance).to.have.property('taxAmountPaid');
        // expect(instance.taxAmountPaid).to.be(expectedValueLiteral);
      });

      it('should have the property extraProperties (base name: "ExtraProperties")', function() {
        // TODO: update the code to test the property extraProperties
        expect(instance).to.have.property('extraProperties');
        // expect(instance.extraProperties).to.be(expectedValueLiteral);
      });

    });
  });

}));