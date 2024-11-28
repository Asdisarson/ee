# DkPlusApi.NationApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nationGet**](NationApi.md#nationGet) | **GET** /api/v1/nation/entry/{id} | Get Entry based on Social Security Number


<a name="nationGet"></a>
# **nationGet**
> DkCloudDataModelNationEntry nationGet(id)

Get Entry based on Social Security Number

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.NationApi();

var id = "id_example"; // String | SSNumber


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nationGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| SSNumber | 

### Return type

[**DkCloudDataModelNationEntry**](DkCloudDataModelNationEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

