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
    describe('DkCloudDataModelMembersWorkPlaceHistory', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelMembersWorkPlaceHistory();
      });

      it('should create an instance of DkCloudDataModelMembersWorkPlaceHistory', function() {
        // TODO: update the code to test DkCloudDataModelMembersWorkPlaceHistory
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelMembersWorkPlaceHistory);
      });

      it('should have the property workPlaceNumber (base name: "WorkPlaceNumber")', function() {
        // TODO: update the code to test the property workPlaceNumber
        expect(instance).to.have.property('workPlaceNumber');
        // expect(instance.workPlaceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property workPlaceName (base name: "WorkPlaceName")', function() {
        // TODO: update the code to test the property workPlaceName
        expect(instance).to.have.property('workPlaceName');
        // expect(instance.workPlaceName).to.be(expectedValueLiteral);
      });

      it('should have the property dateFrom (base name: "DateFrom")', function() {
        // TODO: update the code to test the property dateFrom
        expect(instance).to.have.property('dateFrom');
        // expect(instance.dateFrom).to.be(expectedValueLiteral);
      });

      it('should have the property dateTo (base name: "DateTo")', function() {
        // TODO: update the code to test the property dateTo
        expect(instance).to.have.property('dateTo');
        // expect(instance.dateTo).to.be(expectedValueLiteral);
      });

      it('should have the property jobRatio (base name: "JobRatio")', function() {
        // TODO: update the code to test the property jobRatio
        expect(instance).to.have.property('jobRatio');
        // expect(instance.jobRatio).to.be(expectedValueLiteral);
      });

      it('should have the property extraProperties (base name: "ExtraProperties")', function() {
        // TODO: update the code to test the property extraProperties
        expect(instance).to.have.property('extraProperties');
        // expect(instance.extraProperties).to.be(expectedValueLiteral);
      });

    });
  });

}));