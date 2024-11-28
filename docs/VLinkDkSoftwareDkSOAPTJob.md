# DkPlusApi.VLinkDkSoftwareDkSOAPTJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordID** | **Number** |  | [optional] 
**_number** | **String** |  | [optional] 
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
**modified** | **Date** |  | [optional] 
**jobDescription** | **String** |  | [optional] 
**linkedPhases** | [**[VLinkDkSoftwareDkSOAPTJobPhaseLink]**](VLinkDkSoftwareDkSOAPTJobPhaseLink.md) |  | [optional] 
**linkedTasks** | [**[VLinkDkSoftwareDkSOAPTJobTaskLink]**](VLinkDkSoftwareDkSOAPTJobTaskLink.md) |  | [optional] 


<a name="JobTypeEnum"></a>
## Enum: JobTypeEnum


* `cbTimeJob` (value: `"_cbTimeJob"`)

* `cbServiceJob` (value: `"_cbServiceJob"`)

* `cbQuotationJob` (value: `"_cbQuotationJob"`)

* `cbInHouseJob` (value: `"_cbInHouseJob"`)




<a name="JobStatusEnum"></a>
## Enum: JobStatusEnum


* `cbJobNotStarted` (value: `"_cbJobNotStarted"`)

* `cbJobInProgress` (value: `"_cbJobInProgress"`)

* `cbJobInWaiting` (value: `"_cbJobInWaiting"`)

* `cbJobFinished` (value: `"_cbJobFinished"`)

* `cbJobReady` (value: `"_cbJobReady"`)




<a name="JobBillingModeEnum"></a>
## Enum: JobBillingModeEnum


* `cbBillMonthly` (value: `"_cbBillMonthly"`)

* `cbBillFinished` (value: `"_cbBillFinished"`)

* `cbBillIrregulary` (value: `"_cbBillIrregulary"`)

* `cbNoBill` (value: `"_cbNoBill"`)

* `cbBillWarranty` (value: `"_cbBillWarranty"`)




<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `cbPjCustomerDiscount` (value: `"_cbPjCustomerDiscount"`)

* `cbPjJobDiscount` (value: `"_cbPjJobDiscount"`)

* `cbPjNoDiscount` (value: `"_cbPjNoDiscount"`)




