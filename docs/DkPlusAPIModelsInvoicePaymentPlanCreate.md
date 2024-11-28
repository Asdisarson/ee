# DkPlusApi.DkPlusAPIModelsInvoicePaymentPlanCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Payment plan description | 
**amount** | **Number** | Netto Invoice Amount | 
**netAmount** | **Number** | Net amount of invoice | [optional] 
**transactions** | [**[DkPlusAPIModelsInvoicePaymentPlanTransaction]**](DkPlusAPIModelsInvoicePaymentPlanTransaction.md) | Breakdown of payment transactions when to process | 
**reference** | **String** | Plan External Reference Id | [optional] 
**card** | [**DkPlusAPIModelsInvoicePaymentPlanCard**](DkPlusAPIModelsInvoicePaymentPlanCard.md) | Card to use for Payment Plan | 
**senderId** | **String** | Sender Provider Id | 


