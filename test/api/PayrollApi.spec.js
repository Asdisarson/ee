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
    instance = new DkPlusApi.PayrollApi();
  });

  describe('(package)', function() {
    describe('PayrollApi', function() {
      describe('payrollGetPayrollPayslip', function() {
        it('should call payrollGetPayrollPayslip successfully', function(done) {
          // TODO: uncomment, update parameter values for payrollGetPayrollPayslip call and complete the assertions
          /*
          var page = 56;
          var count = 56;
          var opts = {};
          opts.createdAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.createdBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.from = new Date("2013-10-20T19:20:30+01:00");
          opts.to = new Date("2013-10-20T19:20:30+01:00");
          opts.modifiedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.modifiedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.year = 56;
          opts.payDayAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.payDayBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.dim1 = "dim1_example";
          opts.dim2 = "dim2_example";
          opts.dim3 = "dim3_example";
          opts.employee = "employee_example";
          opts.recordid = 56;
          opts.include = "include_example";
          opts.payRunNumber = 56;
          opts.paySlipNumber = 56;
          opts.sort = "sort_example";
          opts.sorttype = "sorttype_example";

          instance.payrollGetPayrollPayslip(page, count, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(DkPlusApi.DkCloudDataModelPayrollPayslip);
              expect(data.uId).to.be.a('string');
              expect(data.uId).to.be("00000000-0000-0000-0000-000000000000");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("UnPosted");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.year).to.be.a('number');
              expect(data.year).to.be(0);
              expect(data.payRunNumber).to.be.a('number');
              expect(data.payRunNumber).to.be("0");
              expect(data.paySlipNumber).to.be.a('number');
              expect(data.paySlipNumber).to.be("0");
              expect(data.employee).to.be.a('string');
              expect(data.employee).to.be("");
              expect(data.dim1).to.be.a('string');
              expect(data.dim1).to.be("");
              expect(data.dim2).to.be.a('string');
              expect(data.dim2).to.be("");
              expect(data.dim3).to.be.a('string');
              expect(data.dim3).to.be("");
              expect(data.from).to.be.a(Date);
              expect(data.from).to.be(new Date());
              expect(data.to).to.be.a(Date);
              expect(data.to).to.be(new Date());
              expect(data.payDay).to.be.a(Date);
              expect(data.payDay).to.be(new Date());
              expect(data.totalSalary).to.be.a('number');
              expect(data.totalSalary).to.be(0.0);
              expect(data.totalTaxBaseSalary).to.be.a('number');
              expect(data.totalTaxBaseSalary).to.be(0.0);
              expect(data.totalDeduction).to.be.a('number');
              expect(data.totalDeduction).to.be(0.0);
              expect(data.roundOff).to.be.a('number');
              expect(data.roundOff).to.be(0.0);
              expect(data.objectDate).to.be.a(Date);
              expect(data.objectDate).to.be(new Date());
              expect(data.deleted).to.be.a('boolean');
              expect(data.deleted).to.be(false);
              {
                let dataCtr = data.lines;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(DkPlusApi.DkCloudDataModelPayrollPayslipLine);
                  expect(data.sequence).to.be.a('number');
                  expect(data.sequence).to.be("0");
                  expect(data.payTable).to.be.a('string');
                  expect(data.payTable).to.be("");
                  expect(data.paymentCode).to.be.a('string');
                  expect(data.paymentCode).to.be("");
                  expect(data.paymentCodeType).to.be.a('string');
                  expect(data.paymentCodeType).to.be("General");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.dim1).to.be.a('string');
                  expect(data.dim1).to.be("");
                  expect(data.dim2).to.be.a('string');
                  expect(data.dim2).to.be("");
                  expect(data.dim3).to.be.a('string');
                  expect(data.dim3).to.be("");
                  expect(data.units).to.be.a('number');
                  expect(data.units).to.be(0.0);
                  expect(data.unitRate).to.be.a('number');
                  expect(data.unitRate).to.be(0.0);
                  expect(data.amount).to.be.a('number');
                  expect(data.amount).to.be(0.0);
                  expect(data.from).to.be.a(Date);
                  expect(data.from).to.be(new Date());
                  expect(data.to).to.be.a(Date);
                  expect(data.to).to.be(new Date());
                  expect(data.extraJob).to.be.a('string');
                  expect(data.extraJob).to.be("");
                  expect(data._number).to.be.a('number');
                  expect(data._number).to.be("0");
                  expect(data.linkedTo).to.be.a('number');
                  expect(data.linkedTo).to.be("0");
                  expect(data.objectDate).to.be.a(Date);
                  expect(data.objectDate).to.be(new Date());
                  expect(data.deleted).to.be.a('boolean');
                  expect(data.deleted).to.be(false);
                  expect(data.created).to.be.a(Date);
                  expect(data.created).to.be(new Date());
                  expect(data.modified).to.be.a(Date);
                  expect(data.modified).to.be(new Date());
  
                        }
              }
              expect(data.created).to.be.a(Date);
              expect(data.created).to.be(new Date());
              expect(data.modified).to.be.a(Date);
              expect(data.modified).to.be(new Date());
            }

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