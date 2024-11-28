# DkPlusApi.MemberApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberCreateMember**](MemberApi.md#memberCreateMember) | **POST** /api/v1/member | Create a Member
[**memberCreateMemberFee**](MemberApi.md#memberCreateMemberFee) | **POST** /api/v1/Member/{number}/fee | Use this method to create a member fee
[**memberGet**](MemberApi.md#memberGet) | **GET** /api/v1/Member/{page}/{size} | Get Memebers
[**memberGetByNumber**](MemberApi.md#memberGetByNumber) | **GET** /api/v1/Member/{number} | Get Member
[**memberGetCareer**](MemberApi.md#memberGetCareer) | **GET** /api/v1/Member/{number}/Career | Get Member Career
[**memberGetEducation**](MemberApi.md#memberGetEducation) | **GET** /api/v1/Member/{number}/education | Get Member Education
[**memberGetFund**](MemberApi.md#memberGetFund) | **GET** /api/v1/Member/{number}/fund | Get Member Funds
[**memberGetMembershipData**](MemberApi.md#memberGetMembershipData) | **GET** /api/v1/Member/{number}/membership | Get Membership Company assigned to Member
[**memberGetResume**](MemberApi.md#memberGetResume) | **GET** /api/v1/Member/{number}/Resume | Get Member Resume
[**memberGetSubGroup**](MemberApi.md#memberGetSubGroup) | **GET** /api/v1/Member/{number}/subgroup | Get Member Sub Groups
[**memberUpdateMember**](MemberApi.md#memberUpdateMember) | **PUT** /api/v1/member/{number} | Update Member


<a name="memberCreateMember"></a>
# **memberCreateMember**
> DkCloudDataModelMembersMember memberCreateMember(obj)

Create a Member

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var obj = new DkPlusApi.DkCloudDataModelMembersMember(); // DkCloudDataModelMembersMember | Member Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberCreateMember(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**DkCloudDataModelMembersMember**](DkCloudDataModelMembersMember.md)| Member Model | 

### Return type

[**DkCloudDataModelMembersMember**](DkCloudDataModelMembersMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberCreateMemberFee"></a>
# **memberCreateMemberFee**
> memberCreateMemberFee(_number, fee)

Use this method to create a member fee

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number

var fee = new DkPlusApi.DkCloudDataModelMembersFee(); // DkCloudDataModelMembersFee | Fee Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.memberCreateMemberFee(_number, fee, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 
 **fee** | [**DkCloudDataModelMembersFee**](DkCloudDataModelMembersFee.md)| Fee Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGet"></a>
# **memberGet**
> [DkCloudDataModelMembersMember] memberGet(page, size, opts)

Get Memebers

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var page = 56; // Number | Page Number

var size = 56; // Number | Members per Page

var opts = { 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'course': "course_example", // String | Cource Code
  'blocked': true // Boolean | Blocked
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGet(page, size, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **size** | **Number**| Members per Page | 
 **modified** | **Date**| Modified After | [optional] 
 **course** | **String**| Cource Code | [optional] 
 **blocked** | **Boolean**| Blocked | [optional] 

### Return type

[**[DkCloudDataModelMembersMember]**](DkCloudDataModelMembersMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetByNumber"></a>
# **memberGetByNumber**
> DkCloudDataModelMembersMember memberGetByNumber(_number)

Get Member

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetByNumber(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**DkCloudDataModelMembersMember**](DkCloudDataModelMembersMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetCareer"></a>
# **memberGetCareer**
> [DkCloudDataModelMembersCareer] memberGetCareer(_number)

Get Member Career

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetCareer(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersCareer]**](DkCloudDataModelMembersCareer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetEducation"></a>
# **memberGetEducation**
> [DkCloudDataModelMembersEducation] memberGetEducation(_number)

Get Member Education

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetEducation(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersEducation]**](DkCloudDataModelMembersEducation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetFund"></a>
# **memberGetFund**
> DkCloudDataModelMembersMemberFund memberGetFund(_number)

Get Member Funds

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetFund(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**DkCloudDataModelMembersMemberFund**](DkCloudDataModelMembersMemberFund.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetMembershipData"></a>
# **memberGetMembershipData**
> [DkCloudDataModelMembersMemberShipCompany] memberGetMembershipData(_number)

Get Membership Company assigned to Member

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetMembershipData(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersMemberShipCompany]**](DkCloudDataModelMembersMemberShipCompany.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetResume"></a>
# **memberGetResume**
> [DkCloudDataModelMembersResume] memberGetResume(_number)

Get Member Resume

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetResume(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersResume]**](DkCloudDataModelMembersResume.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberGetSubGroup"></a>
# **memberGetSubGroup**
> [DkCloudDataModelMembersMemberSubGroup] memberGetSubGroup(_number)

Get Member Sub Groups

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberGetSubGroup(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 

### Return type

[**[DkCloudDataModelMembersMemberSubGroup]**](DkCloudDataModelMembersMemberSubGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="memberUpdateMember"></a>
# **memberUpdateMember**
> DkCloudDataModelMembersMember memberUpdateMember(_number, obj)

Update Member

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MemberApi();

var _number = "_number_example"; // String | Member Number

var obj = new DkPlusApi.DkCloudDataModelMembersMember(); // DkCloudDataModelMembersMember | Member Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberUpdateMember(_number, obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **String**| Member Number | 
 **obj** | [**DkCloudDataModelMembersMember**](DkCloudDataModelMembersMember.md)| Member Model | 

### Return type

[**DkCloudDataModelMembersMember**](DkCloudDataModelMembersMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

