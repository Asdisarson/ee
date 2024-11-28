# DkPlusApi.SimpleInvoiceApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simpleInvoiceCrateSimpleInvoice**](SimpleInvoiceApi.md#simpleInvoiceCrateSimpleInvoice) | **POST** /api/v1/sales/simple/invoice | 
[**simpleInvoiceGetSimpleInvoice**](SimpleInvoiceApi.md#simpleInvoiceGetSimpleInvoice) | **GET** /api/v1/sales/simple/invoice | 


<a name="simpleInvoiceCrateSimpleInvoice"></a>
# **simpleInvoiceCrateSimpleInvoice**
> simpleInvoiceCrateSimpleInvoice(value)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SimpleInvoiceApi();

var value = new DkPlusApi.DkCloudDataModelSalesSimpleInvoiceModel(); // DkCloudDataModelSalesSimpleInvoiceModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.simpleInvoiceCrateSimpleInvoice(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelSalesSimpleInvoiceModel**](DkCloudDataModelSalesSimpleInvoiceModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="simpleInvoiceGetSimpleInvoice"></a>
# **simpleInvoiceGetSimpleInvoice**
> Object simpleInvoiceGetSimpleInvoice()



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SimpleInvoiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.simpleInvoiceGetSimpleInvoice(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

