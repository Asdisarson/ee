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
    describe('DkCloudDataModelMembersCourse', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelMembersCourse();
      });

      it('should create an instance of DkCloudDataModelMembersCourse', function() {
        // TODO: update the code to test DkCloudDataModelMembersCourse
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelMembersCourse);
      });

      it('should have the property code (base name: "Code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "Text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));