# DkPlusApi.CustomerApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerCallerIdByPhone**](CustomerApi.md#customerCallerIdByPhone) | **GET** /api/v1/Customer/Phone/{number}/display | Generate Phone Caller id by phone number
[**customerCreateCustomer**](CustomerApi.md#customerCreateCustomer) | **POST** /api/v1/Customer | Create Customer
[**customerDeleteCustomer**](CustomerApi.md#customerDeleteCustomer) | **DELETE** /api/v1/Customer/{customer} | Delete a Customer
[**customerGetAttachment**](CustomerApi.md#customerGetAttachment) | **GET** /api/v1/customer/{customer}/attachment/{id} | Get a document assigned to a Customer
[**customerGetCustomerById**](CustomerApi.md#customerGetCustomerById) | **GET** /api/v1/Customer/{customer} | Get a Customer
[**customerGetCustomerCard**](CustomerApi.md#customerGetCustomerCard) | **GET** /api/v1/Customer/{customer}/card | Get Customer Card Information
[**customerGetCustomerCount**](CustomerApi.md#customerGetCustomerCount) | **GET** /api/v1/Customer/info/count | Get the count of customer that have changed by the supplied conditions
[**customerGetCustomerInvoices**](CustomerApi.md#customerGetCustomerInvoices) | **GET** /api/v1/Customer/{customer}/invoice | Get Invoices for a Customer
[**customerGetCustomerOrders**](CustomerApi.md#customerGetCustomerOrders) | **GET** /api/v1/Customer/{customer}/order | Get Orders for a Customer
[**customerGetCustomerQuote**](CustomerApi.md#customerGetCustomerQuote) | **GET** /api/v1/Customer/{customer}/quote | Get Quotes for a Customer
[**customerGetCustomerTransactions**](CustomerApi.md#customerGetCustomerTransactions) | **GET** /api/v1/Customer/{customer}/transaction | Get Transactions for a Customer
[**customerGetCustomers**](CustomerApi.md#customerGetCustomers) | **GET** /api/v1/Customer/{includeObjects} | Get Customers
[**customerGetCustomersPaged**](CustomerApi.md#customerGetCustomersPaged) | **GET** /api/v1/Customer/page/{page}/{count} | Get Customers base on Filter
[**customerGetCutomerProjects**](CustomerApi.md#customerGetCutomerProjects) | **GET** /api/v1/Customer/{customer}/project | Get Projects for a Customer
[**customerGetGroup**](CustomerApi.md#customerGetGroup) | **GET** /api/v1/Customer/group/{id}/{page}/{count} | Get Customers by Groups
[**customerGetSearch**](CustomerApi.md#customerGetSearch) | **GET** /api/v1/Customer/search/{value}/{max} | Search for Customers
[**customerGroupGet**](CustomerApi.md#customerGroupGet) | **GET** /api/v1/customergroup | Get customer groups
[**customerSearchByPhone**](CustomerApi.md#customerSearchByPhone) | **GET** /api/v1/Customer/Phone/{number} | Lookup customer by phone number  this looks into Phone,PhoneLocal,PhoneMobile on customer,contacts and Recivers
[**customerTransactionGetCustomerTransactions**](CustomerApi.md#customerTransactionGetCustomerTransactions) | **GET** /api/v1/customer/transaction/page/{page}/{count} | Get General Ledger Transaction
[**customerUpdateCustomer**](CustomerApi.md#customerUpdateCustomer) | **PUT** /api/v1/Customer/{customer} | Update a Customer
[**customerUpdateCustomerCard**](CustomerApi.md#customerUpdateCustomerCard) | **PUT** /api/v1/Customer/{customer}/card | 


<a name="customerCallerIdByPhone"></a>
# **customerCallerIdByPhone**
> 'String' customerCallerIdByPhone(_number, opts)

Generate Phone Caller id by phone number

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var _number = "_number_example"; // String | Phone Number

var opts = { 
  'format': "format_example" // String | Display format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCallerIdByPhone(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Phone Number | 
 **format** | **String**| Display format | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerCreateCustomer"></a>
# **customerCreateCustomer**
> customerCreateCustomer(obj)

Create Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var obj = new DkPlusApi.DkCloudDataModelCustomersCustomerModel(); // DkCloudDataModelCustomersCustomerModel | Customer Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerCreateCustomer(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**DkCloudDataModelCustomersCustomerModel**](DkCloudDataModelCustomersCustomerModel.md)| Customer Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerDeleteCustomer"></a>
# **customerDeleteCustomer**
> customerDeleteCustomer(customer)

Delete a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerDeleteCustomer(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetAttachment"></a>
# **customerGetAttachment**
> Object customerGetAttachment(customer, id)

Get a document assigned to a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number

var id = 56; // Number | Document Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetAttachment(customer, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 
 **id** | **Number**| Document Id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerById"></a>
# **customerGetCustomerById**
> DkCloudDataModelCustomersCustomerModel customerGetCustomerById(customer)

Get a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerById(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**DkCloudDataModelCustomersCustomerModel**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerCard"></a>
# **customerGetCustomerCard**
> DkCloudDataModelGeneralCreditCard customerGetCustomerCard(customer)

Get Customer Card Information

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerCard(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**|  | 

### Return type

[**DkCloudDataModelGeneralCreditCard**](DkCloudDataModelGeneralCreditCard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerCount"></a>
# **customerGetCustomerCount**
> 'Number' customerGetCustomerCount(opts)

Get the count of customer that have changed by the supplied conditions

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var opts = { 
  'group': "group_example", // String | 
  'zipcode': "zipcode_example", // String | 
  'country': "country_example", // String | 
  'salesperson': "salesperson_example", // String | 
  'paymentterm': "paymentterm_example", // String | 
  'paymentmode': "paymentmode_example", // String | 
  'novat': true, // Boolean | 
  'blocked': true, // Boolean | 
  'attribute': "attribute_example", // String | 
  'attributecomment': "attributecomment_example", // String | 
  'attributeoption': "attributeoption_example", // String | 
  'memo': "memo_example", // String | 
  'deleted': true, // Boolean | 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**|  | [optional] 
 **zipcode** | **String**|  | [optional] 
 **country** | **String**|  | [optional] 
 **salesperson** | **String**|  | [optional] 
 **paymentterm** | **String**|  | [optional] 
 **paymentmode** | **String**|  | [optional] 
 **novat** | **Boolean**|  | [optional] 
 **blocked** | **Boolean**|  | [optional] 
 **attribute** | **String**|  | [optional] 
 **attributecomment** | **String**|  | [optional] 
 **attributeoption** | **String**|  | [optional] 
 **memo** | **String**|  | [optional] 
 **deleted** | **Boolean**|  | [optional] 
 **modifiedBefore** | **Date**|  | [optional] 
 **modifiedAfter** | **Date**|  | [optional] 

### Return type

**'Number'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerInvoices"></a>
# **customerGetCustomerInvoices**
> [DkCloudDataModelSalesInvoiceModel] customerGetCustomerInvoices(customer)

Get Invoices for a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerInvoices(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelSalesInvoiceModel]**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerOrders"></a>
# **customerGetCustomerOrders**
> [DkCloudDataModelSalesSalesOrderModel] customerGetCustomerOrders(customer)

Get Orders for a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerOrders(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelSalesSalesOrderModel]**](DkCloudDataModelSalesSalesOrderModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerQuote"></a>
# **customerGetCustomerQuote**
> [DkCloudDataModelSalesQuoteHead] customerGetCustomerQuote(customer)

Get Quotes for a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerQuote(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelSalesQuoteHead]**](DkCloudDataModelSalesQuoteHead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomerTransactions"></a>
# **customerGetCustomerTransactions**
> [DkCloudDataModelProductsTransactionsModel] customerGetCustomerTransactions(customer)

Get Transactions for a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomerTransactions(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelProductsTransactionsModel]**](DkCloudDataModelProductsTransactionsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomers"></a>
# **customerGetCustomers**
> [DkCloudDataModelCustomersCustomerModel] customerGetCustomers(includeObjects, opts)

Get Customers

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var includeObjects = true; // Boolean | Include Objects

var opts = { 
  'include': "include_example" // String | Field to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomers(includeObjects, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeObjects** | **Boolean**| Include Objects | 
 **include** | **String**| Field to include | [optional] 

### Return type

[**[DkCloudDataModelCustomersCustomerModel]**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCustomersPaged"></a>
# **customerGetCustomersPaged**
> [DkCloudDataModelCustomersCustomerModel] customerGetCustomersPaged(page, count, opts)

Get Customers base on Filter

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Customers per page (default=100)

var opts = { 
  'group': "group_example", // String | Group
  'zipcode': "zipcode_example", // String | Zip Code
  'country': "country_example", // String | Country
  'salesperson': "salesperson_example", // String | Sales Person
  'paymentterm': "paymentterm_example", // String | Payment Term
  'paymentmode': "paymentmode_example", // String | Payment Mode
  'novat': true, // Boolean | No VAT
  'blocked': true, // Boolean | Blocked
  'attribute': "attribute_example", // String | Attribute
  'attributecomment': "attributecomment_example", // String | Attribute Comment
  'attributeoption': "attributeoption_example", // String | Attribute Option
  'memo': "memo_example", // String | Search memo for string
  'deleted': true, // Boolean | Customer Deleted
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'include': "include_example", // String | Fields to Include
  'email': "email_example" // String | Email
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCustomersPaged(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Customers per page (default=100) | 
 **group** | **String**| Group | [optional] 
 **zipcode** | **String**| Zip Code | [optional] 
 **country** | **String**| Country | [optional] 
 **salesperson** | **String**| Sales Person | [optional] 
 **paymentterm** | **String**| Payment Term | [optional] 
 **paymentmode** | **String**| Payment Mode | [optional] 
 **novat** | **Boolean**| No VAT | [optional] 
 **blocked** | **Boolean**| Blocked | [optional] 
 **attribute** | **String**| Attribute | [optional] 
 **attributecomment** | **String**| Attribute Comment | [optional] 
 **attributeoption** | **String**| Attribute Option | [optional] 
 **memo** | **String**| Search memo for string | [optional] 
 **deleted** | **Boolean**| Customer Deleted | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **include** | **String**| Fields to Include | [optional] 
 **email** | **String**| Email | [optional] 

### Return type

[**[DkCloudDataModelCustomersCustomerModel]**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetCutomerProjects"></a>
# **customerGetCutomerProjects**
> [DkCloudDataModelProjectProjectModel] customerGetCutomerProjects(customer)

Get Projects for a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetCutomerProjects(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetGroup"></a>
# **customerGetGroup**
> [DkCloudDataModelCustomersCustomerModel] customerGetGroup(id, page, count)

Get Customers by Groups

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var id = "id_example"; // String | Group Number

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Groups per Page (default=100)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetGroup(id, page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Group Number | 
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Groups per Page (default=100) | 

### Return type

[**[DkCloudDataModelCustomersCustomerModel]**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGetSearch"></a>
# **customerGetSearch**
> [DkCloudDataModelCustomersCustomerModel] customerGetSearch(value, max)

Search for Customers

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var value = "value_example"; // String | Search Value

var max = 56; // Number | Return Maximum Count


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGetSearch(value, max, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Search Value | 
 **max** | **Number**| Return Maximum Count | 

### Return type

[**[DkCloudDataModelCustomersCustomerModel]**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerGroupGet"></a>
# **customerGroupGet**
> [DkCloudDataModelCustomersCustomerGroupModel] customerGroupGet()

Get customer groups

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelCustomersCustomerGroupModel]**](DkCloudDataModelCustomersCustomerGroupModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerSearchByPhone"></a>
# **customerSearchByPhone**
> DkCloudDataModelCustomersCustomerModel customerSearchByPhone(_number)

Lookup customer by phone number  this looks into Phone,PhoneLocal,PhoneMobile on customer,contacts and Recivers

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var _number = "_number_example"; // String | Phone Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSearchByPhone(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Phone Number | 

### Return type

[**DkCloudDataModelCustomersCustomerModel**](DkCloudDataModelCustomersCustomerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerTransactionGetCustomerTransactions"></a>
# **customerTransactionGetCustomerTransactions**
> [DkCloudDataModelCustomersTransactionModel] customerTransactionGetCustomerTransactions(page, count, opts)

Get General Ledger Transaction

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

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
  'recordid': 56, // Number | Id Greater Than
  'include': "include_example", // String | fields to include
  'customer': "customer_example" // String | Customer Number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerTransactionGetCustomerTransactions(page, count, opts, callback);
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
 **recordid** | **Number**| Id Greater Than | [optional] 
 **include** | **String**| fields to include | [optional] 
 **customer** | **String**| Customer Number | [optional] 

### Return type

[**[DkCloudDataModelCustomersTransactionModel]**](DkCloudDataModelCustomersTransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerUpdateCustomer"></a>
# **customerUpdateCustomer**
> customerUpdateCustomer(customer, obj)

Update a Customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | Customer Number

var obj = new DkPlusApi.DkCloudDataModelCustomersCustomerModel(); // DkCloudDataModelCustomersCustomerModel | Customer Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerUpdateCustomer(customer, obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 
 **obj** | [**DkCloudDataModelCustomersCustomerModel**](DkCloudDataModelCustomersCustomerModel.md)| Customer Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="customerUpdateCustomerCard"></a>
# **customerUpdateCustomerCard**
> customerUpdateCustomerCard(customer, card)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.CustomerApi();

var customer = "customer_example"; // String | 

var card = new DkPlusApi.DkCloudDataModelGeneralCreditCard(); // DkCloudDataModelGeneralCreditCard | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerUpdateCustomerCard(customer, card, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**|  | 
 **card** | [**DkCloudDataModelGeneralCreditCard**](DkCloudDataModelGeneralCreditCard.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

