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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DkCloudDataModelGeneralDim1Model', 'model/DkCloudDataModelGeneralDim2Model', 'model/DkCloudDataModelGeneralDim3Model'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DkCloudDataModelGeneralDim1Model'), require('../model/DkCloudDataModelGeneralDim2Model'), require('../model/DkCloudDataModelGeneralDim3Model'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.DimensionApi = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelGeneralDim1Model, root.DkPlusApi.DkCloudDataModelGeneralDim2Model, root.DkPlusApi.DkCloudDataModelGeneralDim3Model);
  }
}(this, function(ApiClient, DkCloudDataModelGeneralDim1Model, DkCloudDataModelGeneralDim2Model, DkCloudDataModelGeneralDim3Model) {
  'use strict';

  /**
   * Dimension service.
   * @module api/DimensionApi
   * @version v1
   */

  /**
   * Constructs a new DimensionApi. 
   * @alias module:api/DimensionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dimensionGetDimmentions operation.
     * @callback module:api/DimensionApi~dimensionGetDimmentionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelGeneralDim1Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dimensions 1
     * @param {Number} page Page Number
     * @param {Number} size Objects per page
     * @param {Object} opts Optional parameters
     * @param {Date} opts.modifedAfter Modified After
     * @param {Date} opts.modifiedBefore Modified Before
     * @param {String} opts.include Fields to return
     * @param {module:api/DimensionApi~dimensionGetDimmentionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelGeneralDim1Model>}
     */
    this.dimensionGetDimmentions = function(page, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling dimensionGetDimmentions");
      }

      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling dimensionGetDimmentions");
      }


      var pathParams = {
        'page': page,
        'size': size
      };
      var queryParams = {
        'modifedAfter': opts['modifedAfter'],
        'modifiedBefore': opts['modifiedBefore'],
        'include': opts['include'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [DkCloudDataModelGeneralDim1Model];

      return this.apiClient.callApi(
        '/api/v1/general/dimension/{page}/{size}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dimensionGetDimmentions2 operation.
     * @callback module:api/DimensionApi~dimensionGetDimmentions2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelGeneralDim2Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dimensions 2
     * @param {Number} page Page Number
     * @param {Number} size Objects per page
     * @param {Object} opts Optional parameters
     * @param {Date} opts.modifedAfter Modified After
     * @param {Date} opts.modifiedBefore Modified Before
     * @param {String} opts.include Fields to return
     * @param {module:api/DimensionApi~dimensionGetDimmentions2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelGeneralDim2Model>}
     */
    this.dimensionGetDimmentions2 = function(page, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling dimensionGetDimmentions2");
      }

      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling dimensionGetDimmentions2");
      }


      var pathParams = {
        'page': page,
        'size': size
      };
      var queryParams = {
        'modifedAfter': opts['modifedAfter'],
        'modifiedBefore': opts['modifiedBefore'],
        'include': opts['include'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [DkCloudDataModelGeneralDim2Model];

      return this.apiClient.callApi(
        '/api/v1/general/dimension2/{page}/{size}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dimensionGetDimmentions3 operation.
     * @callback module:api/DimensionApi~dimensionGetDimmentions3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelGeneralDim3Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dimensions 3
     * @param {Number} page Page Number
     * @param {Number} size Objects per page
     * @param {Object} opts Optional parameters
     * @param {Date} opts.modifedAfter Modified After
     * @param {Date} opts.modifiedBefore Modified Before
     * @param {String} opts.include Fields to return
     * @param {module:api/DimensionApi~dimensionGetDimmentions3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelGeneralDim3Model>}
     */
    this.dimensionGetDimmentions3 = function(page, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling dimensionGetDimmentions3");
      }

      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling dimensionGetDimmentions3");
      }


      var pathParams = {
        'page': page,
        'size': size
      };
      var queryParams = {
        'modifedAfter': opts['modifedAfter'],
        'modifiedBefore': opts['modifiedBefore'],
        'include': opts['include'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [DkCloudDataModelGeneralDim3Model];

      return this.apiClient.callApi(
        '/api/v1/general/dimension3/{page}/{size}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));