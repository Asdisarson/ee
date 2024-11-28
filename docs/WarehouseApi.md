# DkPlusApi.WarehouseApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**warehouseGetProductWarehouses**](WarehouseApi.md#warehouseGetProductWarehouses) | **GET** /api/v1/productwarehouse | Get all product warehouses


<a name="warehouseGetProductWarehouses"></a>
# **warehouseGetProductWarehouses**
> [DkCloudDataModelProductsWarehouseModel] warehouseGetProductWarehouses()

Get all product warehouses

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.WarehouseApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warehouseGetProductWarehouses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelProductsWarehouseModel]**](DkCloudDataModelProductsWarehouseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

