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
    describe('DkCloudDataModelGeneralAddress', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelGeneralAddress();
      });

      it('should create an instance of DkCloudDataModelGeneralAddress', function() {
        // TODO: update the code to test DkCloudDataModelGeneralAddress
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelGeneralAddress);
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

      it('should have the property address4 (base name: "Address4")', function() {
        // TODO: update the code to test the property address4
        expect(instance).to.have.property('address4');
        // expect(instance.address4).to.be(expectedValueLiteral);
      });

      it('should have the property zipCode (base name: "ZipCode")', function() {
        // TODO: update the code to test the property zipCode
        expect(instance).to.have.property('zipCode');
        // expect(instance.zipCode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "City")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "CountryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryName (base name: "CountryName")', function() {
        // TODO: update the code to test the property countryName
        expect(instance).to.have.property('countryName');
        // expect(instance.countryName).to.be(expectedValueLiteral);
      });

      it('should have the property countyCode (base name: "CountyCode")', function() {
        // TODO: update the code to test the property countyCode
        expect(instance).to.have.property('countyCode');
        // expect(instance.countyCode).to.be(expectedValueLiteral);
      });

    });
  });

}));