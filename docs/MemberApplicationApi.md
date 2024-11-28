# DkPlusApi.MemberApplicationApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberApplicationGetApplicationAttachmentContent**](MemberApplicationApi.md#memberApplicationGetApplicationAttachmentContent) | **GET** /api/v1/Member/fund/{fund}/application/{application}/attachments/{id} | Get Application Attachment
[**memberApplicationGetApplicationAttachments**](MemberApplicationApi.md#memberApplicationGetApplicationAttachments) | **GET** /api/v1/Member/fund/{fund}/application/{id}/attachments | Get Attachment list for an Application
[**memberApplicationGetApplications**](MemberApplicationApi.md#memberApplicationGetApplications) | **GET** /api/v1/Member/{number}/application | Get Member Applications
[**memberApplicationPostApplication**](MemberApplicationApi.md#memberApplicationPostApplication) | **POST** /api/v1/member/{number}/application | Create a Member Application
[**memberApplicationUpdateApplicationStatus**](MemberApplicationApi.md#memberApplicationUpdateApplicationStatus) | **PUT** /api/v1/member/{number}/application/{id} | Update a Member Application
[**memberApplicationUploadFile**](MemberApplicationApi.md#memberApplicationUploadFile) | **POST** /api/v1/member/{number}/application/{id}/attachment | 


<a name="memberApplicationGetApplicationAttachmentContent"></a>
# **memberApplicationGetApplicationAttachmentContent**
> SystemWebMvcFileContentResult memberApplicationGetApplicationAttachmentContent(fund, application, id)

Get Application Attachment

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var fund = "fund_example"; // String | Fund Code

var application = 56; // Number | Application Id

var id = 56; // Number | Attachment Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberApplicationGetApplicationAttachmentContent(fund, application, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fund** | **String**| Fund Code | 
 **application** | **Number**| Application Id | 
 **id** | **Number**| Attachment Id | 

### Return type

[**SystemWebMvcFileContentResult**](SystemWebMvcFileContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberApplicationGetApplicationAttachments"></a>
# **memberApplicationGetApplicationAttachments**
> SystemIOStream memberApplicationGetApplicationAttachments(fund, id)

Get Attachment list for an Application

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var fund = "fund_example"; // String | Fund Code

var id = 56; // Number | Application Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberApplicationGetApplicationAttachments(fund, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fund** | **String**| Fund Code | 
 **id** | **Number**| Application Id | 

### Return type

[**SystemIOStream**](SystemIOStream.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberApplicationGetApplications"></a>
# **memberApplicationGetApplications**
> [DkCloudDataModelMembersApplication] memberApplicationGetApplications(_number)

Get Member Applications

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberApplicationGetApplications(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersApplication]**](DkCloudDataModelMembersApplication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberApplicationPostApplication"></a>
# **memberApplicationPostApplication**
> DkPlusAPIModelsMemberMemberApplicationCreated memberApplicationPostApplication(_number, obj)

Create a Member Application

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var _number = "_number_example"; // String | Member Number

var obj = new DkPlusApi.DkCloudDataModelMembersApplication(); // DkCloudDataModelMembersApplication | Application Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberApplicationPostApplication(_number, obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 
 **obj** | [**DkCloudDataModelMembersApplication**](DkCloudDataModelMembersApplication.md)| Application Model | 

### Return type

[**DkPlusAPIModelsMemberMemberApplicationCreated**](DkPlusAPIModelsMemberMemberApplicationCreated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberApplicationUpdateApplicationStatus"></a>
# **memberApplicationUpdateApplicationStatus**
> memberApplicationUpdateApplicationStatus(_number, id, status, fund)

Update a Member Application

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var _number = "_number_example"; // String | Member Number

var id = 56; // Number | Application Id

var status = "status_example"; // String | Application Status

var fund = "fund_example"; // String | Fund Code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.memberApplicationUpdateApplicationStatus(_number, id, status, fund, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 
 **id** | **Number**| Application Id | 
 **status** | **String**| Application Status | 
 **fund** | **String**| Fund Code | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberApplicationUploadFile"></a>
# **memberApplicationUploadFile**
> Object memberApplicationUploadFile(_number, id)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApplicationApi();

var _number = "_number_example"; // String | 

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberApplicationUploadFile(_number, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**|  | 
 **id** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

