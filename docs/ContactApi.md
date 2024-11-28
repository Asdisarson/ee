# DkPlusApi.ContactApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreateContact**](ContactApi.md#contactCreateContact) | **POST** /api/v1/Customer/{customer}/Contact | Create a contact
[**contactDelete**](ContactApi.md#contactDelete) | **DELETE** /api/v1/Customer/{customer}/Contact/{contactId} | Delete Contact
[**contactGetContact**](ContactApi.md#contactGetContact) | **GET** /api/v1/Customer/{customer}/Contact/{contactId} | Get contact assigned to a customer
[**contactGetContacts**](ContactApi.md#contactGetContacts) | **GET** /api/v1/Customer/{customer}/Contact | Get contacts assigned to a customer
[**contactPut**](ContactApi.md#contactPut) | **PUT** /api/v1/Customer/{customer}/Contact/{contactId} | Update Contact


<a name="contactCreateContact"></a>
# **contactCreateContact**
> contactCreateContact(customer, value)

Create a contact

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ContactApi();

var customer = "customer_example"; // String | Customer Number

var value = new DkPlusApi.DkCloudDataModelCustomersContactModel(); // DkCloudDataModelCustomersContactModel | Contact Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactCreateContact(customer, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 
 **value** | [**DkCloudDataModelCustomersContactModel**](DkCloudDataModelCustomersContactModel.md)| Contact Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="contactDelete"></a>
# **contactDelete**
> contactDelete(customer, contactId)

Delete Contact

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ContactApi();

var customer = "customer_example"; // String | Customer Number

var contactId = "contactId_example"; // String | Contact Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactDelete(customer, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 
 **contactId** | **String**| Contact Number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactGetContact"></a>
# **contactGetContact**
> DkCloudDataModelCustomersContactModel contactGetContact(customer, contactId)

Get contact assigned to a customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ContactApi();

var customer = "customer_example"; // String | Customer Number

var contactId = "contactId_example"; // String | Contact Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactGetContact(customer, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 
 **contactId** | **String**| Contact Number | 

### Return type

[**DkCloudDataModelCustomersContactModel**](DkCloudDataModelCustomersContactModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contactGetContacts"></a>
# **contactGetContacts**
> [DkCloudDataModelCustomersContactModel] contactGetContacts(customer)

Get contacts assigned to a customer

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ContactApi();

var customer = "customer_example"; // String | Customer Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactGetContacts(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer Number | 

### Return type

[**[DkCloudDataModelCustomersContactModel]**](DkCloudDataModelCustomersContactModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contactPut"></a>
# **contactPut**
> contactPut(customer, contactId, value)

Update Contact

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ContactApi();

var customer = "customer_example"; // String | Customer number

var contactId = "contactId_example"; // String | Cintact Number

var value = new DkPlusApi.DkCloudDataModelCustomersContactModel(); // DkCloudDataModelCustomersContactModel | Contact Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactPut(customer, contactId, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **String**| Customer number | 
 **contactId** | **String**| Cintact Number | 
 **value** | [**DkCloudDataModelCustomersContactModel**](DkCloudDataModelCustomersContactModel.md)| Contact Model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

