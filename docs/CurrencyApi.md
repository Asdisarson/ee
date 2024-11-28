# DkPlusApi.CurrencyApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencyGet**](CurrencyApi.md#currencyGet) | **GET** /api/v1/general/currency | Get all currencies


<a name="currencyGet"></a>
# **currencyGet**
> [DkCloudDataModelGeneralCurrencyModel] currencyGet()

Get all currencies

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CurrencyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currencyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelGeneralCurrencyModel]**](DkCloudDataModelGeneralCurrencyModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

