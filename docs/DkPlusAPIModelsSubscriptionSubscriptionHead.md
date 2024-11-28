# DkPlusApi.DkPlusAPIModelsSubscriptionSubscriptionHead

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**_number** | **String** |  | [optional] 
**customer** | [**DkPlusAPIModelsInvoiceCustomer**](DkPlusAPIModelsInvoiceCustomer.md) | Customer Model | 
**reference** | **String** | External Invoice Reference | [optional] 
**text1** | **String** | Invoice Detail Text | [optional] 
**text2** | **String** | Invoice Additional Detail Text | [optional] 
**group** | **String** | Subscription Group | [optional] 
**term** | **String** | Payment Terms | [optional] 
**mode** | **String** | Payment Mode | [optional] 
**_date** | **Date** | Invoice Date | [optional] 
**currency** | **String** | Currency Code | [optional] 
**salesPerson** | **String** | Sales Person | 
**exchange** | **Number** | Currency Exchange Rate | [optional] 
**lines** | [**[DkPlusAPIModelsSubscriptionSubscriptionLine]**](DkPlusAPIModelsSubscriptionSubscriptionLine.md) | Subscription Lines | 
**properties** | **{String: String}** |  | [optional] 


