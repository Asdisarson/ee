# DkPlusApi.DkPlusAPIModelsInvoiceHead

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**DkPlusAPIModelsInvoiceCustomer**](DkPlusAPIModelsInvoiceCustomer.md) | Customer Model | 
**reference** | **String** | External Invoice Reference | [optional] 
**text1** | **String** | Invoice Detail Text | [optional] 
**text2** | **String** | Invoice Additional Detail Text | [optional] 
**term** | **String** | Payment Terms | [optional] 
**mode** | **String** | Payment Mode | [optional] 
**_date** | **Date** | Invoice Date | [optional] 
**dueDate** | **Date** | Invoice Due Date | [optional] 
**currency** | **String** | Currency Code | [optional] 
**salesPerson** | **String** | Sales Person | 
**exchange** | **Number** | Currency Exchange Rate | [optional] 
**options** | [**DkPlusAPIModelsInvoiceOptions**](DkPlusAPIModelsInvoiceOptions.md) | Options Model | [optional] 
**lines** | [**[DkPlusAPIModelsInvoiceLine]**](DkPlusAPIModelsInvoiceLine.md) | Invoice Lines | [optional] 
**payments** | [**[DkPlusAPIModelsInvoicePayment]**](DkPlusAPIModelsInvoicePayment.md) | Invoice Payments | [optional] 
**attachment** | [**DkPlusAPIModelsFileModel**](DkPlusAPIModelsFileModel.md) | Attachment Model | [optional] 
**receiver** | [**DkPlusAPIModelsInvoiceReceiver**](DkPlusAPIModelsInvoiceReceiver.md) | Item Receiver | [optional] 
**contact** | [**DkPlusAPIModelsInvoiceContact**](DkPlusAPIModelsInvoiceContact.md) | Contact | [optional] 
**saleType** | **String** | Sales Type | [optional] 
**properties** | **{String: String}** | Additional Properties | [optional] 
**project** | **String** | Project Job Number | [optional] 


<a name="SaleTypeEnum"></a>
## Enum: SaleTypeEnum


* `debit` (value: `"Debit"`)

* `credit` (value: `"Credit"`)

* `returnSale` (value: `"ReturnSale"`)

* `debitComputation` (value: `"DebitComputation"`)

* `creditComputation` (value: `"CreditComputation"`)




