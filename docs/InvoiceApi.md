# DkPlusApi.InvoiceApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceCancelPaymentPlan**](InvoiceApi.md#invoiceCancelPaymentPlan) | **PUT** /api/v1/sales/invoice/{invoice}/paymentplan/{number} | Cancel a Payment Plan for Invoice
[**invoiceCreateCreditInvoice**](InvoiceApi.md#invoiceCreateCreditInvoice) | **POST** /api/v1/sales/invoice/{id}/reverse | Create credit invoice based on another invoice
[**invoiceCreateInvoice**](InvoiceApi.md#invoiceCreateInvoice) | **POST** /api/v1/sales/invoice | Create a Sales Invoice
[**invoiceCreatePaymentPlan**](InvoiceApi.md#invoiceCreatePaymentPlan) | **POST** /api/v1/sales/invoice/{number}/paymentplan | Create a payment plan for a invoice
[**invoiceDeleteInvoice**](InvoiceApi.md#invoiceDeleteInvoice) | **DELETE** /api/v1/sales/invoice | Use to delete invoices
[**invoiceGetByDate**](InvoiceApi.md#invoiceGetByDate) | **GET** /api/v1/sales/invoice/date/{invoicedate}/{page}/{count} | Get Invoices by Date
[**invoiceGetDiscounts**](InvoiceApi.md#invoiceGetDiscounts) | **PATCH** /api/v1/sales/invoice/calculate | This method returnes prices as if DK calculated based on product,customer and based on discount groups
[**invoiceGetHtml**](InvoiceApi.md#invoiceGetHtml) | **GET** /api/v1/sales/invoice/{number}/html | Get a HTML generated from the Invoice
[**invoiceGetInvoice**](InvoiceApi.md#invoiceGetInvoice) | **GET** /api/v1/sales/invoice/{number} | Get a Sales Invoice
[**invoiceGetPDF**](InvoiceApi.md#invoiceGetPDF) | **GET** /api/v1/sales/invoice/{number}/pdf | Get PDF version of a invoice
[**invoiceGetPage**](InvoiceApi.md#invoiceGetPage) | **GET** /api/v1/sales/invoice/page/{page}/{count} | Get Sale Invoices
[**invoiceGetReference**](InvoiceApi.md#invoiceGetReference) | **GET** /api/v1/sales/invoice/reference/{reference}/{page}/{count} | Get Invoice by Reference Number
[**invoiceRefreshInvoiceFromDK**](InvoiceApi.md#invoiceRefreshInvoiceFromDK) | **PATCH** /api/v1/sales/invoice/{number}/refresh | Refresh invoice in dk+ from DK(Force Method)
[**invoiceSendEmail**](InvoiceApi.md#invoiceSendEmail) | **POST** /api/v1/sales/invoice/{number}/email | Send invoice as email.
[**invoiceSendMassEmail**](InvoiceApi.md#invoiceSendMassEmail) | **POST** /api/v1/sales/invoice/sendto/email | 


<a name="invoiceCancelPaymentPlan"></a>
# **invoiceCancelPaymentPlan**
> invoiceCancelPaymentPlan(invoice, _number, content)

Cancel a Payment Plan for Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var invoice = "invoice_example"; // String | Invoice Number

var _number = 56; // Number | Payment Plan Id

var content = new DkPlusApi.DkPlusAPIModelsInvoicePaymentPlanCancel(); // DkPlusAPIModelsInvoicePaymentPlanCancel | Cancel Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoiceCancelPaymentPlan(invoice, _number, content, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | **String**| Invoice Number | 
 **_number** | **Number**| Payment Plan Id | 
 **content** | [**DkPlusAPIModelsInvoicePaymentPlanCancel**](DkPlusAPIModelsInvoicePaymentPlanCancel.md)| Cancel Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceCreateCreditInvoice"></a>
# **invoiceCreateCreditInvoice**
> invoiceCreateCreditInvoice(id, opts)

Create credit invoice based on another invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var id = 56; // Number | invoice number

var opts = { 
  'post': true, // Boolean | Book the invoice
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | Reverse Invoice Date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoiceCreateCreditInvoice(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| invoice number | 
 **post** | **Boolean**| Book the invoice | [optional] 
 **_date** | **Date**| Reverse Invoice Date | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceCreateInvoice"></a>
# **invoiceCreateInvoice**
> DkCloudDataModelSalesInvoiceModel invoiceCreateInvoice(value, opts)

Create a Sales Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var value = new DkPlusApi.DkPlusAPIModelsInvoiceHead(); // DkPlusAPIModelsInvoiceHead | Invoice Post Model

var opts = { 
  'post': true // Boolean | Post Invoice
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceCreateInvoice(value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsInvoiceHead**](DkPlusAPIModelsInvoiceHead.md)| Invoice Post Model | 
 **post** | **Boolean**| Post Invoice | [optional] 

### Return type

[**DkCloudDataModelSalesInvoiceModel**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceCreatePaymentPlan"></a>
# **invoiceCreatePaymentPlan**
> 'Number' invoiceCreatePaymentPlan(_number, content)

Create a payment plan for a invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | Invoice Number

var content = new DkPlusApi.DkPlusAPIModelsInvoicePaymentPlanCreate(); // DkPlusAPIModelsInvoicePaymentPlanCreate | Payment Plan Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceCreatePaymentPlan(_number, content, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Invoice Number | 
 **content** | [**DkPlusAPIModelsInvoicePaymentPlanCreate**](DkPlusAPIModelsInvoicePaymentPlanCreate.md)| Payment Plan Model | 

### Return type

**'Number'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceDeleteInvoice"></a>
# **invoiceDeleteInvoice**
> invoiceDeleteInvoice(opts)

Use to delete invoices

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var opts = { 
  'reference': "reference_example", // String | Reference Number
  'warehouse': "warehouse_example", // String | Warehouse Id
  'id': 56, // Number | Unprinted invoice record Id
  'created': new Date("2013-10-20T19:20:30+01:00") // Date | Invoice Created Date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoiceDeleteInvoice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **String**| Reference Number | [optional] 
 **warehouse** | **String**| Warehouse Id | [optional] 
 **id** | **Number**| Unprinted invoice record Id | [optional] 
 **created** | **Date**| Invoice Created Date | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetByDate"></a>
# **invoiceGetByDate**
> [DkCloudDataModelSalesInvoiceModel] invoiceGetByDate(invoicedate, page, count)

Get Invoices by Date

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var invoicedate = new Date("2013-10-20T19:20:30+01:00"); // Date | Invoice Date

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Invoices per Page (default=100)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetByDate(invoicedate, page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoicedate** | **Date**| Invoice Date | 
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Invoices per Page (default=100) | 

### Return type

[**[DkCloudDataModelSalesInvoiceModel]**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetDiscounts"></a>
# **invoiceGetDiscounts**
> DkCloudDataModelSalesInvoiceModel invoiceGetDiscounts(value)

This method returnes prices as if DK calculated based on product,customer and based on discount groups

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var value = new DkPlusApi.DkPlusAPIModelsInvoiceHead(); // DkPlusAPIModelsInvoiceHead | Invoce Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetDiscounts(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsInvoiceHead**](DkPlusAPIModelsInvoiceHead.md)| Invoce Model | 

### Return type

[**DkCloudDataModelSalesInvoiceModel**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetHtml"></a>
# **invoiceGetHtml**
> 'String' invoiceGetHtml(_number, opts)

Get a HTML generated from the Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | 

var opts = { 
  'custom': "custom_example" // String | Use a predefined invoice look
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetHtml(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **custom** | **String**| Use a predefined invoice look | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetInvoice"></a>
# **invoiceGetInvoice**
> DkCloudDataModelSalesInvoiceModel invoiceGetInvoice(_number)

Get a Sales Invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | Invoice Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetInvoice(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Invoice Number | 

### Return type

[**DkCloudDataModelSalesInvoiceModel**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetPDF"></a>
# **invoiceGetPDF**
> Object invoiceGetPDF(_number, opts)

Get PDF version of a invoice

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | 

var opts = { 
  'custom': "custom_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetPDF(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **custom** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetPage"></a>
# **invoiceGetPage**
> [DkCloudDataModelSalesInvoiceModel] invoiceGetPage(page, count, opts)

Get Sale Invoices

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var page = 56; // Number | Page Number (default=0)

var count = 56; // Number | Invoices per Page (default=100)

var opts = { 
  'includeLines': true, // Boolean | Include Sale Lines with Invoice
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Date on the format YYYY-MM-DD
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Date on the format YYYY-MM-DD
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'dueAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'salesPerson': "salesPerson_example", // String | Sales person number
  'reference': "reference_example", // String | Reference Number
  'recordid': 56, // Number | Record Id After
  'customer': "customer_example", // String | Customer Number
  'project': "project_example", // String | Project Number
  'include': "include_example" // String | Fields to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number (default=0) | 
 **count** | **Number**| Invoices per Page (default=100) | 
 **includeLines** | **Boolean**| Include Sale Lines with Invoice | [optional] 
 **createdAfter** | **Date**| Date on the format YYYY-MM-DD | [optional] 
 **createdBefore** | **Date**| Date on the format YYYY-MM-DD | [optional] 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **dueAfter** | **Date**|  | [optional] 
 **salesPerson** | **String**| Sales person number | [optional] 
 **reference** | **String**| Reference Number | [optional] 
 **recordid** | **Number**| Record Id After | [optional] 
 **customer** | **String**| Customer Number | [optional] 
 **project** | **String**| Project Number | [optional] 
 **include** | **String**| Fields to include | [optional] 

### Return type

[**[DkCloudDataModelSalesInvoiceModel]**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceGetReference"></a>
# **invoiceGetReference**
> [DkCloudDataModelSalesInvoiceModel] invoiceGetReference(reference, page, count, opts)

Get Invoice by Reference Number

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var reference = "reference_example"; // String | Reference Number

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Invoices per Page (default=100)

var opts = { 
  'type': "type_example" // String | Invoice type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGetReference(reference, page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **String**| Reference Number | 
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Invoices per Page (default=100) | 
 **type** | **String**| Invoice type | [optional] 

### Return type

[**[DkCloudDataModelSalesInvoiceModel]**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceRefreshInvoiceFromDK"></a>
# **invoiceRefreshInvoiceFromDK**
> invoiceRefreshInvoiceFromDK(_number)

Refresh invoice in dk+ from DK(Force Method)

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | Invoice Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoiceRefreshInvoiceFromDK(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Invoice Number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceSendEmail"></a>
# **invoiceSendEmail**
> invoiceSendEmail(_number, message, opts)

Send invoice as email.

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | invoice number

var message = new DkPlusApi.DkPlusMailModelMailInfo(); // DkPlusMailModelMailInfo | Message model

var opts = { 
  'custom': "custom_example" // String | Use a predefined invoice look
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoiceSendEmail(_number, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| invoice number | 
 **message** | [**DkPlusMailModelMailInfo**](DkPlusMailModelMailInfo.md)| Message model | 
 **custom** | **String**| Use a predefined invoice look | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="invoiceSendMassEmail"></a>
# **invoiceSendMassEmail**
> Object invoiceSendMassEmail(_number, message, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.InvoiceApi();

var _number = "_number_example"; // String | Invoice

var message = new DkPlusApi.DkPlusMailModelMailInfo(); // DkPlusMailModelMailInfo | Message Model

var opts = { 
  'custom': "custom_example" // String | Use a predefined invoice look
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSendMassEmail(_number, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Invoice | 
 **message** | [**DkPlusMailModelMailInfo**](DkPlusMailModelMailInfo.md)| Message Model | 
 **custom** | **String**| Use a predefined invoice look | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

