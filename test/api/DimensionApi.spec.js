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
    instance = new DkPlusApi.DimensionApi();
  });

  describe('(package)', function() {
    describe('DimensionApi', function() {
      describe('dimensionGetDimmentions', function() {
        it('should call dimensionGetDimmentions successfully', function(done) {
          // TODO: uncomment, update parameter values for dimensionGetDimmentions call and complete the assertions
          /*
          var page = 56;
          var size = 56;
          var opts = {};
          opts.modifedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.modifiedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.include = "include_example";

          instance.dimensionGetDimmentions(page, size, opts, function(error, data, response) {
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
              expect(data).to.be.a(DkPlusApi.DkCloudDataModelGeneralDim1Model);
              expect(data._number).to.be.a('string');
              expect(data._number).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.modified).to.be.a(Date);
              expect(data.modified).to.be(new Date());
              expect(data.created).to.be.a(Date);
              expect(data.created).to.be(new Date());
              expect(data.closed).to.be.a('boolean');
              expect(data.closed).to.be(false);
              expect(data.skipVAT).to.be.a('boolean');
              expect(data.skipVAT).to.be(false);
              expect(data.skipIncomeVAT).to.be.a('boolean');
              expect(data.skipIncomeVAT).to.be(false);
              expect(data.isInBuildBuisness).to.be.a('boolean');
              expect(data.isInBuildBuisness).to.be(false);
              expect(data.iSAT95).to.be.a('string');
              expect(data.iSAT95).to.be("");
              expect(data.vSKNumber).to.be.a('string');
              expect(data.vSKNumber).to.be("");
              expect(data.siUser).to.be.a('string');
              expect(data.siUser).to.be("");
              expect(data.dimApproverer).to.be.a('string');
              expect(data.dimApproverer).to.be("");
              expect(data.gLSveitCOFOGCode).to.be.a('string');
              expect(data.gLSveitCOFOGCode).to.be("");
              expect(data.dimType).to.be.a('number');
              expect(data.dimType).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('dimensionGetDimmentions2', function() {
        it('should call dimensionGetDimmentions2 successfully', function(done) {
          // TODO: uncomment, update parameter values for dimensionGetDimmentions2 call and complete the assertions
          /*
          var page = 56;
          var size = 56;
          var opts = {};
          opts.modifedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.modifiedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.include = "include_example";

          instance.dimensionGetDimmentions2(page, size, opts, function(error, data, response) {
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
              expect(data).to.be.a(DkPlusApi.DkCloudDataModelGeneralDim2Model);
              expect(data._number).to.be.a('string');
              expect(data._number).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
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
      describe('dimensionGetDimmentions3', function() {
        it('should call dimensionGetDimmentions3 successfully', function(done) {
          // TODO: uncomment, update parameter values for dimensionGetDimmentions3 call and complete the assertions
          /*
          var page = 56;
          var size = 56;
          var opts = {};
          opts.modifedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.modifiedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.include = "include_example";

          instance.dimensionGetDimmentions3(page, size, opts, function(error, data, response) {
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
              expect(data).to.be.a(DkPlusApi.DkCloudDataModelGeneralDim3Model);
              expect(data._number).to.be.a('string');
              expect(data._number).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
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