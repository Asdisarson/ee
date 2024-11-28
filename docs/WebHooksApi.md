# DkPlusApi.WebHooksApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webHooksCreateWebHookTest**](WebHooksApi.md#webHooksCreateWebHookTest) | **POST** /api/v1/admin/webhook/action/test | Do a webhook test by posting to the supplied endpoint
[**webHooksCreateWebhook**](WebHooksApi.md#webHooksCreateWebhook) | **POST** /api/v1/admin/webhook | Create a hook with defined options
[**webHooksDeleteWebHook**](WebHooksApi.md#webHooksDeleteWebHook) | **DELETE** /api/v1/admin/webhook/{id} | 
[**webHooksGetHookById**](WebHooksApi.md#webHooksGetHookById) | **GET** /api/v1/admin/webhook/{id} | Get WebHook by Id
[**webHooksGetWebHooks**](WebHooksApi.md#webHooksGetWebHooks) | **GET** /api/v1/admin/webhook | Get Webhooks for the company
[**webHooksUpdateWebHook**](WebHooksApi.md#webHooksUpdateWebHook) | **PUT** /api/v1/admin/webhook/{id} | Update webhook settings


<a name="webHooksCreateWebHookTest"></a>
# **webHooksCreateWebHookTest**
> webHooksCreateWebHookTest(value)

Do a webhook test by posting to the supplied endpoint

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var value = new DkPlusApi.DkCloudDataModelCompanyWebHookSubscription(); // DkCloudDataModelCompanyWebHookSubscription | Subscription Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webHooksCreateWebHookTest(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelCompanyWebHookSubscription**](DkCloudDataModelCompanyWebHookSubscription.md)| Subscription Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="webHooksCreateWebhook"></a>
# **webHooksCreateWebhook**
> DkCloudDataModelCompanyWebHookSubscription webHooksCreateWebhook(value)

Create a hook with defined options

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var value = new DkPlusApi.DkCloudDataModelCompanyWebHookSubscription(); // DkCloudDataModelCompanyWebHookSubscription | Subscription Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webHooksCreateWebhook(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelCompanyWebHookSubscription**](DkCloudDataModelCompanyWebHookSubscription.md)| Subscription Model | 

### Return type

[**DkCloudDataModelCompanyWebHookSubscription**](DkCloudDataModelCompanyWebHookSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="webHooksDeleteWebHook"></a>
# **webHooksDeleteWebHook**
> webHooksDeleteWebHook(id)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webHooksDeleteWebHook(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="webHooksGetHookById"></a>
# **webHooksGetHookById**
> DkCloudDataModelCompanyWebHookSubscription webHooksGetHookById(id)

Get WebHook by Id

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var id = "id_example"; // String | Subscription Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webHooksGetHookById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Subscription Id | 

### Return type

[**DkCloudDataModelCompanyWebHookSubscription**](DkCloudDataModelCompanyWebHookSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="webHooksGetWebHooks"></a>
# **webHooksGetWebHooks**
> webHooksGetWebHooks()

Get Webhooks for the company

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webHooksGetWebHooks(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="webHooksUpdateWebHook"></a>
# **webHooksUpdateWebHook**
> webHooksUpdateWebHook(id, value)

Update webhook settings

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WebHooksApi();

var id = "id_example"; // String | 

var value = new DkPlusApi.DkCloudDataModelCompanyWebHookSubscription(); // DkCloudDataModelCompanyWebHookSubscription | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webHooksUpdateWebHook(id, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **value** | [**DkCloudDataModelCompanyWebHookSubscription**](DkCloudDataModelCompanyWebHookSubscription.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

