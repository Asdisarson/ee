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
    describe('DkPlusAPIModelsInvoiceHead', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkPlusAPIModelsInvoiceHead();
      });

      it('should create an instance of DkPlusAPIModelsInvoiceHead', function() {
        // TODO: update the code to test DkPlusAPIModelsInvoiceHead
        expect(instance).to.be.a(DkPlusApi.DkPlusAPIModelsInvoiceHead);
      });

      it('should have the property customer (base name: "Customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "Reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property text1 (base name: "Text1")', function() {
        // TODO: update the code to test the property text1
        expect(instance).to.have.property('text1');
        // expect(instance.text1).to.be(expectedValueLiteral);
      });

      it('should have the property text2 (base name: "Text2")', function() {
        // TODO: update the code to test the property text2
        expect(instance).to.have.property('text2');
        // expect(instance.text2).to.be(expectedValueLiteral);
      });

      it('should have the property term (base name: "Term")', function() {
        // TODO: update the code to test the property term
        expect(instance).to.have.property('term');
        // expect(instance.term).to.be(expectedValueLiteral);
      });

      it('should have the property mode (base name: "Mode")', function() {
        // TODO: update the code to test the property mode
        expect(instance).to.have.property('mode');
        // expect(instance.mode).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "Date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "DueDate")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "Currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property salesPerson (base name: "SalesPerson")', function() {
        // TODO: update the code to test the property salesPerson
        expect(instance).to.have.property('salesPerson');
        // expect(instance.salesPerson).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "Exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property options (base name: "Options")', function() {
        // TODO: update the code to test the property options
        expect(instance).to.have.property('options');
        // expect(instance.options).to.be(expectedValueLiteral);
      });

      it('should have the property lines (base name: "Lines")', function() {
        // TODO: update the code to test the property lines
        expect(instance).to.have.property('lines');
        // expect(instance.lines).to.be(expectedValueLiteral);
      });

      it('should have the property payments (base name: "Payments")', function() {
        // TODO: update the code to test the property payments
        expect(instance).to.have.property('payments');
        // expect(instance.payments).to.be(expectedValueLiteral);
      });

      it('should have the property attachment (base name: "Attachment")', function() {
        // TODO: update the code to test the property attachment
        expect(instance).to.have.property('attachment');
        // expect(instance.attachment).to.be(expectedValueLiteral);
      });

      it('should have the property receiver (base name: "Receiver")', function() {
        // TODO: update the code to test the property receiver
        expect(instance).to.have.property('receiver');
        // expect(instance.receiver).to.be(expectedValueLiteral);
      });

      it('should have the property contact (base name: "Contact")', function() {
        // TODO: update the code to test the property contact
        expect(instance).to.have.property('contact');
        // expect(instance.contact).to.be(expectedValueLiteral);
      });

      it('should have the property saleType (base name: "SaleType")', function() {
        // TODO: update the code to test the property saleType
        expect(instance).to.have.property('saleType');
        // expect(instance.saleType).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "Properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property project (base name: "Project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
      });

    });
  });

}));