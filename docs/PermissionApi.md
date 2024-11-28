# DkPlusApi.PermissionApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissionGet**](PermissionApi.md#permissionGet) | **GET** /api/v1/permission | Current User Permission


<a name="permissionGet"></a>
# **permissionGet**
> DkCloudDataModelPermissionModulePermission permissionGet()

Current User Permission

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.PermissionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permissionGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DkCloudDataModelPermissionModulePermission**](DkCloudDataModelPermissionModulePermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

