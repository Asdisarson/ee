# DkPlusApi.TokenApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenCreateToken**](TokenApi.md#tokenCreateToken) | **POST** /api/v1/Token | Create Token
[**tokenDelete**](TokenApi.md#tokenDelete) | **DELETE** /api/v1/Token/{id} | Delete Token
[**tokenGetMyCompaniesByToken**](TokenApi.md#tokenGetMyCompaniesByToken) | **GET** /api/v1/Token/companies | Get Companies that user has access to
[**tokenGetMyTokens**](TokenApi.md#tokenGetMyTokens) | **GET** /api/v1/Token | Get Tokens
[**tokenGetPDF**](TokenApi.md#tokenGetPDF) | **GET** /api/v1/token/report/usage/pdf | Get Token Report
[**tokenGetTokenByID**](TokenApi.md#tokenGetTokenByID) | **GET** /api/v1/Token/{id} | Get Token
[**tokenGetTokenLogs**](TokenApi.md#tokenGetTokenLogs) | **GET** /api/v1/token/report/logs | Get Request logs for the authorized token
[**tokenGetUserInfo**](TokenApi.md#tokenGetUserInfo) | **GET** /api/v1/Token/{userID}/{companyID} | Get Token Employee
[**tokenSendEmail**](TokenApi.md#tokenSendEmail) | **POST** /api/v1/token/report/usage/email | Send Token Report to Email
[**tokenUpdateToken**](TokenApi.md#tokenUpdateToken) | **PUT** /api/v1/Token/{id} | Update Token


<a name="tokenCreateToken"></a>
# **tokenCreateToken**
> DkCloudDataModelUserTokenModel tokenCreateToken(value)

Create Token

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var value = new DkPlusApi.DkPlusAPIModelsCreateTokenCredentialModel(); // DkPlusAPIModelsCreateTokenCredentialModel | Create Token Credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenCreateToken(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsCreateTokenCredentialModel**](DkPlusAPIModelsCreateTokenCredentialModel.md)| Create Token Credentials | 

### Return type

[**DkCloudDataModelUserTokenModel**](DkCloudDataModelUserTokenModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenDelete"></a>
# **tokenDelete**
> tokenDelete(id)

Delete Token

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var id = "id_example"; // String | Token Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tokenDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Token Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetMyCompaniesByToken"></a>
# **tokenGetMyCompaniesByToken**
> DkPlusAPIModelsCompanyAccessModel tokenGetMyCompaniesByToken()

Get Companies that user has access to

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetMyCompaniesByToken(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DkPlusAPIModelsCompanyAccessModel**](DkPlusAPIModelsCompanyAccessModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetMyTokens"></a>
# **tokenGetMyTokens**
> DkCloudDataModelUserTokenModel tokenGetMyTokens()

Get Tokens

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetMyTokens(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DkCloudDataModelUserTokenModel**](DkCloudDataModelUserTokenModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetPDF"></a>
# **tokenGetPDF**
> Object tokenGetPDF(opts)

Get Token Report

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetPDF(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetTokenByID"></a>
# **tokenGetTokenByID**
> DkCloudDataModelUserTokenModel tokenGetTokenByID(id)

Get Token

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var id = "id_example"; // String | Token Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetTokenByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Token Id | 

### Return type

[**DkCloudDataModelUserTokenModel**](DkCloudDataModelUserTokenModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetTokenLogs"></a>
# **tokenGetTokenLogs**
> [DkCloudDataModelUserTokenRequestLogging] tokenGetTokenLogs(opts)

Get Request logs for the authorized token

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'statuscode': 56, // Number | 
  'method': "method_example", // String | 
  'ip': "ip_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetTokenLogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **statuscode** | **Number**|  | [optional] 
 **method** | **String**|  | [optional] 
 **ip** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelUserTokenRequestLogging]**](DkCloudDataModelUserTokenRequestLogging.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenGetUserInfo"></a>
# **tokenGetUserInfo**
> 'String' tokenGetUserInfo(userID, companyID)

Get Token Employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var userID = "userID_example"; // String | User Id

var companyID = "companyID_example"; // String | Company Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGetUserInfo(userID, companyID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| User Id | 
 **companyID** | **String**| Company Id | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenSendEmail"></a>
# **tokenSendEmail**
> Object tokenSendEmail(message, opts)

Send Token Report to Email

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var message = new DkPlusApi.DkPlusMailModelMailInfo(); // DkPlusMailModelMailInfo | 

var opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenSendEmail(message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**DkPlusMailModelMailInfo**](DkPlusMailModelMailInfo.md)|  | 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tokenUpdateToken"></a>
# **tokenUpdateToken**
> DkCloudDataModelUserTokenModel tokenUpdateToken(id, info)

Update Token

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TokenApi();

var id = "id_example"; // String | Token Id

var info = new DkPlusApi.DkPlusAPIModelsCreateTokenCredentialModel(); // DkPlusAPIModelsCreateTokenCredentialModel | Info Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenUpdateToken(id, info, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Token Id | 
 **info** | [**DkPlusAPIModelsCreateTokenCredentialModel**](DkPlusAPIModelsCreateTokenCredentialModel.md)| Info Model | 

### Return type

[**DkCloudDataModelUserTokenModel**](DkCloudDataModelUserTokenModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

