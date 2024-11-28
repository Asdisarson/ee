# DkPlusApi.MyPagesApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**myPagesCreateInvite**](MyPagesApi.md#myPagesCreateInvite) | **POST** /api/v1/mypages/invites | Create Invite
[**myPagesGetInvitesForCustomer**](MyPagesApi.md#myPagesGetInvitesForCustomer) | **GET** /api/v1/mypages/invites | Get Invites
[**myPagesRemoveInvite**](MyPagesApi.md#myPagesRemoveInvite) | **DELETE** /api/v1/mypages/invites/{id} | Remove Invite


<a name="myPagesCreateInvite"></a>
# **myPagesCreateInvite**
> DkCloudDataModelInviteInviteModel myPagesCreateInvite(obj)

Create Invite

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MyPagesApi();

var obj = new DkPlusApi.DkPlusAPIModelsMyPageInviteCreate(); // DkPlusAPIModelsMyPageInviteCreate | Invite Create Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.myPagesCreateInvite(obj, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **obj** | [**DkPlusAPIModelsMyPageInviteCreate**](DkPlusAPIModelsMyPageInviteCreate.md)| Invite Create Model | 

### Return type

[**DkCloudDataModelInviteInviteModel**](DkCloudDataModelInviteInviteModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="myPagesGetInvitesForCustomer"></a>
# **myPagesGetInvitesForCustomer**
> DkPlusAPIModelsMyPageInvite myPagesGetInvitesForCustomer(customer)

Get Invites

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MyPagesApi();

var customer = "customer_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.myPagesGetInvitesForCustomer(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**|  | 

### Return type

[**DkPlusAPIModelsMyPageInvite**](DkPlusAPIModelsMyPageInvite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="myPagesRemoveInvite"></a>
# **myPagesRemoveInvite**
> myPagesRemoveInvite(id, opts)

Remove Invite

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.MyPagesApi();

var id = "id_example"; // String | Invite Id

var opts = { 
  'permanent': true // Boolean | Permanent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.myPagesRemoveInvite(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Invite Id | 
 **permanent** | **Boolean**| Permanent | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

