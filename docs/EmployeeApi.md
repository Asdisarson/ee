# DkPlusApi.EmployeeApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeCreateEmployee**](EmployeeApi.md#employeeCreateEmployee) | **POST** /api/v1/general/employee | Create an employee
[**employeeGetEmployee**](EmployeeApi.md#employeeGetEmployee) | **GET** /api/v1/general/employee/{number} | Use this method to get an employee
[**employeeGetEmployeeTimeClock**](EmployeeApi.md#employeeGetEmployeeTimeClock) | **GET** /api/v1/general/employee/{number}/timeclock/page/{page}/{count} | Time clock entries for an employee
[**employeeGetEmployees**](EmployeeApi.md#employeeGetEmployees) | **GET** /api/v1/general/employee | Using this method you can get all employee´s from the system
[**employeeGetProjectSupervisor**](EmployeeApi.md#employeeGetProjectSupervisor) | **GET** /api/v1/general/employee/{number}/supervisor | Get projects where employee is assigned as a supervior
[**employeeGetProjectWorker**](EmployeeApi.md#employeeGetProjectWorker) | **GET** /api/v1/general/employee/{number}/worker | Get projects where employee is assigned as a worker
[**employeeUpdateEmployee**](EmployeeApi.md#employeeUpdateEmployee) | **PUT** /api/v1/general/employee/{number} | Update an employee
[**employeeWorkCreateEmployeeWork**](EmployeeApi.md#employeeWorkCreateEmployeeWork) | **POST** /api/v1/general/employee/{employee}/work | Add Employee Work Journal Entry


<a name="employeeCreateEmployee"></a>
# **employeeCreateEmployee**
> DkCloudDataModelEmployeeEmployeeModel employeeCreateEmployee(employee)

Create an employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var employee = new DkPlusApi.DkCloudDataModelEmployeeEmployeeModel(); // DkCloudDataModelEmployeeEmployeeModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeCreateEmployee(employee, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**DkCloudDataModelEmployeeEmployeeModel**](DkCloudDataModelEmployeeEmployeeModel.md)|  | 

### Return type

[**DkCloudDataModelEmployeeEmployeeModel**](DkCloudDataModelEmployeeEmployeeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeGetEmployee"></a>
# **employeeGetEmployee**
> DkCloudDataModelEmployeeEmployeeModel employeeGetEmployee(_number)

Use this method to get an employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var _number = "_number_example"; // String | Employee number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeGetEmployee(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Employee number | 

### Return type

[**DkCloudDataModelEmployeeEmployeeModel**](DkCloudDataModelEmployeeEmployeeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeGetEmployeeTimeClock"></a>
# **employeeGetEmployeeTimeClock**
> [DkCloudDataModelTimeClockEntryModel] employeeGetEmployeeTimeClock(_number, page, count)

Time clock entries for an employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var _number = "_number_example"; // String | Employee number

var page = 56; // Number | Page number (default=1)

var count = 56; // Number | Number of objects on page (default=100)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeGetEmployeeTimeClock(_number, page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Employee number | 
 **page** | **Number**| Page number (default=1) | 
 **count** | **Number**| Number of objects on page (default=100) | 

### Return type

[**[DkCloudDataModelTimeClockEntryModel]**](DkCloudDataModelTimeClockEntryModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeGetEmployees"></a>
# **employeeGetEmployees**
> [DkCloudDataModelEmployeeEmployeeModel] employeeGetEmployees()

Using this method you can get all employee´s from the system

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeGetEmployees(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelEmployeeEmployeeModel]**](DkCloudDataModelEmployeeEmployeeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeGetProjectSupervisor"></a>
# **employeeGetProjectSupervisor**
> [DkCloudDataModelProjectProjectModel] employeeGetProjectSupervisor(_number)

Get projects where employee is assigned as a supervior

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var _number = "_number_example"; // String | Employee number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeGetProjectSupervisor(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Employee number | 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeGetProjectWorker"></a>
# **employeeGetProjectWorker**
> [DkCloudDataModelProjectProjectModel] employeeGetProjectWorker(_number)

Get projects where employee is assigned as a worker

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var _number = "_number_example"; // String | Employee number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeGetProjectWorker(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Employee number | 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeUpdateEmployee"></a>
# **employeeUpdateEmployee**
> DkCloudDataModelEmployeeEmployeeModel employeeUpdateEmployee(_number, employee)

Update an employee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var _number = "_number_example"; // String | Employee number

var employee = new DkPlusApi.DkCloudDataModelEmployeeEmployeeModel(); // DkCloudDataModelEmployeeEmployeeModel | Employee Object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeeUpdateEmployee(_number, employee, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Employee number | 
 **employee** | [**DkCloudDataModelEmployeeEmployeeModel**](DkCloudDataModelEmployeeEmployeeModel.md)| Employee Object | 

### Return type

[**DkCloudDataModelEmployeeEmployeeModel**](DkCloudDataModelEmployeeEmployeeModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="employeeWorkCreateEmployeeWork"></a>
# **employeeWorkCreateEmployeeWork**
> employeeWorkCreateEmployeeWork(employee, lines, opts)

Add Employee Work Journal Entry

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.EmployeeApi();

var employee = "employee_example"; // String | Employee Number

var lines = [new DkPlusApi.DkPlusAPIModelsEmployeeEmployeeWork()]; // [DkPlusAPIModelsEmployeeEmployeeWork] | Journal Lines

var opts = { 
  'post': true // Boolean | Post Lines(Will be Locked and invoiced)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.employeeWorkCreateEmployeeWork(employee, lines, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | **String**| Employee Number | 
 **lines** | [**[DkPlusAPIModelsEmployeeEmployeeWork]**](DkPlusAPIModelsEmployeeEmployeeWork.md)| Journal Lines | 
 **post** | **Boolean**| Post Lines(Will be Locked and invoiced) | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

