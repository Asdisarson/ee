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
    describe('DkPlusMailModelMailInfo', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkPlusMailModelMailInfo();
      });

      it('should create an instance of DkPlusMailModelMailInfo', function() {
        // TODO: update the code to test DkPlusMailModelMailInfo
        expect(instance).to.be.a(DkPlusApi.DkPlusMailModelMailInfo);
      });

      it('should have the property displayName (base name: "DisplayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "To")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property CC (base name: "CC")', function() {
        // TODO: update the code to test the property CC
        expect(instance).to.have.property('CC');
        // expect(instance.CC).to.be(expectedValueLiteral);
      });

      it('should have the property BCC (base name: "BCC")', function() {
        // TODO: update the code to test the property BCC
        expect(instance).to.have.property('BCC');
        // expect(instance.BCC).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "Subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property body (base name: "Body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "Priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "Attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property hasRecipients (base name: "HasRecipients")', function() {
        // TODO: update the code to test the property hasRecipients
        expect(instance).to.have.property('hasRecipients');
        // expect(instance.hasRecipients).to.be(expectedValueLiteral);
      });

    });
  });

}));