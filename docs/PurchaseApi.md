# DkPlusApi.PurchaseApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchaseDelete**](PurchaseApi.md#purchaseDelete) | **DELETE** /api/v1/purchase/{id} | Delete Purchase Order
[**purchaseDeleteLine**](PurchaseApi.md#purchaseDeleteLine) | **DELETE** /api/v1/purchase/{id}/line/{seq} | Delete Purchase Order Line
[**purchaseGet**](PurchaseApi.md#purchaseGet) | **GET** /api/v1/purchase | Get Purchase Orders
[**purchaseGetById**](PurchaseApi.md#purchaseGetById) | **GET** /api/v1/purchase/id/{id} | Get Purchase Order
[**purchaseGetByNumber**](PurchaseApi.md#purchaseGetByNumber) | **GET** /api/v1/purchase/number/{number} | Get Purchase Order By Number
[**purchaseGetByReference**](PurchaseApi.md#purchaseGetByReference) | **GET** /api/v1/purchase/reference/{number} | Get Purchase Order By Reference
[**purchasePatch**](PurchaseApi.md#purchasePatch) | **PATCH** /api/v1/purchase/{id} | Update Purchase Order
[**purchasePatchLine**](PurchaseApi.md#purchasePatchLine) | **PATCH** /api/v1/purchase/{id}/line/{seq} | Update Purchase Order Line
[**purchasePost**](PurchaseApi.md#purchasePost) | **POST** /api/v1/purchase | Create Purchase Order


<a name="purchaseDelete"></a>
# **purchaseDelete**
> purchaseDelete(id)

Delete Purchase Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var id = 56; // Number | Order Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.purchaseDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchaseDeleteLine"></a>
# **purchaseDeleteLine**
> purchaseDeleteLine(id, seq)

Delete Purchase Order Line

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var id = 56; // Number | Order Id

var seq = 56; // Number | Line Sequence Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.purchaseDeleteLine(id, seq, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 
 **seq** | **Number**| Line Sequence Number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchaseGet"></a>
# **purchaseGet**
> [DkCloudDataModelPurchaseHeadModel] purchaseGet(opts)

Get Purchase Orders

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var opts = { 
  'modified': new Date("2013-10-20T19:20:30+01:00") // Date | Modified
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.purchaseGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified** | **Date**| Modified | [optional] 

### Return type

[**[DkCloudDataModelPurchaseHeadModel]**](DkCloudDataModelPurchaseHeadModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchaseGetById"></a>
# **purchaseGetById**
> DkCloudDataModelPurchaseHeadModel purchaseGetById(id)

Get Purchase Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var id = 56; // Number | Order Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.purchaseGetById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 

### Return type

[**DkCloudDataModelPurchaseHeadModel**](DkCloudDataModelPurchaseHeadModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchaseGetByNumber"></a>
# **purchaseGetByNumber**
> DkCloudDataModelPurchaseHeadModel purchaseGetByNumber(_number)

Get Purchase Order By Number

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var _number = "_number_example"; // String | Purchase Order Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.purchaseGetByNumber(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Purchase Order Number | 

### Return type

[**DkCloudDataModelPurchaseHeadModel**](DkCloudDataModelPurchaseHeadModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchaseGetByReference"></a>
# **purchaseGetByReference**
> DkCloudDataModelPurchaseHeadModel purchaseGetByReference(_number)

Get Purchase Order By Reference

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var _number = "_number_example"; // String | Reference Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.purchaseGetByReference(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Reference Number | 

### Return type

[**DkCloudDataModelPurchaseHeadModel**](DkCloudDataModelPurchaseHeadModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchasePatch"></a>
# **purchasePatch**
> purchasePatch(id, order)

Update Purchase Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var id = 56; // Number | Order Id

var order = new DkPlusApi.DkPlusAPIModelsPurchaseHead(); // DkPlusAPIModelsPurchaseHead | Order Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.purchasePatch(id, order, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 
 **order** | [**DkPlusAPIModelsPurchaseHead**](DkPlusAPIModelsPurchaseHead.md)| Order Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchasePatchLine"></a>
# **purchasePatchLine**
> purchasePatchLine(id, seq, line)

Update Purchase Order Line

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var id = 56; // Number | Order Id

var seq = 56; // Number | Line Sequence Number

var line = new DkPlusApi.DkCloudDataModelPurchaseLineModel(); // DkCloudDataModelPurchaseLineModel | Line Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.purchasePatchLine(id, seq, line, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 
 **seq** | **Number**| Line Sequence Number | 
 **line** | [**DkCloudDataModelPurchaseLineModel**](DkCloudDataModelPurchaseLineModel.md)| Line Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="purchasePost"></a>
# **purchasePost**
> purchasePost(orders)

Create Purchase Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PurchaseApi();

var orders = [new DkPlusApi.DkPlusAPIModelsPurchaseHead()]; // [DkPlusAPIModelsPurchaseHead] | Order Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.purchasePost(orders, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orders** | [**[DkPlusAPIModelsPurchaseHead]**](DkPlusAPIModelsPurchaseHead.md)| Order Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

