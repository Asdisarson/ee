# DkPlusApi.VLinkDkSoftwareDkSOAPTOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordCreated** | **Date** |  | [optional] 
**recordModified** | **Date** |  | [optional] 
**recordID** | **Number** |  | [optional] 
**orderNumber** | **Number** |  | [optional] 
**customerNumber** | **String** |  | [optional] 
**customer** | [**VLinkDkSoftwareDkSOAPTCustomer**](VLinkDkSoftwareDkSOAPTCustomer.md) |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**salePerson** | **String** |  | [optional] 
**totalAmount** | **Number** |  | [optional] 
**itemReceiver** | [**VLinkDkSoftwareDkSOAPTItemReceiver**](VLinkDkSoftwareDkSOAPTItemReceiver.md) |  | [optional] 
**contact** | [**VLinkDkSoftwareDkSOAPTContact**](VLinkDkSoftwareDkSOAPTContact.md) |  | [optional] 
**lines** | [**[VLinkDkSoftwareDkSOAPTOrderLine]**](VLinkDkSoftwareDkSOAPTOrderLine.md) |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**customerOrderNo** | **String** |  | [optional] 
**currencyCode** | **String** |  | [optional] 
**exchange** | **Number** |  | [optional] 
**text1** | **String** |  | [optional] 
**text2** | **String** |  | [optional] 
**goodsmarking** | **String** |  | [optional] 
**customerOrderDate** | **Date** |  | [optional] 
**requestedDeliveryDate** | **Date** |  | [optional] 
**options** | [**VLinkDkSoftwareDkSOAPTOrderOptions**](VLinkDkSoftwareDkSOAPTOrderOptions.md) |  | [optional] 
**status** | **String** |  | [optional] 
**deliveryStatus** | **String** |  | [optional] 
**headOriginType** | **String** |  | [optional] 
**origin** | **String** |  | [optional] 
**confirmedDeliveryDate** | **Date** |  | [optional] 
**finalDeliveryDate** | **Date** |  | [optional] 
**orgSalesOrderDate** | **Date** |  | [optional] 
**extraProperties** | [**[VLinkDkSoftwareDkSOAPTExtraProperty]**](VLinkDkSoftwareDkSOAPTExtraProperty.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `cbSOInProcess` (value: `"_cbSOInProcess"`)

* `cbSOSent` (value: `"_cbSOSent"`)

* `cbSOPartHandled` (value: `"_cbSOPartHandled"`)

* `cbSOHandled` (value: `"_cbSOHandled"`)

* `cbSOOnHold` (value: `"_cbSOOnHold"`)

* `cbSOCanceled` (value: `"_cbSOCanceled"`)




<a name="DeliveryStatusEnum"></a>
## Enum: DeliveryStatusEnum


* `cbDelInProcess` (value: `"_cbDelInProcess"`)

* `cbDelReady` (value: `"_cbDelReady"`)

* `cbDelHurry` (value: `"_cbDelHurry"`)

* `cbDelWait` (value: `"_cbDelWait"`)

* `cbDelRequest` (value: `"_cbDelRequest"`)




<a name="HeadOriginTypeEnum"></a>
## Enum: HeadOriginTypeEnum


* `cbSOHeadOriginARCustomer` (value: `"_cbSOHeadOriginARCustomer"`)

* `cbSOHeadOriginCRMProspect` (value: `"_cbSOHeadOriginCRMProspect"`)

* `cbSOHeadOriginRoomer` (value: `"_cbSOHeadOriginRoomer"`)

* `cbSOHeadOriginDkHotel` (value: `"_cbSOHeadOriginDkHotel"`)

* `cbSOHeadOriginCODCustomer` (value: `"_cbSOHeadOriginCODCustomer"`)

* `cbSOHeadOriginDkOne` (value: `"_cbSOHeadOriginDkOne"`)

* `cbSOHeadOriginGoDo` (value: `"_cbSOHeadOriginGoDo"`)




<a name="OriginEnum"></a>
## Enum: OriginEnum


* `cbOriginSalesOrder` (value: `"_cbOriginSalesOrder"`)

* `cbOriginBackOrder` (value: `"_cbOriginBackOrder"`)

* `cbOriginQuotation` (value: `"_cbOriginQuotation"`)

* `cbOriginRecurringOrder` (value: `"_cbOriginRecurringOrder"`)

* `cbOriginJob` (value: `"_cbOriginJob"`)

* `cbOrigindkPosInvoice` (value: `"_cbOrigindkPosInvoice"`)

* `cbOrigindkWebService` (value: `"_cbOrigindkWebService"`)

* `cbOriginSubscription` (value: `"_cbOriginSubscription"`)

* `cbOriginHandComputers` (value: `"_cbOriginHandComputers"`)

* `cbOriginCabas` (value: `"_cbOriginCabas"`)

* `cbOriginBookingSystem` (value: `"_cbOriginBookingSystem"`)

* `cbOriginDistribution` (value: `"_cbOriginDistribution"`)

* `cbOriginMekoCat` (value: `"_cbOriginMekoCat"`)

* `cbOriginUndispatchedSalesOrder` (value: `"_cbOriginUndispatchedSalesOrder"`)

* `cbOriginPrescription` (value: `"_cbOriginPrescription"`)

* `cbInvoiceOriginUBLOrder` (value: `"_cbInvoiceOriginUBLOrder"`)

* `cbOriginFasteignagjold` (value: `"_cbOriginFasteignagjold"`)

* `cbOriginProjectQuotation` (value: `"_cbOriginProjectQuotation"`)




