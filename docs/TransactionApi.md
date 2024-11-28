# DkPlusApi.TransactionApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerTransactionGetCustomerTransactions**](TransactionApi.md#customerTransactionGetCustomerTransactions) | **GET** /api/v1/customer/transaction/page/{page}/{count} | Get General Ledger Transaction
[**generalLedgerTransactionGetGeneralTransactionPage**](TransactionApi.md#generalLedgerTransactionGetGeneralTransactionPage) | **GET** /api/v1/generalledger/transaction/page/{page}/{count} | Get General Ledger Transaction
[**productTransactionGetInventoryTransactionsPage**](TransactionApi.md#productTransactionGetInventoryTransactionsPage) | **GET** /api/v1/product/transaction/{page}/{count} | 
[**projectTransactionGetProjectTransactionPage**](TransactionApi.md#projectTransactionGetProjectTransactionPage) | **GET** /api/v1/project/transaction/page/{page}/{count} | Get Project Transactions
[**vendorTransactionGetVendorTransactions**](TransactionApi.md#vendorTransactionGetVendorTransactions) | **GET** /api/v1/vendor/transaction/{page}/{count} | 


<a name="customerTransactionGetCustomerTransactions"></a>
# **customerTransactionGetCustomerTransactions**
> [DkCloudDataModelCustomersTransactionModel] customerTransactionGetCustomerTransactions(page, count, opts)

Get General Ledger Transaction

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TransactionApi();

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

<a name="generalLedgerTransactionGetGeneralTransactionPage"></a>
# **generalLedgerTransactionGetGeneralTransactionPage**
> [DkCloudDataModelGeneralLedgerTransaction] generalLedgerTransactionGetGeneralTransactionPage(page, count, opts)

Get General Ledger Transaction

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TransactionApi();

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Transactions per Page (default=100)

var opts = { 
  'account': "account_example", // String | General Ledger Account Number
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'dueAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Due After
  'dim1': "dim1_example", // String | Dimmention
  'voucher': "voucher_example", // String | Voucher
  'reference': "reference_example", // String | Reference
  'recordid': 56, // Number | Id Greter Than
  'include': "include_example", // String | Fields to include
  'sort': "sort_example", // String | Field to sort by
  'sorttype': "sorttype_example" // String | Sort Direction
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generalLedgerTransactionGetGeneralTransactionPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Transactions per Page (default=100) | 
 **account** | **String**| General Ledger Account Number | [optional] 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **dueAfter** | **Date**| Due After | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **voucher** | **String**| Voucher | [optional] 
 **reference** | **String**| Reference | [optional] 
 **recordid** | **Number**| Id Greter Than | [optional] 
 **include** | **String**| Fields to include | [optional] 
 **sort** | **String**| Field to sort by | [optional] 
 **sorttype** | **String**| Sort Direction | [optional] 

### Return type

[**[DkCloudDataModelGeneralLedgerTransaction]**](DkCloudDataModelGeneralLedgerTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productTransactionGetInventoryTransactionsPage"></a>
# **productTransactionGetInventoryTransactionsPage**
> [DkCloudDataModelProductsTransactionsModel] productTransactionGetInventoryTransactionsPage(page, count, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TransactionApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Objects to return

var opts = { 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'dim1': "dim1_example", // String | Dimmention
  'itemcode': "itemcode_example", // String | Item Code
  'warehouse': "warehouse_example", // String | Wharehouse
  'currency': "currency_example", // String | Currency Code
  'reference': "reference_example", // String | Reference
  'include': "include_example" // String | Fields to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productTransactionGetInventoryTransactionsPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects to return | 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **itemcode** | **String**| Item Code | [optional] 
 **warehouse** | **String**| Wharehouse | [optional] 
 **currency** | **String**| Currency Code | [optional] 
 **reference** | **String**| Reference | [optional] 
 **include** | **String**| Fields to include | [optional] 

### Return type

[**[DkCloudDataModelProductsTransactionsModel]**](DkCloudDataModelProductsTransactionsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectTransactionGetProjectTransactionPage"></a>
# **projectTransactionGetProjectTransactionPage**
> [DkCloudDataModelGeneralLedgerTransaction] projectTransactionGetProjectTransactionPage(page, count, opts)

Get Project Transactions

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TransactionApi();

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Transactions per Page (default=100)

var opts = { 
  'project': "project_example", // String | Project Number
  'account': "account_example", // String | General Ledger Account Number
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'dim1': "dim1_example", // String | Dimmention
  'voucher': "voucher_example", // String | Voucher
  'reference': "reference_example", // String | Referenec
  'recordid': 56, // Number | Record Id After
  'origin': "origin_example", // String | Origin
  'include': "include_example", // String | Fields to include
  'sort': "sort_example", // String | Field to Sort
  'sorttype': "sorttype_example" // String | Sort Direction
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectTransactionGetProjectTransactionPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Transactions per Page (default=100) | 
 **project** | **String**| Project Number | [optional] 
 **account** | **String**| General Ledger Account Number | [optional] 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **voucher** | **String**| Voucher | [optional] 
 **reference** | **String**| Referenec | [optional] 
 **recordid** | **Number**| Record Id After | [optional] 
 **origin** | **String**| Origin | [optional] 
 **include** | **String**| Fields to include | [optional] 
 **sort** | **String**| Field to Sort | [optional] 
 **sorttype** | **String**| Sort Direction | [optional] 

### Return type

[**[DkCloudDataModelGeneralLedgerTransaction]**](DkCloudDataModelGeneralLedgerTransaction.md)

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

var apiInstance = new DkPlusApi.TransactionApi();

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

