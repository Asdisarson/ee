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
    describe('DkCloudDataModelMembersStatus', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelMembersStatus();
      });

      it('should create an instance of DkCloudDataModelMembersStatus', function() {
        // TODO: update the code to test DkCloudDataModelMembersStatus
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelMembersStatus);
      });

      it('should have the property blocked (base name: "Blocked")', function() {
        // TODO: update the code to test the property blocked
        expect(instance).to.have.property('blocked');
        // expect(instance.blocked).to.be(expectedValueLiteral);
      });

      it('should have the property dead (base name: "Dead")', function() {
        // TODO: update the code to test the property dead
        expect(instance).to.have.property('dead');
        // expect(instance.dead).to.be(expectedValueLiteral);
      });

      it('should have the property retired (base name: "Retired")', function() {
        // TODO: update the code to test the property retired
        expect(instance).to.have.property('retired');
        // expect(instance.retired).to.be(expectedValueLiteral);
      });

      it('should have the property disabled (base name: "Disabled")', function() {
        // TODO: update the code to test the property disabled
        expect(instance).to.have.property('disabled');
        // expect(instance.disabled).to.be(expectedValueLiteral);
      });

    });
  });

}));