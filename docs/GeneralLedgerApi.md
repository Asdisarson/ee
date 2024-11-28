# DkPlusApi.GeneralLedgerApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generalLedgerAccountGet**](GeneralLedgerApi.md#generalLedgerAccountGet) | **GET** /api/v1/generalledger/account | Get General Ledger Accounts
[**generalLedgerAccountGetAccount**](GeneralLedgerApi.md#generalLedgerAccountGetAccount) | **GET** /api/v1/generalledger/account/{number} | Get General Ledger Account
[**generalLedgerAccountGetTransactions**](GeneralLedgerApi.md#generalLedgerAccountGetTransactions) | **GET** /api/v1/generalledger/account/{id}/transaction/{page}/{count} | Get transactions for a General Ledger Account
[**generalLedgerJournalGetGeneralLedgerJournal**](GeneralLedgerApi.md#generalLedgerJournalGetGeneralLedgerJournal) | **POST** /api/v1/generalLedger/journal | Create a General Ledger Journal
[**generalLedgerTransactionGetGeneralTransactionPage**](GeneralLedgerApi.md#generalLedgerTransactionGetGeneralTransactionPage) | **GET** /api/v1/generalledger/transaction/page/{page}/{count} | Get General Ledger Transaction


<a name="generalLedgerAccountGet"></a>
# **generalLedgerAccountGet**
> [DkCloudDataModelGeneralLedgerAccount] generalLedgerAccountGet()

Get General Ledger Accounts

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.GeneralLedgerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generalLedgerAccountGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelGeneralLedgerAccount]**](DkCloudDataModelGeneralLedgerAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="generalLedgerAccountGetAccount"></a>
# **generalLedgerAccountGetAccount**
> DkCloudDataModelGeneralLedgerAccount generalLedgerAccountGetAccount(_number)

Get General Ledger Account

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.GeneralLedgerApi();

var _number = "_number_example"; // String | Account Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generalLedgerAccountGetAccount(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Account Number | 

### Return type

[**DkCloudDataModelGeneralLedgerAccount**](DkCloudDataModelGeneralLedgerAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="generalLedgerAccountGetTransactions"></a>
# **generalLedgerAccountGetTransactions**
> [DkCloudDataModelGeneralLedgerTransaction] generalLedgerAccountGetTransactions(id, page, count, opts)

Get transactions for a General Ledger Account

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.GeneralLedgerApi();

var id = "id_example"; // String | Account Number

var page = 56; // Number | Page Number (default=1)

var count = 56; // Number | Transactions per Page (default=100)

var opts = { 
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'dueAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Due After
  'dim1': "dim1_example", // String | Dimmention
  'voucher': "voucher_example", // String | Voucher
  'reference': "reference_example" // String | Reference
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generalLedgerAccountGetTransactions(id, page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Account Number | 
 **page** | **Number**| Page Number (default=1) | 
 **count** | **Number**| Transactions per Page (default=100) | 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **dueAfter** | **Date**| Due After | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **voucher** | **String**| Voucher | [optional] 
 **reference** | **String**| Reference | [optional] 

### Return type

[**[DkCloudDataModelGeneralLedgerTransaction]**](DkCloudDataModelGeneralLedgerTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="generalLedgerJournalGetGeneralLedgerJournal"></a>
# **generalLedgerJournalGetGeneralLedgerJournal**
> generalLedgerJournalGetGeneralLedgerJournal(value)

Create a General Ledger Journal

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.GeneralLedgerApi();

var value = new DkPlusApi.DkPlusAPIModelsGeneralLedgerHead(); // DkPlusAPIModelsGeneralLedgerHead | Journal Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.generalLedgerJournalGetGeneralLedgerJournal(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkPlusAPIModelsGeneralLedgerHead**](DkPlusAPIModelsGeneralLedgerHead.md)| Journal Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="generalLedgerTransactionGetGeneralTransactionPage"></a>
# **generalLedgerTransactionGetGeneralTransactionPage**
> [DkCloudDataModelGeneralLedgerTransaction] generalLedgerTransactionGetGeneralTransactionPage(page, count, opts)

Get General Ledger Transaction

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.GeneralLedgerApi();

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

