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
    describe('DkCloudDataModelPermissionGeneralPermissionModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelPermissionGeneralPermissionModel();
      });

      it('should create an instance of DkCloudDataModelPermissionGeneralPermissionModel', function() {
        // TODO: update the code to test DkCloudDataModelPermissionGeneralPermissionModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelPermissionGeneralPermissionModel);
      });

      it('should have the property employee (base name: "Employee")', function() {
        // TODO: update the code to test the property employee
        expect(instance).to.have.property('employee');
        // expect(instance.employee).to.be(expectedValueLiteral);
      });

      it('should have the property myPages (base name: "MyPages")', function() {
        // TODO: update the code to test the property myPages
        expect(instance).to.have.property('myPages');
        // expect(instance.myPages).to.be(expectedValueLiteral);
      });

      it('should have the property timeClock (base name: "TimeClock")', function() {
        // TODO: update the code to test the property timeClock
        expect(instance).to.have.property('timeClock');
        // expect(instance.timeClock).to.be(expectedValueLiteral);
      });

      it('should have the property dim1 (base name: "Dim1")', function() {
        // TODO: update the code to test the property dim1
        expect(instance).to.have.property('dim1');
        // expect(instance.dim1).to.be(expectedValueLiteral);
      });

      it('should have the property dim2 (base name: "Dim2")', function() {
        // TODO: update the code to test the property dim2
        expect(instance).to.have.property('dim2');
        // expect(instance.dim2).to.be(expectedValueLiteral);
      });

      it('should have the property dim3 (base name: "Dim3")', function() {
        // TODO: update the code to test the property dim3
        expect(instance).to.have.property('dim3');
        // expect(instance.dim3).to.be(expectedValueLiteral);
      });

      it('should have the property dashboard (base name: "Dashboard")', function() {
        // TODO: update the code to test the property dashboard
        expect(instance).to.have.property('dashboard');
        // expect(instance.dashboard).to.be(expectedValueLiteral);
      });

    });
  });

}));