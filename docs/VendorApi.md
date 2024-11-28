# DkPlusApi.VendorApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vendorCreateVendor**](VendorApi.md#vendorCreateVendor) | **POST** /api/v1/Vendor | Create Vendor
[**vendorGetVendorByID**](VendorApi.md#vendorGetVendorByID) | **GET** /api/v1/Vendor/{id} | Get Vendor
[**vendorGetVendors**](VendorApi.md#vendorGetVendors) | **GET** /api/v1/Vendor | Get All Vendors
[**vendorGetVendorsPage**](VendorApi.md#vendorGetVendorsPage) | **GET** /api/v1/Vendor/page/{page}/{count} | Get Vendors Pages
[**vendorSearchVendors**](VendorApi.md#vendorSearchVendors) | **GET** /api/v1/Vendor/search/{value}/{max} | Search Vendors
[**vendorTransactionGetVendorTransactions**](VendorApi.md#vendorTransactionGetVendorTransactions) | **GET** /api/v1/vendor/transaction/{page}/{count} | 
[**vendorTransactionGetVendorTransactionsForVendor**](VendorApi.md#vendorTransactionGetVendorTransactionsForVendor) | **GET** /api/v1/vendor/{vendor}/transaction/{page}/{count} | Get Transactions for supplied Vendor
[**vendorUpdateVendor**](VendorApi.md#vendorUpdateVendor) | **PUT** /api/v1/Vendor/{number} | Update Vendor


<a name="vendorCreateVendor"></a>
# **vendorCreateVendor**
> vendorCreateVendor(obj)

Create Vendor

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var obj = new DkPlusApi.DkCloudDataModelVendorsVendorModel(); // DkCloudDataModelVendorsVendorModel | Vendor Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vendorCreateVendor(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**DkCloudDataModelVendorsVendorModel**](DkCloudDataModelVendorsVendorModel.md)| Vendor Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorGetVendorByID"></a>
# **vendorGetVendorByID**
> DkCloudDataModelVendorsVendorModel vendorGetVendorByID(id)

Get Vendor

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var id = "id_example"; // String | Vendor Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorGetVendorByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Vendor Number | 

### Return type

[**DkCloudDataModelVendorsVendorModel**](DkCloudDataModelVendorsVendorModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorGetVendors"></a>
# **vendorGetVendors**
> [DkCloudDataModelVendorsVendorModel] vendorGetVendors(opts)

Get All Vendors

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var opts = { 
  'zipCode': "zipCode_example", // String | 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'group': "group_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorGetVendors(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCode** | **String**|  | [optional] 
 **modifiedAfter** | **Date**|  | [optional] 
 **modifiedBefore** | **Date**|  | [optional] 
 **group** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelVendorsVendorModel]**](DkCloudDataModelVendorsVendorModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorGetVendorsPage"></a>
# **vendorGetVendorsPage**
> [DkCloudDataModelVendorsVendorModel] vendorGetVendorsPage(page, count)

Get Vendors Pages

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Objects on page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorGetVendorsPage(page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects on page | 

### Return type

[**[DkCloudDataModelVendorsVendorModel]**](DkCloudDataModelVendorsVendorModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorSearchVendors"></a>
# **vendorSearchVendors**
> [DkCloudDataModelVendorsVendorModel] vendorSearchVendors(value, max)

Search Vendors

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var value = "value_example"; // String | Value to Search For

var max = 56; // Number | Max to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorSearchVendors(value, max, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Value to Search For | 
 **max** | **Number**| Max to return | 

### Return type

[**[DkCloudDataModelVendorsVendorModel]**](DkCloudDataModelVendorsVendorModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorTransactionGetVendorTransactions"></a>
# **vendorTransactionGetVendorTransactions**
> [DkCloudDataModelVendorsTransaction] vendorTransactionGetVendorTransactions(page, count, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Transactions per Page (default=100)

var opts = { 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Transaction modified after
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'dueAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Due After
  'dim1': "dim1_example", // String | Dimmention
  'voucher': "voucher_example", // String | Voucher
  'reference': "reference_example", // String | Reference
  'recordid': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorTransactionGetVendorTransactions(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Transactions per Page (default=100) | 
 **modifiedAfter** | **Date**| Transaction modified after | [optional] 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **dueAfter** | **Date**| Due After | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **voucher** | **String**| Voucher | [optional] 
 **reference** | **String**| Reference | [optional] 
 **recordid** | **Number**|  | [optional] 

### Return type

[**[DkCloudDataModelVendorsTransaction]**](DkCloudDataModelVendorsTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorTransactionGetVendorTransactionsForVendor"></a>
# **vendorTransactionGetVendorTransactionsForVendor**
> [DkCloudDataModelVendorsTransaction] vendorTransactionGetVendorTransactionsForVendor(vendor, page, count)

Get Transactions for supplied Vendor

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var vendor = "vendor_example"; // String | Vendor Number

var page = 56; // Number | Page Number

var count = 56; // Number | Objects on Page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorTransactionGetVendorTransactionsForVendor(vendor, page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendor** | **String**| Vendor Number | 
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects on Page | 

### Return type

[**[DkCloudDataModelVendorsTransaction]**](DkCloudDataModelVendorsTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorUpdateVendor"></a>
# **vendorUpdateVendor**
> vendorUpdateVendor(_number, obj)

Update Vendor

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorApi();

var _number = "_number_example"; // String | Vendor Number

var obj = new DkPlusApi.DkCloudDataModelVendorsVendorModel(); // DkCloudDataModelVendorsVendorModel | Vendor Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vendorUpdateVendor(_number, obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Vendor Number | 
 **obj** | [**DkCloudDataModelVendorsVendorModel**](DkCloudDataModelVendorsVendorModel.md)| Vendor Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

