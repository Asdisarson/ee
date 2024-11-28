# DkPlusApi.VendorInvoiceApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vendorInvoiceApprovalGetBooked**](VendorInvoiceApi.md#vendorInvoiceApprovalGetBooked) | **GET** /api/v1/vendor/invoice/my/approved | 
[**vendorInvoiceApprovalGetMyUnApproved**](VendorInvoiceApi.md#vendorInvoiceApprovalGetMyUnApproved) | **GET** /api/v1/vendor/invoice/my/unapproved | 
[**vendorInvoiceApprovalUpdateApproval**](VendorInvoiceApi.md#vendorInvoiceApprovalUpdateApproval) | **PUT** /api/v1/vendor/invoice/my/approval/{id} | 
[**vendorInvoiceCreatedVendorInvoice**](VendorInvoiceApi.md#vendorInvoiceCreatedVendorInvoice) | **POST** /api/v1/Vendor/{number}/Invoice | Create a Vendor Invoice
[**vendorInvoiceGetProcessedInvoices**](VendorInvoiceApi.md#vendorInvoiceGetProcessedInvoices) | **GET** /api/v1/vendor/invoice/processed/page/{page}/{count} | Get Booked Invoices
[**vendorInvoiceGetVendorInvoice**](VendorInvoiceApi.md#vendorInvoiceGetVendorInvoice) | **GET** /api/v1/vendor/invoice/processed/page/{id} | Get vendor invoice
[**vendorInvoiceGetVendorInvoiceAttachment**](VendorInvoiceApi.md#vendorInvoiceGetVendorInvoiceAttachment) | **GET** /api/v1/Vendor/Invoice/{id}/attachment | Get Vendor Invoice Attachments
[**vendorInvoiceUnProcessedGetAttachment**](VendorInvoiceApi.md#vendorInvoiceUnProcessedGetAttachment) | **GET** /api/v1/Vendor/Invoice/unprocessed/{id}/attachment | 
[**vendorInvoiceUnProcessedGetUnProcessedInvoices**](VendorInvoiceApi.md#vendorInvoiceUnProcessedGetUnProcessedInvoices) | **GET** /api/v1/vendor/invoice/unprocessed | Get un-booked Vendor Invoices
[**vendorInvoiceUnProcessedGetUnProcessedInvoicesById**](VendorInvoiceApi.md#vendorInvoiceUnProcessedGetUnProcessedInvoicesById) | **GET** /api/v1/vendor/invoice/unprocessed/{id} | Get a Vendor Invoice


<a name="vendorInvoiceApprovalGetBooked"></a>
# **vendorInvoiceApprovalGetBooked**
> [DkCloudDataModelVendorsInvoiceModel] vendorInvoiceApprovalGetBooked()



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceApprovalGetBooked(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelVendorsInvoiceModel]**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceApprovalGetMyUnApproved"></a>
# **vendorInvoiceApprovalGetMyUnApproved**
> [DkCloudDataModelVendorsInvoiceModel] vendorInvoiceApprovalGetMyUnApproved()



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceApprovalGetMyUnApproved(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelVendorsInvoiceModel]**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceApprovalUpdateApproval"></a>
# **vendorInvoiceApprovalUpdateApproval**
> vendorInvoiceApprovalUpdateApproval(id, value)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var id = 56; // Number | 

var value = new DkPlusApi.DkPlusAPIModelsVendorInvoiceApprovalRequestModel(); // DkPlusAPIModelsVendorInvoiceApprovalRequestModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vendorInvoiceApprovalUpdateApproval(id, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **value** | [**DkPlusAPIModelsVendorInvoiceApprovalRequestModel**](DkPlusAPIModelsVendorInvoiceApprovalRequestModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceCreatedVendorInvoice"></a>
# **vendorInvoiceCreatedVendorInvoice**
> DkCloudDataModelVendorsInvoiceModel vendorInvoiceCreatedVendorInvoice(_number, value)

Create a Vendor Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var _number = "_number_example"; // String | Vendor Number

var value = new DkPlusApi.DkPlusAPIModelsVendorInvoiceInvoice(); // DkPlusAPIModelsVendorInvoiceInvoice | Invoice Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceCreatedVendorInvoice(_number, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Vendor Number | 
 **value** | [**DkPlusAPIModelsVendorInvoiceInvoice**](DkPlusAPIModelsVendorInvoiceInvoice.md)| Invoice Model | 

### Return type

[**DkCloudDataModelVendorsInvoiceModel**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceGetProcessedInvoices"></a>
# **vendorInvoiceGetProcessedInvoices**
> [DkCloudDataModelVendorsInvoiceModel] vendorInvoiceGetProcessedInvoices(page, count)

Get Booked Invoices

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var page = 56; // Number | Page Number

var count = 56; // Number | number on page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceGetProcessedInvoices(page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| number on page | 

### Return type

[**[DkCloudDataModelVendorsInvoiceModel]**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceGetVendorInvoice"></a>
# **vendorInvoiceGetVendorInvoice**
> DkCloudDataModelVendorsInvoiceModel vendorInvoiceGetVendorInvoice(id)

Get vendor invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceGetVendorInvoice(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DkCloudDataModelVendorsInvoiceModel**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceGetVendorInvoiceAttachment"></a>
# **vendorInvoiceGetVendorInvoiceAttachment**
> Object vendorInvoiceGetVendorInvoiceAttachment(id)

Get Vendor Invoice Attachments

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceGetVendorInvoiceAttachment(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceUnProcessedGetAttachment"></a>
# **vendorInvoiceUnProcessedGetAttachment**
> Object vendorInvoiceUnProcessedGetAttachment(id)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceUnProcessedGetAttachment(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceUnProcessedGetUnProcessedInvoices"></a>
# **vendorInvoiceUnProcessedGetUnProcessedInvoices**
> [DkCloudDataModelVendorsInvoiceModel] vendorInvoiceUnProcessedGetUnProcessedInvoices()

Get un-booked Vendor Invoices

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceUnProcessedGetUnProcessedInvoices(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelVendorsInvoiceModel]**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="vendorInvoiceUnProcessedGetUnProcessedInvoicesById"></a>
# **vendorInvoiceUnProcessedGetUnProcessedInvoicesById**
> DkCloudDataModelVendorsInvoiceModel vendorInvoiceUnProcessedGetUnProcessedInvoicesById(id)

Get a Vendor Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.VendorInvoiceApi();

var id = 56; // Number | Invoice number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vendorInvoiceUnProcessedGetUnProcessedInvoicesById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Invoice number | 

### Return type

[**DkCloudDataModelVendorsInvoiceModel**](DkCloudDataModelVendorsInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

