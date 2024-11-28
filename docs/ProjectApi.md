# DkPlusApi.ProjectApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeWorkCreateEmployeeWork**](ProjectApi.md#employeeWorkCreateEmployeeWork) | **POST** /api/v1/general/employee/{employee}/work | Add Employee Work Journal Entry
[**phasesCreatePhase**](ProjectApi.md#phasesCreatePhase) | **POST** /api/v1/projects/Phase | Create a Phase for the Project System
[**phasesGetPhase**](ProjectApi.md#phasesGetPhase) | **GET** /api/v1/Project/Phase/{number} | Get a phase
[**phasesGetPhases**](ProjectApi.md#phasesGetPhases) | **GET** /api/v1/Project/Phase/{page}/{count} | Get Project Phases
[**phasesUpdatePhase**](ProjectApi.md#phasesUpdatePhase) | **PUT** /api/v1/projects/Phase/{number} | Update Project System Phase
[**projectCreateProject**](ProjectApi.md#projectCreateProject) | **POST** /api/v1/project | Method used to create a new Project(Job)
[**projectGetModified**](ProjectApi.md#projectGetModified) | **GET** /api/v1/project/modified/{modified}/{page}/{count} | Get modified Projects
[**projectGetPage**](ProjectApi.md#projectGetPage) | **GET** /api/v1/project/page/{page}/{count} | Get Projects Paged
[**projectGetProject**](ProjectApi.md#projectGetProject) | **GET** /api/v1/project/{number} | Get Project
[**projectGetProjectInvoices**](ProjectApi.md#projectGetProjectInvoices) | **GET** /api/v1/project/{number}/invoice | Get Invoices for Project
[**projectGetProjectRequests**](ProjectApi.md#projectGetProjectRequests) | **GET** /api/v1/project/{number}/requests/{page}/{size} | Get Project Requests
[**projectGetProjects**](ProjectApi.md#projectGetProjects) | **GET** /api/v1/project | Get all Projects
[**projectRequestCreateProjectRequets**](ProjectApi.md#projectRequestCreateProjectRequets) | **POST** /api/v1/projectrequest | 
[**projectRequestDeleteProjectRequets**](ProjectApi.md#projectRequestDeleteProjectRequets) | **DELETE** /api/v1/projectrequest/{id} | 
[**projectRequestGetProjectRequets**](ProjectApi.md#projectRequestGetProjectRequets) | **GET** /api/v1/projectrequest/{page}/{size} | Get Project Requests
[**projectRequestUpdateProjectRequets**](ProjectApi.md#projectRequestUpdateProjectRequets) | **PUT** /api/v1/projectrequest/{id} | 
[**projectTransactionGetProjectTransactionPage**](ProjectApi.md#projectTransactionGetProjectTransactionPage) | **GET** /api/v1/project/transaction/page/{page}/{count} | Get Project Transactions
[**tasksCreateTask**](ProjectApi.md#tasksCreateTask) | **POST** /api/v1/projects/task | Create a Task for the Project System
[**tasksGetTask**](ProjectApi.md#tasksGetTask) | **GET** /api/v1/Project/Tasks/{number} | 
[**tasksGetTasks**](ProjectApi.md#tasksGetTasks) | **GET** /api/v1/Project/Tasks/{page}/{count} | Get Project Tasks
[**tasksUpdateTask**](ProjectApi.md#tasksUpdateTask) | **PUT** /api/v1/projects/task/{number} | 


<a name="employeeWorkCreateEmployeeWork"></a>
# **employeeWorkCreateEmployeeWork**
> employeeWorkCreateEmployeeWork(employee, lines, opts)

Add Employee Work Journal Entry

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

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

<a name="phasesCreatePhase"></a>
# **phasesCreatePhase**
> phasesCreatePhase(model)

Create a Phase for the Project System

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var model = new DkPlusApi.DkCloudDataModelProjectPhaseModel(); // DkCloudDataModelProjectPhaseModel | Phase Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.phasesCreatePhase(model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**DkCloudDataModelProjectPhaseModel**](DkCloudDataModelProjectPhaseModel.md)| Phase Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="phasesGetPhase"></a>
# **phasesGetPhase**
> [DkCloudDataModelProjectPhaseModel] phasesGetPhase(_number, opts)

Get a phase

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | Phase Number

var opts = { 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.phasesGetPhase(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Phase Number | 
 **include** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelProjectPhaseModel]**](DkCloudDataModelProjectPhaseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="phasesGetPhases"></a>
# **phasesGetPhases**
> [DkCloudDataModelProjectPhaseModel] phasesGetPhases(page, count, opts)

Get Project Phases

Note: On every project there is a list og Phases for that project. if that list is empty all Phases can be used.

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Objects per Page

var opts = { 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified after
  'include': "include_example" // String | Properties to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.phasesGetPhases(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects per Page | 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **modifiedAfter** | **Date**| Modified after | [optional] 
 **include** | **String**| Properties to include | [optional] 

### Return type

[**[DkCloudDataModelProjectPhaseModel]**](DkCloudDataModelProjectPhaseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="phasesUpdatePhase"></a>
# **phasesUpdatePhase**
> phasesUpdatePhase(_number, model)

Update Project System Phase

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | Phase Number

var model = new DkPlusApi.DkCloudDataModelProjectPhaseModel(); // DkCloudDataModelProjectPhaseModel | Phase Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.phasesUpdatePhase(_number, model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Phase Number | 
 **model** | [**DkCloudDataModelProjectPhaseModel**](DkCloudDataModelProjectPhaseModel.md)| Phase Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectCreateProject"></a>
# **projectCreateProject**
> DkCloudDataModelProjectProjectModel projectCreateProject(model)

Method used to create a new Project(Job)

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var model = new DkPlusApi.DkCloudDataModelProjectProjectModel(); // DkCloudDataModelProjectProjectModel | Project Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectCreateProject(model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**DkCloudDataModelProjectProjectModel**](DkCloudDataModelProjectProjectModel.md)| Project Model | 

### Return type

[**DkCloudDataModelProjectProjectModel**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetModified"></a>
# **projectGetModified**
> [DkCloudDataModelProjectProjectModel] projectGetModified(modified, page, count)

Get modified Projects

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var modified = new Date("2013-10-20T19:20:30+01:00"); // Date | Modified

var page = 56; // Number | Page Number

var count = 56; // Number | Projects per Page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetModified(modified, page, count, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified** | **Date**| Modified | 
 **page** | **Number**| Page Number | 
 **count** | **Number**| Projects per Page | 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetPage"></a>
# **projectGetPage**
> [DkCloudDataModelProjectProjectModel] projectGetPage(page, count, opts)

Get Projects Paged

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Projects per Page

var opts = { 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'customer': "customer_example", // String | 
  'group': "group_example", // String | 
  'dim1': "dim1_example", // String | 
  'dim2': "dim2_example", // String | 
  'dim3': "dim3_example", // String | 
  'type': 56, // Number | 
  'status': 56, // Number | 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Projects per Page | 
 **modifiedBefore** | **Date**|  | [optional] 
 **modifiedAfter** | **Date**|  | [optional] 
 **customer** | **String**|  | [optional] 
 **group** | **String**|  | [optional] 
 **dim1** | **String**|  | [optional] 
 **dim2** | **String**|  | [optional] 
 **dim3** | **String**|  | [optional] 
 **type** | **Number**|  | [optional] 
 **status** | **Number**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetProject"></a>
# **projectGetProject**
> DkCloudDataModelProjectProjectModel projectGetProject(_number)

Get Project

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetProject(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 

### Return type

[**DkCloudDataModelProjectProjectModel**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetProjectInvoices"></a>
# **projectGetProjectInvoices**
> [DkCloudDataModelSalesInvoiceModel] projectGetProjectInvoices(_number)

Get Invoices for Project

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetProjectInvoices(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 

### Return type

[**[DkCloudDataModelSalesInvoiceModel]**](DkCloudDataModelSalesInvoiceModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetProjectRequests"></a>
# **projectGetProjectRequests**
> [DkCloudDataModelProjectRequest] projectGetProjectRequests(_number, page, size)

Get Project Requests

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | project number

var page = 56; // Number | 

var size = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetProjectRequests(_number, page, size, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| project number | 
 **page** | **Number**|  | 
 **size** | **Number**|  | 

### Return type

[**[DkCloudDataModelProjectRequest]**](DkCloudDataModelProjectRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectGetProjects"></a>
# **projectGetProjects**
> [DkCloudDataModelProjectProjectModel] projectGetProjects(opts)

Get all Projects

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var opts = { 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'customer': "customer_example", // String | 
  'group': "group_example", // String | 
  'dim1': "dim1_example", // String | 
  'dim2': "dim2_example", // String | 
  'dim3': "dim3_example", // String | 
  'type': 56, // Number | 
  'status': 56, // Number | 
  'max': 56, // Number | 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectGetProjects(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifiedBefore** | **Date**|  | [optional] 
 **modifiedAfter** | **Date**|  | [optional] 
 **customer** | **String**|  | [optional] 
 **group** | **String**|  | [optional] 
 **dim1** | **String**|  | [optional] 
 **dim2** | **String**|  | [optional] 
 **dim3** | **String**|  | [optional] 
 **type** | **Number**|  | [optional] 
 **status** | **Number**|  | [optional] 
 **max** | **Number**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelProjectProjectModel]**](DkCloudDataModelProjectProjectModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectRequestCreateProjectRequets"></a>
# **projectRequestCreateProjectRequets**
> [DkCloudDataModelProjectRequest] projectRequestCreateProjectRequets(request)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var request = new DkPlusApi.DkCloudDataModelProjectRequest(); // DkCloudDataModelProjectRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectRequestCreateProjectRequets(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DkCloudDataModelProjectRequest**](DkCloudDataModelProjectRequest.md)|  | 

### Return type

[**[DkCloudDataModelProjectRequest]**](DkCloudDataModelProjectRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectRequestDeleteProjectRequets"></a>
# **projectRequestDeleteProjectRequets**
> [DkCloudDataModelProjectRequest] projectRequestDeleteProjectRequets(id)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var id = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectRequestDeleteProjectRequets(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[DkCloudDataModelProjectRequest]**](DkCloudDataModelProjectRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectRequestGetProjectRequets"></a>
# **projectRequestGetProjectRequets**
> [DkCloudDataModelProjectRequest] projectRequestGetProjectRequets(page, size, opts)

Get Project Requests

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var page = 56; // Number | Page Number

var size = 56; // Number | Request Per Page

var opts = { 
  '_number': "_number_example", // String | Request Number
  'project': "project_example", // String | Project Number
  'parent': "parent_example", // String | Parent Request Number
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'customer': "customer_example", // String | Customer Number
  'dim1': "dim1_example", // String | Dim 1 Number
  'dim2': "dim2_example", // String | Dim 2 Number
  'dim3': "dim3_example", // String | Dim 3 Number
  'type': "type_example", // String | Request Type
  'status': "status_example", // String | Request Status
  'include': "include_example" // String | Properties to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectRequestGetProjectRequets(page, size, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **size** | **Number**| Request Per Page | 
 **_number** | **String**| Request Number | [optional] 
 **project** | **String**| Project Number | [optional] 
 **parent** | **String**| Parent Request Number | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **customer** | **String**| Customer Number | [optional] 
 **dim1** | **String**| Dim 1 Number | [optional] 
 **dim2** | **String**| Dim 2 Number | [optional] 
 **dim3** | **String**| Dim 3 Number | [optional] 
 **type** | **String**| Request Type | [optional] 
 **status** | **String**| Request Status | [optional] 
 **include** | **String**| Properties to include | [optional] 

### Return type

[**[DkCloudDataModelProjectRequest]**](DkCloudDataModelProjectRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectRequestUpdateProjectRequets"></a>
# **projectRequestUpdateProjectRequets**
> projectRequestUpdateProjectRequets(id, request)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var id = 789; // Number | 

var request = new DkPlusApi.DkCloudDataModelProjectRequest(); // DkCloudDataModelProjectRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.projectRequestUpdateProjectRequets(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **request** | [**DkCloudDataModelProjectRequest**](DkCloudDataModelProjectRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="projectTransactionGetProjectTransactionPage"></a>
# **projectTransactionGetProjectTransactionPage**
> [DkCloudDataModelGeneralLedgerTransaction] projectTransactionGetProjectTransactionPage(page, count, opts)

Get Project Transactions

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

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

<a name="tasksCreateTask"></a>
# **tasksCreateTask**
> tasksCreateTask(model)

Create a Task for the Project System

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var model = new DkPlusApi.DkCloudDataModelProjectTaskModel(); // DkCloudDataModelProjectTaskModel | Task Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksCreateTask(model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**DkCloudDataModelProjectTaskModel**](DkCloudDataModelProjectTaskModel.md)| Task Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tasksGetTask"></a>
# **tasksGetTask**
> [DkCloudDataModelProjectTaskModel] tasksGetTask(_number, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | 

var opts = { 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGetTask(_number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelProjectTaskModel]**](DkCloudDataModelProjectTaskModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tasksGetTasks"></a>
# **tasksGetTasks**
> [DkCloudDataModelProjectTaskModel] tasksGetTasks(page, count, opts)

Get Project Tasks

Note: On every project there is a list og Tasks for that project. if that list is empty all tasks can be used.

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Objects per Page

var opts = { 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified after
  'include': "include_example" // String | Properties to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGetTasks(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects per Page | 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **modifiedAfter** | **Date**| Modified after | [optional] 
 **include** | **String**| Properties to include | [optional] 

### Return type

[**[DkCloudDataModelProjectTaskModel]**](DkCloudDataModelProjectTaskModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="tasksUpdateTask"></a>
# **tasksUpdateTask**
> tasksUpdateTask(_number, model)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProjectApi();

var _number = "_number_example"; // String | 

var model = new DkPlusApi.DkCloudDataModelProjectTaskModel(); // DkCloudDataModelProjectTaskModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksUpdateTask(_number, model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **model** | [**DkCloudDataModelProjectTaskModel**](DkCloudDataModelProjectTaskModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

