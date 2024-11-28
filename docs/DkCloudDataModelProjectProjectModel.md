# DkPlusApi.DkCloudDataModelProjectProjectModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modified** | **Date** |  | [optional] 
**_number** | **String** |  | 
**name** | **String** |  | [optional] 
**group** | **String** |  | [optional] 
**masterJobNumber** | **String** |  | [optional] 
**quotationNumber** | **Number** |  | [optional] 
**customerToBill** | **String** |  | [optional] 
**customerNameToBill** | **String** |  | [optional] 
**customerToRecieve** | **String** |  | [optional] 
**founder** | **String** |  | [optional] 
**owner** | **String** |  | [optional] 
**supervisor** | **String** |  | [optional] 
**worker** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**dim1Required** | **Boolean** |  | [optional] 
**dim2Required** | **Boolean** |  | [optional] 
**dim3Required** | **Boolean** |  | [optional] 
**foundingDate** | **Date** |  | [optional] 
**estimatedBeginingDate** | **Date** |  | [optional] 
**estimatedFinishDate** | **Date** |  | [optional] 
**actualBeginingDate** | **Date** |  | [optional] 
**actualFinishDate** | **Date** |  | [optional] 
**optimistDate** | **Date** |  | [optional] 
**pessimistDate** | **Date** |  | [optional] 
**jobType** | **String** |  | [optional] 
**jobStatus** | **String** |  | [optional] 
**jobBillingMode** | **String** |  | [optional] 
**phaseId** | **String** |  | [optional] 
**phaseRequired** | **Boolean** |  | [optional] 
**taskId** | **String** |  | [optional] 
**taskRequired** | **Boolean** |  | [optional] 
**foreignName** | **String** |  | [optional] 
**jobContactName** | **String** |  | [optional] 
**quotationAmount** | **Number** |  | [optional] 
**serialnumber** | **String** |  | [optional] 
**quotationAmountWithVAT** | **Boolean** |  | [optional] 
**ledgerCode** | **String** |  | [optional] 
**discountType** | **String** |  | [optional] 
**jobDiscountPercent** | **Number** |  | [optional] 
**discountOfTime** | **Boolean** |  | [optional] 
**discountOfDriveTime** | **Boolean** |  | [optional] 
**discountOfCost** | **Boolean** |  | [optional] 
**foreignPriceForWork** | **Number** |  | [optional] 
**skipTaxOnInvoice** | **Boolean** |  | [optional] 
**quotationCurrencyCode** | **String** |  | [optional] 
**quotationWorkingHours** | **Number** |  | [optional] 
**quotationWorkingAmount** | **Number** |  | [optional] 
**quotationCostAmount** | **Number** |  | [optional] 
**quotationLicenceAmount** | **Number** |  | [optional] 
**linkedPhases** | [**[DkCloudDataModelProjectProjectPhaseLinkModel]**](DkCloudDataModelProjectProjectPhaseLinkModel.md) |  | [optional] 
**linkedTasks** | [**[DkCloudDataModelProjectProjectTaskLinkModel]**](DkCloudDataModelProjectProjectTaskLinkModel.md) |  | [optional] 


<a name="JobTypeEnum"></a>
## Enum: JobTypeEnum


* `cbTimeJob` (value: `"_cbTimeJob"`)

* `cbServiceJob` (value: `"_cbServiceJob"`)

* `cbQuotationJob` (value: `"_cbQuotationJob"`)

* `cbInHouseJob` (value: `"_cbInHouseJob"`)




<a name="JobStatusEnum"></a>
## Enum: JobStatusEnum


* `notStarted` (value: `"NotStarted"`)

* `inProgress` (value: `"InProgress"`)

* `inWaiting` (value: `"InWaiting"`)

* `finished` (value: `"Finished"`)

* `ready` (value: `"Ready"`)




<a name="JobBillingModeEnum"></a>
## Enum: JobBillingModeEnum


* `monthly` (value: `"Monthly"`)

* `finished` (value: `"Finished"`)

* `irregulary` (value: `"Irregulary"`)

* `bill` (value: `"Bill"`)

* `warranty` (value: `"Warranty"`)




<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `customerDiscount` (value: `"CustomerDiscount"`)

* `jobDiscount` (value: `"JobDiscount"`)

* `noDiscount` (value: `"NoDiscount"`)




