# DkPlusApi.ProductApi

All URIs are relative to *https://api.dkplus.is*

Method | HTTP request | Description
------------- | ------------- | -------------
[**barcodeCreateBarCode**](ProductApi.md#barcodeCreateBarCode) | **POST** /api/v1/barcode/api/v1/barcode | Create a product barcode
[**barcodeGetBarcode**](ProductApi.md#barcodeGetBarcode) | **GET** /api/v1/barcode/{id} | Get a product from barcode
[**productCreateProduct**](ProductApi.md#productCreateProduct) | **POST** /api/v1/product | Create Product
[**productDeleteProduct**](ProductApi.md#productDeleteProduct) | **DELETE** /api/v1/product/{id} | Delete Product
[**productGetModified**](ProductApi.md#productGetModified) | **GET** /api/v1/Product/modified/{modified}/{page}/{count} | Get Modified Products
[**productGetProductAttachment**](ProductApi.md#productGetProductAttachment) | **GET** /api/v1/product/{itemcode}/attachment/{id} | Get Product Attachment
[**productGetProductBarCodes**](ProductApi.md#productGetProductBarCodes) | **GET** /api/v1/product/{id}/barcode | Get Product Barcodes
[**productGetProductBarcode**](ProductApi.md#productGetProductBarcode) | **GET** /api/v1/product/{id}/barcode/{barcode} | Get Barcode for Product
[**productGetProductById**](ProductApi.md#productGetProductById) | **GET** /api/v1/Product/{id} | Get product
[**productGetProductCount**](ProductApi.md#productGetProductCount) | **GET** /api/v1/Product/info/count | Get Product count based on criteria
[**productGetProductSearch**](ProductApi.md#productGetProductSearch) | **GET** /api/v1/Product/search/{value}/{max} | Search for Product
[**productGetProductTransactions**](ProductApi.md#productGetProductTransactions) | **GET** /api/v1/product/{id}/transaction/{page}/{count} | Get Product Transactions
[**productGetProducts**](ProductApi.md#productGetProducts) | **GET** /api/v1/Product | Get Products
[**productGetProductsPage**](ProductApi.md#productGetProductsPage) | **GET** /api/v1/Product/page/{page}/{count} | Get Products Paged
[**productGroupGet**](ProductApi.md#productGroupGet) | **GET** /api/v1/productgroup | Get Product Groups
[**productTransactionGetInventoryTransactionsPage**](ProductApi.md#productTransactionGetInventoryTransactionsPage) | **GET** /api/v1/product/transaction/{page}/{count} | 
[**productUpdateProduct**](ProductApi.md#productUpdateProduct) | **PUT** /api/v1/product/{itemcode} | Update Product
[**productUploadProductAttachment**](ProductApi.md#productUploadProductAttachment) | **POST** /api/v1/product/{itemcode}/attachment | Upload file as an attachment to product


<a name="barcodeCreateBarCode"></a>
# **barcodeCreateBarCode**
> barcodeCreateBarCode(model)

Create a product barcode

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var model = new DkPlusApi.DkPlusAPIModelsProductInventoryBarcode(); // DkPlusAPIModelsProductInventoryBarcode | barcode model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.barcodeCreateBarCode(model, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**DkPlusAPIModelsProductInventoryBarcode**](DkPlusAPIModelsProductInventoryBarcode.md)| barcode model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="barcodeGetBarcode"></a>
# **barcodeGetBarcode**
> DkCloudDataModelProductsProductModel barcodeGetBarcode(id)

Get a product from barcode

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Barcode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.barcodeGetBarcode(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Barcode | 

### Return type

[**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productCreateProduct"></a>
# **productCreateProduct**
> DkCloudDataModelProductsProductModel productCreateProduct(value)

Create Product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var value = new DkPlusApi.DkCloudDataModelProductsProductModel(); // DkCloudDataModelProductsProductModel | Product Create Model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productCreateProduct(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)| Product Create Model | 

### Return type

[**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productDeleteProduct"></a>
# **productDeleteProduct**
> productDeleteProduct(id, opts)

Delete Product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Item Code

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productDeleteProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Item Code | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetModified"></a>
# **productGetModified**
> [DkCloudDataModelProductsProductModel] productGetModified(modified, page, count, opts)

Get Modified Products

## Use Instead  api/v1/Product/Page' instead with ?modified=\"

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var modified = new Date("2013-10-20T19:20:30+01:00"); // Date | Modified

var page = 56; // Number | Page Number

var count = 56; // Number | Product per Page

var opts = { 
  'detailed': new Date("2013-10-20T19:20:30+01:00"), // Date | Detailed
  'inactive': true, // Boolean | Inactive
  'onweb': true, // Boolean | Show on web
  'group': "group_example", // String | Group
  'warehouse': "warehouse_example", // String | Warehouse
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetModified(modified, page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modified** | **Date**| Modified | 
 **page** | **Number**| Page Number | 
 **count** | **Number**| Product per Page | 
 **detailed** | **Date**| Detailed | [optional] 
 **inactive** | **Boolean**| Inactive | [optional] 
 **onweb** | **Boolean**| Show on web | [optional] 
 **group** | **String**| Group | [optional] 
 **warehouse** | **String**| Warehouse | [optional] 
 **include** | **String**|  | [optional] 

### Return type

[**[DkCloudDataModelProductsProductModel]**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductAttachment"></a>
# **productGetProductAttachment**
> Object productGetProductAttachment(itemcode, id, opts)

Get Product Attachment

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var itemcode = "itemcode_example"; // String | Item Code

var id = 56; // Number | Attachment Id

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductAttachment(itemcode, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemcode** | **String**| Item Code | 
 **id** | **Number**| Attachment Id | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductBarCodes"></a>
# **productGetProductBarCodes**
> [DkCloudDataModelProductsBarcodesModel] productGetProductBarCodes(id)

Get Product Barcodes

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Item Code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductBarCodes(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Item Code | 

### Return type

[**[DkCloudDataModelProductsBarcodesModel]**](DkCloudDataModelProductsBarcodesModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductBarcode"></a>
# **productGetProductBarcode**
> DkCloudDataModelProductsBarcodesModel productGetProductBarcode(id, barcode, opts)

Get Barcode for Product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Item Code

var barcode = "barcode_example"; // String | Barcode

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductBarcode(id, barcode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Item Code | 
 **barcode** | **String**| Barcode | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

[**DkCloudDataModelProductsBarcodesModel**](DkCloudDataModelProductsBarcodesModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductById"></a>
# **productGetProductById**
> DkCloudDataModelProductsProductModel productGetProductById(id, opts)

Get product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Item Code

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Item Code | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

[**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductCount"></a>
# **productGetProductCount**
> 'Number' productGetProductCount(opts)

Get Product count based on criteria

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var opts = { 
  'inactive': true, // Boolean | 
  'onweb': true, // Boolean | 
  'group': "group_example", // String | 
  'warehouse': "warehouse_example", // String | 
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inactive** | **Boolean**|  | [optional] 
 **onweb** | **Boolean**|  | [optional] 
 **group** | **String**|  | [optional] 
 **warehouse** | **String**|  | [optional] 
 **modified** | **Date**|  | [optional] 
 **modifiedBefore** | **Date**|  | [optional] 

### Return type

**'Number'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductSearch"></a>
# **productGetProductSearch**
> [DkCloudDataModelProductsProductModel] productGetProductSearch(value, max)

Search for Product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var value = "value_example"; // String | Search string

var max = 56; // Number | Maximum result


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductSearch(value, max, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Search string | 
 **max** | **Number**| Maximum result | 

### Return type

[**[DkCloudDataModelProductsProductModel]**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductTransactions"></a>
# **productGetProductTransactions**
> [DkCloudDataModelProductsTransactionsModel] productGetProductTransactions(id, page, count, opts)

Get Product Transactions

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var id = "id_example"; // String | Item Code

var page = 56; // Number | Page Number

var count = 56; // Number | Products per Page

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductTransactions(id, page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Item Code | 
 **page** | **Number**| Page Number | 
 **count** | **Number**| Products per Page | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

[**[DkCloudDataModelProductsTransactionsModel]**](DkCloudDataModelProductsTransactionsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProducts"></a>
# **productGetProducts**
> [DkCloudDataModelProductsProductModel] productGetProducts(opts)

Get Products

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var opts = { 
  'inactive': true, // Boolean | Inactive
  'onweb': true, // Boolean | Show on web
  'group': "group_example", // String | Group
  'warehouse': "warehouse_example", // String | Warehouse
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified after
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'include': "include_example" // String | Fields to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProducts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inactive** | **Boolean**| Inactive | [optional] 
 **onweb** | **Boolean**| Show on web | [optional] 
 **group** | **String**| Group | [optional] 
 **warehouse** | **String**| Warehouse | [optional] 
 **modified** | **Date**| Modified after | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **include** | **String**| Fields to include | [optional] 

### Return type

[**[DkCloudDataModelProductsProductModel]**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGetProductsPage"></a>
# **productGetProductsPage**
> [DkCloudDataModelProductsProductModel] productGetProductsPage(page, count, opts)

Get Products Paged

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var page = 56; // Number | Page Numer

var count = 56; // Number | Products per Page

var opts = { 
  'inactive': true, // Boolean | Inactive
  'onweb': true, // Boolean | Show on web
  'group': "group_example", // String | Group
  'warehouse': "warehouse_example", // String | Warehouse
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified after
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'deleted': true, // Boolean | Product Deleted
  'include': "include_example" // String | Fields to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetProductsPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Numer | 
 **count** | **Number**| Products per Page | 
 **inactive** | **Boolean**| Inactive | [optional] 
 **onweb** | **Boolean**| Show on web | [optional] 
 **group** | **String**| Group | [optional] 
 **warehouse** | **String**| Warehouse | [optional] 
 **modified** | **Date**| Modified after | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **deleted** | **Boolean**| Product Deleted | [optional] 
 **include** | **String**| Fields to include | [optional] 

### Return type

[**[DkCloudDataModelProductsProductModel]**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productGroupGet"></a>
# **productGroupGet**
> [DkCloudDataModelProductsProductGroupModel] productGroupGet()

Get Product Groups

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGroupGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DkCloudDataModelProductsProductGroupModel]**](DkCloudDataModelProductsProductGroupModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productTransactionGetInventoryTransactionsPage"></a>
# **productTransactionGetInventoryTransactionsPage**
> [DkCloudDataModelProductsTransactionsModel] productTransactionGetInventoryTransactionsPage(page, count, opts)



### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var page = 56; // Number | Page Number

var count = 56; // Number | Objects to return

var opts = { 
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified After
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Modified Before
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Created After
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Created Before
  'dim1': "dim1_example", // String | Dimmention
  'itemcode': "itemcode_example", // String | Item Code
  'warehouse': "warehouse_example", // String | Wharehouse
  'currency': "currency_example", // String | Currency Code
  'reference': "reference_example", // String | Reference
  'include': "include_example" // String | Fields to include
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productTransactionGetInventoryTransactionsPage(page, count, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Number | 
 **count** | **Number**| Objects to return | 
 **modifiedAfter** | **Date**| Modified After | [optional] 
 **modifiedBefore** | **Date**| Modified Before | [optional] 
 **createdAfter** | **Date**| Created After | [optional] 
 **createdBefore** | **Date**| Created Before | [optional] 
 **dim1** | **String**| Dimmention | [optional] 
 **itemcode** | **String**| Item Code | [optional] 
 **warehouse** | **String**| Wharehouse | [optional] 
 **currency** | **String**| Currency Code | [optional] 
 **reference** | **String**| Reference | [optional] 
 **include** | **String**| Fields to include | [optional] 

### Return type

[**[DkCloudDataModelProductsTransactionsModel]**](DkCloudDataModelProductsTransactionsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productUpdateProduct"></a>
# **productUpdateProduct**
> DkCloudDataModelProductsProductModel productUpdateProduct(itemcode, value, opts)

Update Product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var itemcode = "itemcode_example"; // String | Item Code

var value = new DkPlusApi.DkCloudDataModelProductsProductModel(); // DkCloudDataModelProductsProductModel | Product Update Model

var opts = { 
  'isBase64': true // Boolean | Is Base64 Encoded
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productUpdateProduct(itemcode, value, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemcode** | **String**| Item Code | 
 **value** | [**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)| Product Update Model | 
 **isBase64** | **Boolean**| Is Base64 Encoded | [optional] 

### Return type

[**DkCloudDataModelProductsProductModel**](DkCloudDataModelProductsProductModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="productUploadProductAttachment"></a>
# **productUploadProductAttachment**
> productUploadProductAttachment(itemcode, fileModel, opts)

Upload file as an attachment to product

### Example
```javascript
var DkPlusApi = require('dk_plus_api');

var apiInstance = new DkPlusApi.ProductApi();

var itemcode = "itemcode_example"; // String | Item Code

var fileModel = new DkPlusApi.DkPlusAPIModelsFile(); // DkPlusAPIModelsFile | Attachment Model

var opts = { 
  'isBase64': true // Boolean | Item Code is Base64
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productUploadProductAttachment(itemcode, fileModel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemcode** | **String**| Item Code | 
 **fileModel** | [**DkPlusAPIModelsFile**](DkPlusAPIModelsFile.md)| Attachment Model | 
 **isBase64** | **Boolean**| Item Code is Base64 | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

