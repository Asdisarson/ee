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
    describe('DkCloudDataModelProductsVariationModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelProductsVariationModel();
      });

      it('should create an instance of DkCloudDataModelProductsVariationModel', function() {
        // TODO: update the code to test DkCloudDataModelProductsVariationModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelProductsVariationModel);
      });

      it('should have the property code (base name: "Code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property code2 (base name: "Code2")', function() {
        // TODO: update the code to test the property code2
        expect(instance).to.have.property('code2');
        // expect(instance.code2).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property description2 (base name: "Description2")', function() {
        // TODO: update the code to test the property description2
        expect(instance).to.have.property('description2');
        // expect(instance.description2).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property quantityOnBackOrders (base name: "QuantityOnBackOrders")', function() {
        // TODO: update the code to test the property quantityOnBackOrders
        expect(instance).to.have.property('quantityOnBackOrders');
        // expect(instance.quantityOnBackOrders).to.be(expectedValueLiteral);
      });

    });
  });

}));