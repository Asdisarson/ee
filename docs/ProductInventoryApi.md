# DkPlusApi.ProductInventoryApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productInventoryCreateInventorying**](ProductInventoryApi.md#productInventoryCreateInventorying) | **POST** /api/v1/product/register/Inventorying | Create Product Inventorying
[**productInventoryCreateJournal**](ProductInventoryApi.md#productInventoryCreateJournal) | **POST** /api/v1/product/register/journal | Create Project Journal
[**productInventoryCreateTransfer**](ProductInventoryApi.md#productInventoryCreateTransfer) | **POST** /api/v1/product/register/transfer | Create Product Transfer


<a name="productInventoryCreateInventorying"></a>
# **productInventoryCreateInventorying**
> productInventoryCreateInventorying(value)

Create Product Inventorying

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductInventoryApi();

var value = new DkPlusApi.DkPlusAPIModelsProductInventoryInventorying(); // DkPlusAPIModelsProductInventoryInventorying | Inventorying Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productInventoryCreateInventorying(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsProductInventoryInventorying**](DkPlusAPIModelsProductInventoryInventorying.md)| Inventorying Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productInventoryCreateJournal"></a>
# **productInventoryCreateJournal**
> productInventoryCreateJournal(value)

Create Project Journal

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductInventoryApi();

var value = new DkPlusApi.DkPlusAPIModelsProductInventoryJournal(); // DkPlusAPIModelsProductInventoryJournal | Journal Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productInventoryCreateJournal(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsProductInventoryJournal**](DkPlusAPIModelsProductInventoryJournal.md)| Journal Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productInventoryCreateTransfer"></a>
# **productInventoryCreateTransfer**
> productInventoryCreateTransfer(value, opts)

Create Product Transfer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductInventoryApi();

var value = [new DkPlusApi.DkPlusAPIModelsProductInventoryTransfer()]; // [DkPlusAPIModelsProductInventoryTransfer] | Transfer Model

var opts = { 
  'append': true, // Boolean | Append to an exists journal
  'post': true, // Boolean | Process the journal
  'description': "description_example" // String | Description for new journal
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productInventoryCreateTransfer(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**[DkPlusAPIModelsProductInventoryTransfer]**](DkPlusAPIModelsProductInventoryTransfer.md)| Transfer Model | 
 **append** | **Boolean**| Append to an exists journal | [optional] 
 **post** | **Boolean**| Process the journal | [optional] 
 **description** | **String**| Description for new journal | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

