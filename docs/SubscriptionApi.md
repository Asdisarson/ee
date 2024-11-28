# DkPlusApi.SubscriptionApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionCreateSubscription**](SubscriptionApi.md#subscriptionCreateSubscription) | **POST** /api/v1/sales/subscription | Create a reoccurring invoice(Subscription)
[**subscriptionGetSubscription**](SubscriptionApi.md#subscriptionGetSubscription) | **GET** /api/v1/sales/subscription | Get Subscirption Orders


<a name="subscriptionCreateSubscription"></a>
# **subscriptionCreateSubscription**
> DkPlusAPIModelsSubscriptionSubscriptionHead subscriptionCreateSubscription(subscription, opts)

Create a reoccurring invoice(Subscription)

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SubscriptionApi();

var subscription = new DkPlusApi.DkPlusAPIModelsSubscriptionSubscriptionHead(); // DkPlusAPIModelsSubscriptionSubscriptionHead | Model

var opts = { 
  'source': "source_example" // String | Price source
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionCreateSubscription(subscription, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | [**DkPlusAPIModelsSubscriptionSubscriptionHead**](DkPlusAPIModelsSubscriptionSubscriptionHead.md)| Model | 
 **source** | **String**| Price source | [optional] 

### Return type

[**DkPlusAPIModelsSubscriptionSubscriptionHead**](DkPlusAPIModelsSubscriptionSubscriptionHead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="subscriptionGetSubscription"></a>
# **subscriptionGetSubscription**
> [DkPlusAPIModelsSubscriptionSubscriptionHead] subscriptionGetSubscription(opts)

Get Subscirption Orders

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.SubscriptionApi();

var opts = { 
  'id': 56, // Number | Record id
  'customer': "customer_example", // String | Customer Number
  'itemcode': "itemcode_example", // String | Item Code
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'group': "group_example", // String | Subscription Group
  '_date': new Date("2013-10-20T19:20:30+01:00"), // Date | Subscription Date
  'includelines': true, // Boolean | Include Lines
  'properties': "properties_example", // String | Extra Properties
  'lineproperties': "lineproperties_example" // String | Line Extra Properties
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionGetSubscription(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record id | [optional] 
 **customer** | **String**| Customer Number | [optional] 
 **itemcode** | **String**| Item Code | [optional] 
 **modified** | **Date**| Modified After | [optional] 
 **group** | **String**| Subscription Group | [optional] 
 **_date** | **Date**| Subscription Date | [optional] 
 **includelines** | **Boolean**| Include Lines | [optional] 
 **properties** | **String**| Extra Properties | [optional] 
 **lineproperties** | **String**| Line Extra Properties | [optional] 

### Return type

[**[DkPlusAPIModelsSubscriptionSubscriptionHead]**](DkPlusAPIModelsSubscriptionSubscriptionHead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

