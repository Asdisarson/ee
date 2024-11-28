# DkPlusApi.PaymentApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentModeGetPaymentMode**](PaymentApi.md#paymentModeGetPaymentMode) | **GET** /api/v1/general/payment/mode/{number} | Get a payment mode
[**paymentModeGetPaymentModes**](PaymentApi.md#paymentModeGetPaymentModes) | **GET** /api/v1/general/payment/mode | Get all payment modes
[**paymentTermGet**](PaymentApi.md#paymentTermGet) | **GET** /api/v1/general/payment/term | Get all payment terms
[**paymentTermGetInstance**](PaymentApi.md#paymentTermGetInstance) | **GET** /api/v1/general/payment/term/{number} | Get a payment term
[**paymentTypeGet**](PaymentApi.md#paymentTypeGet) | **GET** /api/v1/sales/payment/type | Get Payment Types
[**paymentTypeGetInstance**](PaymentApi.md#paymentTypeGetInstance) | **GET** /api/v1/sales/payment/type/{id} | Get Payment Type


<a name="paymentModeGetPaymentMode"></a>
# **paymentModeGetPaymentMode**
> DkCloudDataModelCustomersPaymentModeModel paymentModeGetPaymentMode(_number)

Get a payment mode

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var _number = "_number_example"; // String | Payment Mode Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentModeGetPaymentMode(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Payment Mode Number | 

### Return type

[**DkCloudDataModelCustomersPaymentModeModel**](DkCloudDataModelCustomersPaymentModeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="paymentModeGetPaymentModes"></a>
# **paymentModeGetPaymentModes**
> [DkCloudDataModelCustomersPaymentModeModel] paymentModeGetPaymentModes()

Get all payment modes

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentModeGetPaymentModes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelCustomersPaymentModeModel]**](DkCloudDataModelCustomersPaymentModeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="paymentTermGet"></a>
# **paymentTermGet**
> [DkCloudDataModelCustomersPaymentTermModel] paymentTermGet()

Get all payment terms

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentTermGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelCustomersPaymentTermModel]**](DkCloudDataModelCustomersPaymentTermModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="paymentTermGetInstance"></a>
# **paymentTermGetInstance**
> DkCloudDataModelCustomersPaymentTermModel paymentTermGetInstance(_number)

Get a payment term

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var _number = "_number_example"; // String | Payment Term Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentTermGetInstance(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Payment Term Number | 

### Return type

[**DkCloudDataModelCustomersPaymentTermModel**](DkCloudDataModelCustomersPaymentTermModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="paymentTypeGet"></a>
# **paymentTypeGet**
> [DkCloudDataModelSalesSalesPaymentMode] paymentTypeGet()

Get Payment Types

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentTypeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelSalesSalesPaymentMode]**](DkCloudDataModelSalesSalesPaymentMode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="paymentTypeGetInstance"></a>
# **paymentTypeGetInstance**
> DkCloudDataModelSalesSalesPaymentMode paymentTypeGetInstance(id)

Get Payment Type

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PaymentApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentTypeGetInstance(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DkCloudDataModelSalesSalesPaymentMode**](DkCloudDataModelSalesSalesPaymentMode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

