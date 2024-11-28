# DkPlusApi.DkCloudDataModelSalesSalesOrderModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** |  | [optional] 
**customer** | [**DkCloudDataModelCustomersCustomerModel**](DkCloudDataModelCustomersCustomerModel.md) |  | 
**cContact** | **String** |  | [optional] 
**ID** | **Number** |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**customerOrderDate** | **Date** |  | [optional] 
**customerOrderNumber** | **String** |  | [optional] 
**totalAmount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**reference** | **String** |  | [optional] 
**settledType** | **Number** |  | [optional] 
**settledAmount** | **Number** |  | [optional] 
**salePerson** | **String** |  | [optional] 
**text1** | **String** |  | [optional] 
**text2** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**origin** | **Number** |  | [optional] 
**paymentTerm** | **String** |  | [optional] 
**claimStatus** | **Number** |  | [optional] 
**exchange** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**deliveryStatus** | **String** |  | [optional] 
**deliverTo** | [**DkCloudDataModelCustomersItemReciverModel**](DkCloudDataModelCustomersItemReciverModel.md) |  | [optional] 
**lines** | [**[DkCloudDataModelSalesSalesOrderLineModel]**](DkCloudDataModelSalesSalesOrderLineModel.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `inProcess` (value: `"InProcess"`)

* `sent` (value: `"Sent"`)

* `partHandled` (value: `"PartHandled"`)

* `handled` (value: `"Handled"`)

* `onHold` (value: `"OnHold"`)

* `canceled` (value: `"Canceled"`)




<a name="DeliveryStatusEnum"></a>
## Enum: DeliveryStatusEnum


* `inProcess` (value: `"InProcess"`)

* `ready` (value: `"Ready"`)

* `hurry` (value: `"Hurry"`)

* `wait` (value: `"Wait"`)

* `request` (value: `"Request"`)




