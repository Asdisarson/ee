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
    describe('VLinkDkSoftwareDkSOAPTContact', function() {
      beforeEach(function() {
        instance = new DkPlusApi.VLinkDkSoftwareDkSOAPTContact();
      });

      it('should create an instance of VLinkDkSoftwareDkSOAPTContact', function() {
        // TODO: update the code to test VLinkDkSoftwareDkSOAPTContact
        expect(instance).to.be.a(DkPlusApi.VLinkDkSoftwareDkSOAPTContact);
      });

      it('should have the property recordId (base name: "RecordId")', function() {
        // TODO: update the code to test the property recordId
        expect(instance).to.have.property('recordId');
        // expect(instance.recordId).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "Customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
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

      it('should have the property title (base name: "Title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
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

      it('should have the property department (base name: "Department")', function() {
        // TODO: update the code to test the property department
        expect(instance).to.have.property('department');
        // expect(instance.department).to.be(expectedValueLiteral);
      });

      it('should have the property sSNumber (base name: "SSNumber")', function() {
        // TODO: update the code to test the property sSNumber
        expect(instance).to.have.property('sSNumber');
        // expect(instance.sSNumber).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "Phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property phoneLocal (base name: "PhoneLocal")', function() {
        // TODO: update the code to test the property phoneLocal
        expect(instance).to.have.property('phoneLocal');
        // expect(instance.phoneLocal).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobile (base name: "PhoneMobile")', function() {
        // TODO: update the code to test the property phoneMobile
        expect(instance).to.have.property('phoneMobile');
        // expect(instance.phoneMobile).to.be(expectedValueLiteral);
      });

      it('should have the property fax (base name: "Fax")', function() {
        // TODO: update the code to test the property fax
        expect(instance).to.have.property('fax');
        // expect(instance.fax).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "Email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property URL (base name: "URL")', function() {
        // TODO: update the code to test the property URL
        expect(instance).to.have.property('URL');
        // expect(instance.URL).to.be(expectedValueLiteral);
      });

      it('should have the property telex (base name: "Telex")', function() {
        // TODO: update the code to test the property telex
        expect(instance).to.have.property('telex');
        // expect(instance.telex).to.be(expectedValueLiteral);
      });

      it('should have the property jobTitleCode (base name: "JobTitleCode")', function() {
        // TODO: update the code to test the property jobTitleCode
        expect(instance).to.have.property('jobTitleCode');
        // expect(instance.jobTitleCode).to.be(expectedValueLiteral);
      });

      it('should have the property modified (base name: "Modified")', function() {
        // TODO: update the code to test the property modified
        expect(instance).to.have.property('modified');
        // expect(instance.modified).to.be(expectedValueLiteral);
      });

      it('should have the property extraProperties (base name: "ExtraProperties")', function() {
        // TODO: update the code to test the property extraProperties
        expect(instance).to.have.property('extraProperties');
        // expect(instance.extraProperties).to.be(expectedValueLiteral);
      });

    });
  });

}));