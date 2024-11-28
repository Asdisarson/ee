# DkPlusApi.SearchApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchGetSearchExtendedResult**](SearchApi.md#searchGetSearchExtendedResult) | **GET** /api/v1/search | Search Module for result
[**searchGetSearchResult**](SearchApi.md#searchGetSearchResult) | **GET** /api/v1/search/{value} | Deprecated search function  Use /api/v1/search?value={value}


<a name="searchGetSearchExtendedResult"></a>
# **searchGetSearchExtendedResult**
> [DkPlusAPIModelsSearchResultModel] searchGetSearchExtendedResult(value, opts)

Search Module for result

### Search Filer Operators  * **+** signifies AND operation  * **|** signifies OR operation  * **-** negates a single token  * **\"** wraps a number of tokens to signify a phrase for searching  * ***** at the end of a term signifies a prefix query  * **( and )** signify precedence  * **~N** after a word signifies edit distance (fuzziness)  * **~N** after a phrase signifies slop amount

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SearchApi();

var value = "value_example"; // String | 

var opts = { 
  'customer': true, // Boolean | Search Customers
  'product': true, // Boolean | Search products
  'vendor': true, // Boolean | Search Vendors
  'defaultOp': "defaultOp_example", // String | Default Serach operator
  'max': 56 // Number | Maximum result per module
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchGetSearchExtendedResult(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**|  | 
 **customer** | **Boolean**| Search Customers | [optional] 
 **product** | **Boolean**| Search products | [optional] 
 **vendor** | **Boolean**| Search Vendors | [optional] 
 **defaultOp** | **String**| Default Serach operator | [optional] 
 **max** | **Number**| Maximum result per module | [optional] 

### Return type

[**[DkPlusAPIModelsSearchResultModel]**](DkPlusAPIModelsSearchResultModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="searchGetSearchResult"></a>
# **searchGetSearchResult**
> [DkPlusAPIModelsSearchResultModel] searchGetSearchResult(value)

Deprecated search function  Use /api/v1/search?value={value}

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SearchApi();

var value = "value_example"; // String | Seach string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchGetSearchResult(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Seach string | 

### Return type

[**[DkPlusAPIModelsSearchResultModel]**](DkPlusAPIModelsSearchResultModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

