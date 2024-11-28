# DkPlusApi.DimensionApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dimensionGetDimmentions**](DimensionApi.md#dimensionGetDimmentions) | **GET** /api/v1/general/dimension/{page}/{size} | Get dimensions 1
[**dimensionGetDimmentions2**](DimensionApi.md#dimensionGetDimmentions2) | **GET** /api/v1/general/dimension2/{page}/{size} | Get dimensions 2
[**dimensionGetDimmentions3**](DimensionApi.md#dimensionGetDimmentions3) | **GET** /api/v1/general/dimension3/{page}/{size} | Get dimensions 3


<a name="dimensionGetDimmentions"></a>
# **dimensionGetDimmentions**
> [DkCloudDataModelGeneralDim1Model] dimensionGetDimmentions(page, size, opts)

Get dimensions 1

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.DimensionApi();

var page = 56; // Number | Page Number

var size = 56; // Number | Objects per page

var opts = { 
  'modifedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'include': "include_example" // String | Fields to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dimensionGetDimmentions(page, size, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **size** | **Number**| Objects per page | 
 **modifedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **include** | **String**| Fields to return | [optional] 

### Return type

[**[DkCloudDataModelGeneralDim1Model]**](DkCloudDataModelGeneralDim1Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="dimensionGetDimmentions2"></a>
# **dimensionGetDimmentions2**
> [DkCloudDataModelGeneralDim2Model] dimensionGetDimmentions2(page, size, opts)

Get dimensions 2

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.DimensionApi();

var page = 56; // Number | Page Number

var size = 56; // Number | Objects per page

var opts = { 
  'modifedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'include': "include_example" // String | Fields to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dimensionGetDimmentions2(page, size, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **size** | **Number**| Objects per page | 
 **modifedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **include** | **String**| Fields to return | [optional] 

### Return type

[**[DkCloudDataModelGeneralDim2Model]**](DkCloudDataModelGeneralDim2Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="dimensionGetDimmentions3"></a>
# **dimensionGetDimmentions3**
> [DkCloudDataModelGeneralDim3Model] dimensionGetDimmentions3(page, size, opts)

Get dimensions 3

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.DimensionApi();

var page = 56; // Number | Page Number

var size = 56; // Number | Objects per page

var opts = { 
  'modifedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'include': "include_example" // String | Fields to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dimensionGetDimmentions3(page, size, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **size** | **Number**| Objects per page | 
 **modifedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **include** | **String**| Fields to return | [optional] 

### Return type

[**[DkCloudDataModelGeneralDim3Model]**](DkCloudDataModelGeneralDim3Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

