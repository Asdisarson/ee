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

  beforeEach(function() {
    instance = new DkPlusApi.SimpleInvoiceApi();
  });

  describe('(package)', function() {
    describe('SimpleInvoiceApi', function() {
      describe('simpleInvoiceCrateSimpleInvoice', function() {
        it('should call simpleInvoiceCrateSimpleInvoice successfully', function(done) {
          // TODO: uncomment, update parameter values for simpleInvoiceCrateSimpleInvoice call
          /*
          var value = new DkPlusApi.DkCloudDataModelSalesSimpleInvoiceModel();
          value._number = "";
          value.customer = "";
          value._date = new Date();
          value.dueDate = new Date();
          value.discount = 0.0;
          value.discountAmount = 0.0;
          value.receiver = "";
          value.reference = "";
          value.exchange = 0.0;
          value.currency = "";
          value.totalAmount = 0.0;
          value.totalAmountIncVat = 0.0;
          value.salesPerson = "";
          value.text1 = "";
          value.text2 = "";
          value.lines = [new DkPlusApi.DkCloudDataModelSalesSimpleInvoiceLineModel()];
          value.lines[0].itemCode = "";
          value.lines[0].text = "";
          value.lines[0].text2 = "";
          value.lines[0].reference = "";
          value.lines[0].warehouse = "";
          value.lines[0].quantity = 0.0;
          value.lines[0].unitPrice = 0.0;
          value.lines[0].unitPriceIncVAT = 0.0;
          value.lines[0].discount = 0.0;
          value.lines[0].discountAmount = 0.0;
          value.lines[0].discountAmountIncVat = 0.0;
          value.lines[0].totalAmount = 0.0;
          value.lines[0].totalAmountIncVat = 0.0;
          value.payments = [new DkPlusApi.DkCloudDataModelSalesPaymentModel()];
          value.payments[0].ID = 0;
          value.payments[0].amount = 0.0;

          instance.simpleInvoiceCrateSimpleInvoice(value, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('simpleInvoiceGetSimpleInvoice', function() {
        it('should call simpleInvoiceGetSimpleInvoice successfully', function(done) {
          // TODO: uncomment simpleInvoiceGetSimpleInvoice call and complete the assertions
          /*

          instance.simpleInvoiceGetSimpleInvoice(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));