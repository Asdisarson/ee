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
    describe('DkCloudDataModelGeneralBankAccountModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelGeneralBankAccountModel();
      });

      it('should create an instance of DkCloudDataModelGeneralBankAccountModel', function() {
        // TODO: update the code to test DkCloudDataModelGeneralBankAccountModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelGeneralBankAccountModel);
      });

      it('should have the property code (base name: "Code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "Owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property ownerName (base name: "OwnerName")', function() {
        // TODO: update the code to test the property ownerName
        expect(instance).to.have.property('ownerName');
        // expect(instance.ownerName).to.be(expectedValueLiteral);
      });

      it('should have the property accountType (base name: "AccountType")', function() {
        // TODO: update the code to test the property accountType
        expect(instance).to.have.property('accountType');
        // expect(instance.accountType).to.be(expectedValueLiteral);
      });

      it('should have the property accountGroup (base name: "AccountGroup")', function() {
        // TODO: update the code to test the property accountGroup
        expect(instance).to.have.property('accountGroup');
        // expect(instance.accountGroup).to.be(expectedValueLiteral);
      });

      it('should have the property account (base name: "Account")', function() {
        // TODO: update the code to test the property account
        expect(instance).to.have.property('account');
        // expect(instance.account).to.be(expectedValueLiteral);
      });

    });
  });

}));