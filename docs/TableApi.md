# DkPlusApi.TableApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tableCreateRecord**](TableApi.md#tableCreateRecord) | **POST** /api/v1/general/table/{name} | Create Record In Table
[**tableDeleteRecord**](TableApi.md#tableDeleteRecord) | **DELETE** /api/v1/general/table/{name} | This action deletes a record WARNING: Action performed at own risk.
[**tableGetDeleted**](TableApi.md#tableGetDeleted) | **GET** /api/v1/general/table/{name}/deleted | Get Deleted Records from Table
[**tableGetRecordChangeCount**](TableApi.md#tableGetRecordChangeCount) | **GET** /api/v1/general/table/{name}/changes | Record Change Count from Table
[**tableGetRecordsFromTable**](TableApi.md#tableGetRecordsFromTable) | **GET** /api/v1/general/table/{name}/records | Get Records from a table
[**tableGetTableFields**](TableApi.md#tableGetTableFields) | **GET** /api/v1/general/table/{name}/fields | Return List of Table Fields
[**tableUpdateRecord**](TableApi.md#tableUpdateRecord) | **PUT** /api/v1/general/table/{name}/{key} | Update Record In DK


<a name="tableCreateRecord"></a>
# **tableCreateRecord**
> tableCreateRecord(name, values)

Create Record In Table

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name

var values = null; // Object | Key Values


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tableCreateRecord(name, values, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 
 **values** | **Object**| Key Values | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableDeleteRecord"></a>
# **tableDeleteRecord**
> 'String' tableDeleteRecord(name, value, opts)

This action deletes a record WARNING: Action performed at own risk.

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name

var value = "value_example"; // String | Lookup value

var opts = { 
  'key': "key_example" // String | Field Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tableDeleteRecord(name, value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 
 **value** | **String**| Lookup value | 
 **key** | **String**| Field Name | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableGetDeleted"></a>
# **tableGetDeleted**
> [DkPlusAPIModelsRecordDeletedInfo] tableGetDeleted(name, opts)

Get Deleted Records from Table

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name

var opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Deleted After
  'max': 56 // Number | Max returned objects
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tableGetDeleted(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 
 **from** | **Date**| Deleted After | [optional] 
 **max** | **Number**| Max returned objects | [optional] 

### Return type

[**[DkPlusAPIModelsRecordDeletedInfo]**](DkPlusAPIModelsRecordDeletedInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableGetRecordChangeCount"></a>
# **tableGetRecordChangeCount**
> DkPlusAPIModelsTableChangeResponse tableGetRecordChangeCount(name, opts)

Record Change Count from Table

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name

var opts = { 
  'modified': new Date("2013-10-20T19:20:30+01:00") // Date | Modified After
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tableGetRecordChangeCount(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 
 **modified** | **Date**| Modified After | [optional] 

### Return type

[**DkPlusAPIModelsTableChangeResponse**](DkPlusAPIModelsTableChangeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableGetRecordsFromTable"></a>
# **tableGetRecordsFromTable**
> 'String' tableGetRecordsFromTable(name, fields, opts)

Get Records from a table

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name

var fields = "fields_example"; // String | Fields to Return

var opts = { 
  'output': "output_example", // String | Output Type
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified
  'count': 56, // Number | Recourd Cout
  'key': "key_example", // String | 
  'value': "value_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tableGetRecordsFromTable(name, fields, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 
 **fields** | **String**| Fields to Return | 
 **output** | **String**| Output Type | [optional] 
 **modified** | **Date**| Modified | [optional] 
 **count** | **Number**| Recourd Cout | [optional] 
 **key** | **String**|  | [optional] 
 **value** | **String**|  | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableGetTableFields"></a>
# **tableGetTableFields**
> ['String'] tableGetTableFields(name)

Return List of Table Fields

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var name = "name_example"; // String | Table Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tableGetTableFields(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Table Name | 

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tableUpdateRecord"></a>
# **tableUpdateRecord**
> tableUpdateRecord(values, name, key)

Update Record In DK

## Set Values    Warning: you need to make sure 100% what you are doing

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TableApi();

var values = null; // Object | Values to Update

var name = "name_example"; // String | Table Nae

var key = "key_example"; // String | Index Keys


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tableUpdateRecord(values, name, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **values** | **Object**| Values to Update | 
 **name** | **String**| Table Nae | 
 **key** | **String**| Index Keys | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

