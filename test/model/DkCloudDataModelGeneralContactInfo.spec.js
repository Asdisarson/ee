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
    describe('DkCloudDataModelGeneralContactInfo', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelGeneralContactInfo();
      });

      it('should create an instance of DkCloudDataModelGeneralContactInfo', function() {
        // TODO: update the code to test DkCloudDataModelGeneralContactInfo
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelGeneralContactInfo);
      });

      it('should have the property phone (base name: "Phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property direct (base name: "Direct")', function() {
        // TODO: update the code to test the property direct
        expect(instance).to.have.property('direct');
        // expect(instance.direct).to.be(expectedValueLiteral);
      });

      it('should have the property mobile (base name: "Mobile")', function() {
        // TODO: update the code to test the property mobile
        expect(instance).to.have.property('mobile');
        // expect(instance.mobile).to.be(expectedValueLiteral);
      });

      it('should have the property fax (base name: "Fax")', function() {
        // TODO: update the code to test the property fax
        expect(instance).to.have.property('fax');
        // expect(instance.fax).to.be(expectedValueLiteral);
      });

      it('should have the property telex (base name: "Telex")', function() {
        // TODO: update the code to test the property telex
        expect(instance).to.have.property('telex');
        // expect(instance.telex).to.be(expectedValueLiteral);
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

    });
  });

}));