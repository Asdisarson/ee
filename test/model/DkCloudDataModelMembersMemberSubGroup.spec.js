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
    describe('DkCloudDataModelMembersMemberSubGroup', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelMembersMemberSubGroup();
      });

      it('should create an instance of DkCloudDataModelMembersMemberSubGroup', function() {
        // TODO: update the code to test DkCloudDataModelMembersMemberSubGroup
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelMembersMemberSubGroup);
      });

      it('should have the property group (base name: "Group")', function() {
        // TODO: update the code to test the property group
        expect(instance).to.have.property('group');
        // expect(instance.group).to.be(expectedValueLiteral);
      });

      it('should have the property subGroup (base name: "SubGroup")', function() {
        // TODO: update the code to test the property subGroup
        expect(instance).to.have.property('subGroup');
        // expect(instance.subGroup).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property groupDescription (base name: "GroupDescription")', function() {
        // TODO: update the code to test the property groupDescription
        expect(instance).to.have.property('groupDescription');
        // expect(instance.groupDescription).to.be(expectedValueLiteral);
      });

      it('should have the property defaultItemCode (base name: "DefaultItemCode")', function() {
        // TODO: update the code to test the property defaultItemCode
        expect(instance).to.have.property('defaultItemCode');
        // expect(instance.defaultItemCode).to.be(expectedValueLiteral);
      });

      it('should have the property extraProperties (base name: "ExtraProperties")', function() {
        // TODO: update the code to test the property extraProperties
        expect(instance).to.have.property('extraProperties');
        // expect(instance.extraProperties).to.be(expectedValueLiteral);
      });

    });
  });

}));