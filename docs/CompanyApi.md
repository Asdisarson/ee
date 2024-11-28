# DkPlusApi.CompanyApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyGet**](CompanyApi.md#companyGet) | **GET** /api/v1/company | Get company related information and settings
[**companyGetTestConnection**](CompanyApi.md#companyGetTestConnection) | **GET** /api/v1/company/connection | Test connection to dk Data


<a name="companyGet"></a>
# **companyGet**
> DkCloudDataModelSettingsSettingsModel companyGet()

Get company related information and settings

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CompanyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DkCloudDataModelSettingsSettingsModel**](DkCloudDataModelSettingsSettingsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="companyGetTestConnection"></a>
# **companyGetTestConnection**
> 'Boolean' companyGetTestConnection()

Test connection to dk Data

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CompanyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyGetTestConnection(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

