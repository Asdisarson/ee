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
    define(['ApiClient', 'model/DkCloudDataModelCustomersContactModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DkCloudDataModelCustomersContactModel'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.ContactApi = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelCustomersContactModel);
  }
}(this, function(ApiClient, DkCloudDataModelCustomersContactModel) {
  'use strict';

  /**
   * Contact service.
   * @module api/ContactApi
   * @version v1
   */

  /**
   * Constructs a new ContactApi. 
   * @alias module:api/ContactApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactCreateContact operation.
     * @callback module:api/ContactApi~contactCreateContactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a contact
     * @param {String} customer Customer Number
     * @param {module:model/DkCloudDataModelCustomersContactModel} value Contact Model
     * @param {module:api/ContactApi~contactCreateContactCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactCreateContact = function(customer, value, callback) {
      var postBody = value;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling contactCreateContact");
      }

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling contactCreateContact");
      }


      var pathParams = {
        'customer': customer
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
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/Customer/{customer}/Contact', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactDelete operation.
     * @callback module:api/ContactApi~contactDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Contact
     * @param {String} customer Customer Number
     * @param {String} contactId Contact Number
     * @param {module:api/ContactApi~contactDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactDelete = function(customer, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling contactDelete");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling contactDelete");
      }


      var pathParams = {
        'customer': customer,
        'contactId': contactId
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/Customer/{customer}/Contact/{contactId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactGetContact operation.
     * @callback module:api/ContactApi~contactGetContactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DkCloudDataModelCustomersContactModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact assigned to a customer
     * @param {String} customer Customer Number
     * @param {String} contactId Contact Number
     * @param {module:api/ContactApi~contactGetContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DkCloudDataModelCustomersContactModel}
     */
    this.contactGetContact = function(customer, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling contactGetContact");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling contactGetContact");
      }


      var pathParams = {
        'customer': customer,
        'contactId': contactId
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
      var returnType = DkCloudDataModelCustomersContactModel;

      return this.apiClient.callApi(
        '/api/v1/Customer/{customer}/Contact/{contactId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactGetContacts operation.
     * @callback module:api/ContactApi~contactGetContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelCustomersContactModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts assigned to a customer
     * @param {String} customer Customer Number
     * @param {module:api/ContactApi~contactGetContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelCustomersContactModel>}
     */
    this.contactGetContacts = function(customer, callback) {
      var postBody = null;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling contactGetContacts");
      }


      var pathParams = {
        'customer': customer
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
      var returnType = [DkCloudDataModelCustomersContactModel];

      return this.apiClient.callApi(
        '/api/v1/Customer/{customer}/Contact', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactPut operation.
     * @callback module:api/ContactApi~contactPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contact
     * @param {String} customer Customer number
     * @param {String} contactId Cintact Number
     * @param {module:model/DkCloudDataModelCustomersContactModel} value Contact Model
     * @param {module:api/ContactApi~contactPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactPut = function(customer, contactId, value, callback) {
      var postBody = value;

      // verify the required parameter 'customer' is set
      if (customer === undefined || customer === null) {
        throw new Error("Missing the required parameter 'customer' when calling contactPut");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling contactPut");
      }

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling contactPut");
      }


      var pathParams = {
        'customer': customer,
        'contactId': contactId
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
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/Customer/{customer}/Contact/{contactId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));