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
    describe('VLinkDkSoftwareDkSOAPTJobPhaseLink', function() {
      beforeEach(function() {
        instance = new DkPlusApi.VLinkDkSoftwareDkSOAPTJobPhaseLink();
      });

      it('should create an instance of VLinkDkSoftwareDkSOAPTJobPhaseLink', function() {
        // TODO: update the code to test VLinkDkSoftwareDkSOAPTJobPhaseLink
        expect(instance).to.be.a(DkPlusApi.VLinkDkSoftwareDkSOAPTJobPhaseLink);
      });

      it('should have the property phase (base name: "Phase")', function() {
        // TODO: update the code to test the property phase
        expect(instance).to.have.property('phase');
        // expect(instance.phase).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));