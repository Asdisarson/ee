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
    define(['ApiClient', 'model/DkCloudDataModelProductsWarehouseModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DkCloudDataModelProductsWarehouseModel'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.WarehouseApi = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelProductsWarehouseModel);
  }
}(this, function(ApiClient, DkCloudDataModelProductsWarehouseModel) {
  'use strict';

  /**
   * Warehouse service.
   * @module api/WarehouseApi
   * @version v1
   */

  /**
   * Constructs a new WarehouseApi. 
   * @alias module:api/WarehouseApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the warehouseGetProductWarehouses operation.
     * @callback module:api/WarehouseApi~warehouseGetProductWarehousesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelProductsWarehouseModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all product warehouses
     * @param {module:api/WarehouseApi~warehouseGetProductWarehousesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelProductsWarehouseModel>}
     */
    this.warehouseGetProductWarehouses = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [DkCloudDataModelProductsWarehouseModel];

      return this.apiClient.callApi(
        '/api/v1/productwarehouse', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));