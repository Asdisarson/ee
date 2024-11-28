# DkPlusApi.QuoteApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCreateSalesOrder**](QuoteApi.md#quoteCreateSalesOrder) | **POST** /api/v1/sales/quote | Create Sales Quote
[**quoteGetHtml**](QuoteApi.md#quoteGetHtml) | **GET** /api/v1/sales/quote/{number}/html | Get Sales Quote as HTML
[**quoteGetPDF**](QuoteApi.md#quoteGetPDF) | **GET** /api/v1/sales/quote/{number}/pdf | Get Sales Quote as PDF
[**quoteGetSalesQuote**](QuoteApi.md#quoteGetSalesQuote) | **GET** /api/v1/sales/quote/{id} | Get Sales Quote
[**quoteSendEmail**](QuoteApi.md#quoteSendEmail) | **POST** /api/v1/sales/quote/{number}/email | Send Sales Quote to Email


<a name="quoteCreateSalesOrder"></a>
# **quoteCreateSalesOrder**
> DkCloudDataModelSalesQuoteHead quoteCreateSalesOrder(value)

Create Sales Quote

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.QuoteApi();

var value = new DkPlusApi.DkCloudDataModelSalesQuoteHead(); // DkCloudDataModelSalesQuoteHead | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCreateSalesOrder(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelSalesQuoteHead**](DkCloudDataModelSalesQuoteHead.md)|  | 

### Return type

[**DkCloudDataModelSalesQuoteHead**](DkCloudDataModelSalesQuoteHead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="quoteGetHtml"></a>
# **quoteGetHtml**
> Object quoteGetHtml(_number)

Get Sales Quote as HTML

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.QuoteApi();

var _number = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGetHtml(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="quoteGetPDF"></a>
# **quoteGetPDF**
> Object quoteGetPDF(_number)

Get Sales Quote as PDF

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.QuoteApi();

var _number = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGetPDF(_number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="quoteGetSalesQuote"></a>
# **quoteGetSalesQuote**
> DkCloudDataModelSalesQuoteHead quoteGetSalesQuote(id)

Get Sales Quote

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.QuoteApi();

var id = 56; // Number | Quote Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGetSalesQuote(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Quote Id | 

### Return type

[**DkCloudDataModelSalesQuoteHead**](DkCloudDataModelSalesQuoteHead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="quoteSendEmail"></a>
# **quoteSendEmail**
> quoteSendEmail(_number, message)

Send Sales Quote to Email

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.QuoteApi();

var _number = 56; // Number | 

var message = new DkPlusApi.DkPlusMailModelMailInfo(); // DkPlusMailModelMailInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.quoteSendEmail(_number, message, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**|  | 
 **message** | [**DkPlusMailModelMailInfo**](DkPlusMailModelMailInfo.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

