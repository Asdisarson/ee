# DkPlusApi.PayrollApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollGetPayrollPayslip**](PayrollApi.md#payrollGetPayrollPayslip) | **GET** /api/v1/payroll/payslip/{page}/{count} | 


<a name="payrollGetPayrollPayslip"></a>
# **payrollGetPayrollPayslip**
> [DkCloudDataModelPayrollPayslip] payrollGetPayrollPayslip(page, count, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PayrollApi();

var page = 56; // Number | 

var count = 56; // Number | 

var opts = { 
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'year': 56, // Number | 
  'payDayAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'payDayBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dim1': "dim1_example", // String | 
  'dim2': "dim2_example", // String | 
  'dim3': "dim3_example", // String | 
  'employee': "employee_example", // String | 
  'recordid': 56, // Number | 
  'include': "include_example", // String | 
  'payRunNumber': 56, // Number | 
  'paySlipNumber': 56, // Number | 
  'sort': "sort_example", // String | 
  'sorttype': "sorttype_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.payrollGetPayrollPayslip(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | 
 **count** | **Number**|  | 
 **createdAfter** | **Date**|  | [optional] 
 **createdBefore** | **Date**|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **modifiedAfter** | **Date**|  | [optional] 
 **modifiedBefore** | **Date**|  | [optional] 
 **year** | **Number**|  | [optional] 
 **payDayAfter** | **Date**|  | [optional] 
 **payDayBefore** | **Date**|  | [optional] 
 **dim1** | **String**|  | [optional] 
 **dim2** | **String**|  | [optional] 
 **dim3** | **String**|  | [optional] 
 **employee** | **String**|  | [optional] 
 **recordid** | **Number**|  | [optional] 
 **include** | **String**|  | [optional] 
 **payRunNumber** | **Number**|  | [optional] 
 **paySlipNumber** | **Number**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **sorttype** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelPayrollPayslip]**](DkCloudDataModelPayrollPayslip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

