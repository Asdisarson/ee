# DkPlusApi.TimeClockApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timeClockDkPosRegister**](TimeClockApi.md#timeClockDkPosRegister) | **POST** /api/v1/TimeClock/dkposregister/{employee} | 
[**timeClockGetConfig**](TimeClockApi.md#timeClockGetConfig) | **GET** /api/v1/TimeClock/web/config | 
[**timeClockGetEmployee**](TimeClockApi.md#timeClockGetEmployee) | **GET** /api/v1/TimeClock/Employee | 
[**timeClockGetIn**](TimeClockApi.md#timeClockGetIn) | **GET** /api/v1/TimeClock/in | 
[**timeClockGetOut**](TimeClockApi.md#timeClockGetOut) | **GET** /api/v1/TimeClock/out | 
[**timeClockGetProject**](TimeClockApi.md#timeClockGetProject) | **GET** /api/v1/TimeClock/project/{number} | 
[**timeClockGetTimeClockEnrties**](TimeClockApi.md#timeClockGetTimeClockEnrties) | **GET** /api/v1/TimeClock/entries | Get Time Clock Entries
[**timeClockGetTimeClockSettings**](TimeClockApi.md#timeClockGetTimeClockSettings) | **GET** /api/v1/TimeClock/settings | Get TimeClock Settings for company
[**timeClockQuit**](TimeClockApi.md#timeClockQuit) | **POST** /api/v1/TimeClock/quit | 
[**timeClockRegister**](TimeClockApi.md#timeClockRegister) | **POST** /api/v1/TimeClock/register/{employee} | 
[**timeClockTimeClockStamp**](TimeClockApi.md#timeClockTimeClockStamp) | **POST** /api/v1/TimeClock/stamp/{employee} | Stamp Employee


<a name="timeClockDkPosRegister"></a>
# **timeClockDkPosRegister**
> Object timeClockDkPosRegister(employee, company, license, info)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var employee = "employee_example"; // String | 

var company = "company_example"; // String | 

var license = "license_example"; // String | 

var info = new DkPlusApi.DkPlusAPIModelsTimeClockRegisterInfo(); // DkPlusAPIModelsTimeClockRegisterInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockDkPosRegister(employee, company, license, info, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | **String**|  | 
 **company** | **String**|  | 
 **license** | **String**|  | 
 **info** | [**DkPlusAPIModelsTimeClockRegisterInfo**](DkPlusAPIModelsTimeClockRegisterInfo.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetConfig"></a>
# **timeClockGetConfig**
> Object timeClockGetConfig(host)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var host = "host_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetConfig(host, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetEmployee"></a>
# **timeClockGetEmployee**
> Object timeClockGetEmployee(phone)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var phone = "phone_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetEmployee(phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetIn"></a>
# **timeClockGetIn**
> [DkCloudDataModelTimeClockEntryModel] timeClockGetIn()



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetIn(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelTimeClockEntryModel]**](DkCloudDataModelTimeClockEntryModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetOut"></a>
# **timeClockGetOut**
> [DkCloudDataModelTimeClockEntryModel] timeClockGetOut()



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetOut(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelTimeClockEntryModel]**](DkCloudDataModelTimeClockEntryModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetProject"></a>
# **timeClockGetProject**
> Object timeClockGetProject(_number, company)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var _number = "_number_example"; // String | 

var company = "company_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetProject(_number, company, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **company** | [**String**](.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetTimeClockEnrties"></a>
# **timeClockGetTimeClockEnrties**
> [DkCloudDataModelTimeClockEntryModel] timeClockGetTimeClockEnrties(opts)

Get Time Clock Entries

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Stamped in after
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Stamped out before
  'employee': "employee_example", // String | Employee Number
  'dim1': "dim1_example", // String | 
  'dim2': "dim2_example", // String | 
  'dim3': "dim3_example", // String | 
  'project': "project_example", // String | 
  'phase': "phase_example", // String | 
  'task': "task_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetTimeClockEnrties(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| Stamped in after | [optional] 
 **to** | **Date**| Stamped out before | [optional] 
 **employee** | **String**| Employee Number | [optional] 
 **dim1** | **String**|  | [optional] 
 **dim2** | **String**|  | [optional] 
 **dim3** | **String**|  | [optional] 
 **project** | **String**|  | [optional] 
 **phase** | **String**|  | [optional] 
 **task** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelTimeClockEntryModel]**](DkCloudDataModelTimeClockEntryModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockGetTimeClockSettings"></a>
# **timeClockGetTimeClockSettings**
> DkCloudDataModelSettingsTimeClockSettingModel timeClockGetTimeClockSettings()

Get TimeClock Settings for company

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockGetTimeClockSettings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DkCloudDataModelSettingsTimeClockSettingModel**](DkCloudDataModelSettingsTimeClockSettingModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockQuit"></a>
# **timeClockQuit**
> Object timeClockQuit(company, employee)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var company = "company_example"; // String | 

var employee = "employee_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockQuit(company, employee, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**String**](.md)|  | 
 **employee** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockRegister"></a>
# **timeClockRegister**
> Object timeClockRegister(employee, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var employee = "employee_example"; // String | 

var opts = { 
  'company': "company_example", // String | 
  'project': "project_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timeClockRegister(employee, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | **String**|  | 
 **company** | **String**|  | [optional] 
 **project** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="timeClockTimeClockStamp"></a>
# **timeClockTimeClockStamp**
> timeClockTimeClockStamp(employee, opts)

Stamp Employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.TimeClockApi();

var employee = "employee_example"; // String | 

var opts = { 
  'project': "project_example", // String | 
  'type': "type_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.timeClockTimeClockStamp(employee, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | **String**|  | 
 **project** | **String**|  | [optional] 
 **type** | [**String**](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

