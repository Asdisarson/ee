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
    define(['ApiClient', 'model/DkCloudDataModelMembersCareer', 'model/DkCloudDataModelMembersEducation', 'model/DkCloudDataModelMembersFee', 'model/DkCloudDataModelMembersMember', 'model/DkCloudDataModelMembersMemberFund', 'model/DkCloudDataModelMembersMemberShipCompany', 'model/DkCloudDataModelMembersMemberSubGroup', 'model/DkCloudDataModelMembersResume'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DkCloudDataModelMembersCareer'), require('../model/DkCloudDataModelMembersEducation'), require('../model/DkCloudDataModelMembersFee'), require('../model/DkCloudDataModelMembersMember'), require('../model/DkCloudDataModelMembersMemberFund'), require('../model/DkCloudDataModelMembersMemberShipCompany'), require('../model/DkCloudDataModelMembersMemberSubGroup'), require('../model/DkCloudDataModelMembersResume'));
  } else {
    // Browser globals (root is window)
    if (!root.DkPlusApi) {
      root.DkPlusApi = {};
    }
    root.DkPlusApi.MemberApi = factory(root.DkPlusApi.ApiClient, root.DkPlusApi.DkCloudDataModelMembersCareer, root.DkPlusApi.DkCloudDataModelMembersEducation, root.DkPlusApi.DkCloudDataModelMembersFee, root.DkPlusApi.DkCloudDataModelMembersMember, root.DkPlusApi.DkCloudDataModelMembersMemberFund, root.DkPlusApi.DkCloudDataModelMembersMemberShipCompany, root.DkPlusApi.DkCloudDataModelMembersMemberSubGroup, root.DkPlusApi.DkCloudDataModelMembersResume);
  }
}(this, function(ApiClient, DkCloudDataModelMembersCareer, DkCloudDataModelMembersEducation, DkCloudDataModelMembersFee, DkCloudDataModelMembersMember, DkCloudDataModelMembersMemberFund, DkCloudDataModelMembersMemberShipCompany, DkCloudDataModelMembersMemberSubGroup, DkCloudDataModelMembersResume) {
  'use strict';

  /**
   * Member service.
   * @module api/MemberApi
   * @version v1
   */

  /**
   * Constructs a new MemberApi. 
   * @alias module:api/MemberApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the memberCreateMember operation.
     * @callback module:api/MemberApi~memberCreateMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DkCloudDataModelMembersMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Member
     * @param {module:model/DkCloudDataModelMembersMember} obj Member Model
     * @param {module:api/MemberApi~memberCreateMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DkCloudDataModelMembersMember}
     */
    this.memberCreateMember = function(obj, callback) {
      var postBody = obj;

      // verify the required parameter 'obj' is set
      if (obj === undefined || obj === null) {
        throw new Error("Missing the required parameter 'obj' when calling memberCreateMember");
      }


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
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DkCloudDataModelMembersMember;

      return this.apiClient.callApi(
        '/api/v1/member', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberCreateMemberFee operation.
     * @callback module:api/MemberApi~memberCreateMemberFeeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use this method to create a member fee
     * @param {String} _number Member Number
     * @param {module:model/DkCloudDataModelMembersFee} fee Fee Model
     * @param {module:api/MemberApi~memberCreateMemberFeeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.memberCreateMemberFee = function(_number, fee, callback) {
      var postBody = fee;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberCreateMemberFee");
      }

      // verify the required parameter 'fee' is set
      if (fee === undefined || fee === null) {
        throw new Error("Missing the required parameter 'fee' when calling memberCreateMemberFee");
      }


      var pathParams = {
        'number': _number
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
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/fee', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGet operation.
     * @callback module:api/MemberApi~memberGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Memebers
     * @param {Number} page Page Number
     * @param {Number} size Members per Page
     * @param {Object} opts Optional parameters
     * @param {Date} opts.modified Modified After
     * @param {String} opts.course Cource Code
     * @param {Boolean} opts.blocked Blocked
     * @param {module:api/MemberApi~memberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersMember>}
     */
    this.memberGet = function(page, size, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling memberGet");
      }

      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling memberGet");
      }


      var pathParams = {
        'page': page,
        'size': size
      };
      var queryParams = {
        'modified': opts['modified'],
        'course': opts['course'],
        'blocked': opts['blocked'],
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
      var returnType = [DkCloudDataModelMembersMember];

      return this.apiClient.callApi(
        '/api/v1/Member/{page}/{size}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetByNumber operation.
     * @callback module:api/MemberApi~memberGetByNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DkCloudDataModelMembersMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetByNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DkCloudDataModelMembersMember}
     */
    this.memberGetByNumber = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetByNumber");
      }


      var pathParams = {
        'number': _number
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
      var returnType = DkCloudDataModelMembersMember;

      return this.apiClient.callApi(
        '/api/v1/Member/{number}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetCareer operation.
     * @callback module:api/MemberApi~memberGetCareerCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersCareer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Career
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetCareerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersCareer>}
     */
    this.memberGetCareer = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetCareer");
      }


      var pathParams = {
        'number': _number
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
      var returnType = [DkCloudDataModelMembersCareer];

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/Career', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetEducation operation.
     * @callback module:api/MemberApi~memberGetEducationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersEducation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Education
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetEducationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersEducation>}
     */
    this.memberGetEducation = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetEducation");
      }


      var pathParams = {
        'number': _number
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
      var returnType = [DkCloudDataModelMembersEducation];

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/education', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetFund operation.
     * @callback module:api/MemberApi~memberGetFundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DkCloudDataModelMembersMemberFund} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Funds
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetFundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DkCloudDataModelMembersMemberFund}
     */
    this.memberGetFund = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetFund");
      }


      var pathParams = {
        'number': _number
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
      var returnType = DkCloudDataModelMembersMemberFund;

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/fund', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetMembershipData operation.
     * @callback module:api/MemberApi~memberGetMembershipDataCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersMemberShipCompany>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Membership Company assigned to Member
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetMembershipDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersMemberShipCompany>}
     */
    this.memberGetMembershipData = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetMembershipData");
      }


      var pathParams = {
        'number': _number
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
      var returnType = [DkCloudDataModelMembersMemberShipCompany];

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/membership', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetResume operation.
     * @callback module:api/MemberApi~memberGetResumeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersResume>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Resume
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetResumeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersResume>}
     */
    this.memberGetResume = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetResume");
      }


      var pathParams = {
        'number': _number
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
      var returnType = [DkCloudDataModelMembersResume];

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/Resume', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberGetSubGroup operation.
     * @callback module:api/MemberApi~memberGetSubGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DkCloudDataModelMembersMemberSubGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Sub Groups
     * @param {String} _number Member Number
     * @param {module:api/MemberApi~memberGetSubGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DkCloudDataModelMembersMemberSubGroup>}
     */
    this.memberGetSubGroup = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberGetSubGroup");
      }


      var pathParams = {
        'number': _number
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
      var returnType = [DkCloudDataModelMembersMemberSubGroup];

      return this.apiClient.callApi(
        '/api/v1/Member/{number}/subgroup', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberUpdateMember operation.
     * @callback module:api/MemberApi~memberUpdateMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DkCloudDataModelMembersMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Member
     * @param {String} _number Member Number
     * @param {module:model/DkCloudDataModelMembersMember} obj Member Model
     * @param {module:api/MemberApi~memberUpdateMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DkCloudDataModelMembersMember}
     */
    this.memberUpdateMember = function(_number, obj, callback) {
      var postBody = obj;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling memberUpdateMember");
      }

      // verify the required parameter 'obj' is set
      if (obj === undefined || obj === null) {
        throw new Error("Missing the required parameter 'obj' when calling memberUpdateMember");
      }


      var pathParams = {
        'number': _number
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
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DkCloudDataModelMembersMember;

      return this.apiClient.callApi(
        '/api/v1/member/{number}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));