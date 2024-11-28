# DkPlusApi.SalesOrderApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesOrderCreateOrder**](SalesOrderApi.md#salesOrderCreateOrder) | **POST** /api/v1/sales/order | Create Sales Order
[**salesOrderDelete**](SalesOrderApi.md#salesOrderDelete) | **DELETE** /api/v1/sales/order/{id} | Delete Sales Order
[**salesOrderGetByReference**](SalesOrderApi.md#salesOrderGetByReference) | **GET** /api/v1/sales/order/reference/{reference} | Get Sales Order by Reference
[**salesOrderGetHtml**](SalesOrderApi.md#salesOrderGetHtml) | **GET** /api/v1/sales/order/{number}/html | Get Sales Order as HTML
[**salesOrderGetOrder**](SalesOrderApi.md#salesOrderGetOrder) | **GET** /api/v1/sales/order/{id} | Get Sales Order
[**salesOrderGetOrderFromFilter**](SalesOrderApi.md#salesOrderGetOrderFromFilter) | **GET** /api/v1/sales/order | Get Orders by Filter
[**salesOrderGetPDF**](SalesOrderApi.md#salesOrderGetPDF) | **GET** /api/v1/sales/order/{number}/pdf | Get Sales Order as PDF
[**salesOrderSendEmail**](SalesOrderApi.md#salesOrderSendEmail) | **POST** /api/v1/sales/order/{number}/email | Send Sales Order to Email
[**salesOrderUpdateOrder**](SalesOrderApi.md#salesOrderUpdateOrder) | **PUT** /api/v1/sales/order/{id} | Update Sales Order


<a name="salesOrderCreateOrder"></a>
# **salesOrderCreateOrder**
> DkPlusAPIModelsStatusValueModel salesOrderCreateOrder(value)

Create Sales Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var value = new DkPlusApi.DkPlusAPIModelsOrderHead(); // DkPlusAPIModelsOrderHead | Order Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderCreateOrder(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsOrderHead**](DkPlusAPIModelsOrderHead.md)| Order Model | 

### Return type

[**DkPlusAPIModelsStatusValueModel**](DkPlusAPIModelsStatusValueModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderDelete"></a>
# **salesOrderDelete**
> salesOrderDelete(id)

Delete Sales Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var id = 56; // Number | Order Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.salesOrderDelete(id, callback);
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

<a name="salesOrderGetByReference"></a>
# **salesOrderGetByReference**
> [DkCloudDataModelSalesSalesOrderModel] salesOrderGetByReference(reference)

Get Sales Order by Reference

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var reference = "reference_example"; // String | Order Reference


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderGetByReference(reference, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **String**| Order Reference | 

### Return type

[**[DkCloudDataModelSalesSalesOrderModel]**](DkCloudDataModelSalesSalesOrderModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderGetHtml"></a>
# **salesOrderGetHtml**
> Object salesOrderGetHtml(_number, opts)

Get Sales Order as HTML

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var _number = 56; // Number | Order Number

var opts = { 
  'custom': "custom_example" // String | Customer Report Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderGetHtml(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**| Order Number | 
 **custom** | **String**| Customer Report Name | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderGetOrder"></a>
# **salesOrderGetOrder**
> DkCloudDataModelSalesSalesOrderModel salesOrderGetOrder(id)

Get Sales Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var id = 56; // Number | Order Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderGetOrder(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 

### Return type

[**DkCloudDataModelSalesSalesOrderModel**](DkCloudDataModelSalesSalesOrderModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderGetOrderFromFilter"></a>
# **salesOrderGetOrderFromFilter**
> [DkCloudDataModelSalesSalesOrderModel] salesOrderGetOrderFromFilter(modified, opts)

Get Orders by Filter

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var modified = new Date("2013-10-20T19:20:30+01:00"); // Date | Modified After

var opts = { 
  'status': "status_example", // String | Order Status
  'deliveryStatus': "deliveryStatus_example" // String | Order Delivery status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderGetOrderFromFilter(modified, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified** | **Date**| Modified After | 
 **status** | **String**| Order Status | [optional] 
 **deliveryStatus** | **String**| Order Delivery status | [optional] 

### Return type

[**[DkCloudDataModelSalesSalesOrderModel]**](DkCloudDataModelSalesSalesOrderModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderGetPDF"></a>
# **salesOrderGetPDF**
> Object salesOrderGetPDF(_number, opts)

Get Sales Order as PDF

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var _number = 56; // Number | Order Number

var opts = { 
  'custom': "custom_example" // String | Customer Report Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderGetPDF(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**| Order Number | 
 **custom** | **String**| Customer Report Name | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderSendEmail"></a>
# **salesOrderSendEmail**
> salesOrderSendEmail(_number, message, opts)

Send Sales Order to Email

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var _number = 56; // Number | Order Number

var message = new DkPlusApi.DkPlusMailModelMailInfo(); // DkPlusMailModelMailInfo | Message Model

var opts = { 
  'custom': "custom_example" // String | Customer Report Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.salesOrderSendEmail(_number, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**| Order Number | 
 **message** | [**DkPlusMailModelMailInfo**](DkPlusMailModelMailInfo.md)| Message Model | 
 **custom** | **String**| Customer Report Name | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesOrderUpdateOrder"></a>
# **salesOrderUpdateOrder**
> VLinkDkSoftwareDkSOAPTOrder salesOrderUpdateOrder(id, value)

Update Sales Order

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesOrderApi();

var id = 56; // Number | Order Id

var value = new DkPlusApi.DkCloudDataModelSalesSalesOrderModel(); // DkCloudDataModelSalesSalesOrderModel | Order Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderUpdateOrder(id, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order Id | 
 **value** | [**DkCloudDataModelSalesSalesOrderModel**](DkCloudDataModelSalesSalesOrderModel.md)| Order Model | 

### Return type

[**VLinkDkSoftwareDkSOAPTOrder**](VLinkDkSoftwareDkSOAPTOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

