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
    describe('DkPlusAPIModelsInvoiceReceiver', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkPlusAPIModelsInvoiceReceiver();
      });

      it('should create an instance of DkPlusAPIModelsInvoiceReceiver', function() {
        // TODO: update the code to test DkPlusAPIModelsInvoiceReceiver
        expect(instance).to.be.a(DkPlusApi.DkPlusAPIModelsInvoiceReceiver);
      });

      it('should have the property _number (base name: "Number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property address1 (base name: "Address1")', function() {
        // TODO: update the code to test the property address1
        expect(instance).to.have.property('address1');
        // expect(instance.address1).to.be(expectedValueLiteral);
      });

      it('should have the property address2 (base name: "Address2")', function() {
        // TODO: update the code to test the property address2
        expect(instance).to.have.property('address2');
        // expect(instance.address2).to.be(expectedValueLiteral);
      });

      it('should have the property address3 (base name: "Address3")', function() {
        // TODO: update the code to test the property address3
        expect(instance).to.have.property('address3');
        // expect(instance.address3).to.be(expectedValueLiteral);
      });

      it('should have the property zipCode (base name: "ZipCode")', function() {
        // TODO: update the code to test the property zipCode
        expect(instance).to.have.property('zipCode');
        // expect(instance.zipCode).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "Phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property mobile (base name: "Mobile")', function() {
        // TODO: update the code to test the property mobile
        expect(instance).to.have.property('mobile');
        // expect(instance.mobile).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "CountryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "City")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property contact (base name: "Contact")', function() {
        // TODO: update the code to test the property contact
        expect(instance).to.have.property('contact');
        // expect(instance.contact).to.be(expectedValueLiteral);
      });

    });
  });

}));