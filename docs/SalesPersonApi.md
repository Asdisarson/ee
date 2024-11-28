# DkPlusApi.SalesPersonApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesPersonCreateSalesPerson**](SalesPersonApi.md#salesPersonCreateSalesPerson) | **POST** /api/v1/sales/person | Create Sales Person
[**salesPersonGetSalesPerson**](SalesPersonApi.md#salesPersonGetSalesPerson) | **GET** /api/v1/sales/person/{number} | Get Sales Person
[**salesPersonGetSalesPersons**](SalesPersonApi.md#salesPersonGetSalesPersons) | **GET** /api/v1/sales/person/{page}/{count} | Get Sales Persons Paged
[**salesPersonGetSalesPersonsPage**](SalesPersonApi.md#salesPersonGetSalesPersonsPage) | **GET** /api/v1/sales/person/page/{page}/{count} | Get Sales Persons Paged
[**salesPersonRemoveSalesPerson**](SalesPersonApi.md#salesPersonRemoveSalesPerson) | **DELETE** /api/v1/sales/person/{number} | Delete Sales Person
[**salesPersonUpdateSalesPerson**](SalesPersonApi.md#salesPersonUpdateSalesPerson) | **PUT** /api/v1/sales/person/{number} | Update Sales Person


<a name="salesPersonCreateSalesPerson"></a>
# **salesPersonCreateSalesPerson**
> salesPersonCreateSalesPerson(value)

Create Sales Person

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var value = new DkPlusApi.DkCloudDataModelSalesSalesPersonModel(); // DkCloudDataModelSalesSalesPersonModel | Sales Person Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.salesPersonCreateSalesPerson(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelSalesSalesPersonModel**](DkCloudDataModelSalesSalesPersonModel.md)| Sales Person Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesPersonGetSalesPerson"></a>
# **salesPersonGetSalesPerson**
> DkCloudDataModelSalesSalesPersonModel salesPersonGetSalesPerson(_number)

Get Sales Person

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesPersonGetSalesPerson(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 

### Return type

[**DkCloudDataModelSalesSalesPersonModel**](DkCloudDataModelSalesSalesPersonModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesPersonGetSalesPersons"></a>
# **salesPersonGetSalesPersons**
> [DkCloudDataModelSalesSalesPersonModel] salesPersonGetSalesPersons(page, count)

Get Sales Persons Paged

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Sales Persons per Page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesPersonGetSalesPersons(page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Sales Persons per Page | 

### Return type

[**[DkCloudDataModelSalesSalesPersonModel]**](DkCloudDataModelSalesSalesPersonModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesPersonGetSalesPersonsPage"></a>
# **salesPersonGetSalesPersonsPage**
> [DkCloudDataModelSalesSalesPersonModel] salesPersonGetSalesPersonsPage(page, count)

Get Sales Persons Paged

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Sales Persons per Page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesPersonGetSalesPersonsPage(page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Sales Persons per Page | 

### Return type

[**[DkCloudDataModelSalesSalesPersonModel]**](DkCloudDataModelSalesSalesPersonModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesPersonRemoveSalesPerson"></a>
# **salesPersonRemoveSalesPerson**
> salesPersonRemoveSalesPerson(_number)

Delete Sales Person

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var _number = "_number_example"; // String | Sales Person Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.salesPersonRemoveSalesPerson(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Sales Person Number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="salesPersonUpdateSalesPerson"></a>
# **salesPersonUpdateSalesPerson**
> salesPersonUpdateSalesPerson(_number, value)

Update Sales Person

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SalesPersonApi();

var _number = "_number_example"; // String | Sales Person Number

var value = new DkPlusApi.DkCloudDataModelSalesSalesPersonModel(); // DkCloudDataModelSalesSalesPersonModel | Sales Person Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.salesPersonUpdateSalesPerson(_number, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Sales Person Number | 
 **value** | [**DkCloudDataModelSalesSalesPersonModel**](DkCloudDataModelSalesSalesPersonModel.md)| Sales Person Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

