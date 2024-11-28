# DkPlusApi.DkCloudDataModelCustomersTransactionModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modified** | **Date** |  | [optional] 
**ID** | **Number** |  | [optional] 
**headId** | **Number** |  | [optional] 
**sequence** | **Number** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**customer** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**text** | **String** |  | [optional] 
**reference** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**journalDate** | **Date** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**journalHeadCode** | **String** |  | [optional] 
**settledCurrencyAmount** | **Number** |  | [optional] 
**settledAmount** | **Number** |  | [optional] 
**settledStatus** | **Number** |  | [optional] 
**settled** | **Boolean** |  | [optional] 
**inputAmount** | **Number** |  | [optional] 
**currencyAmount** | **Number** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**exchange** | **Number** |  | [optional] 
**code** | **Number** |  | [optional] 
**voucher** | **String** |  | [optional] 
**origin** | **Number** |  | [optional] 
**claimStatus** | **Number** |  | [optional] 
**recordType** | **String** |  | [optional] 
**journalType** | **String** |  | [optional] 
**settleId** | **Number** |  | [optional] 
**objectDate** | **Date** |  | [optional] 
**deleted** | **Boolean** |  | [optional] 
**created** | **Date** |  | [optional] 


<a name="RecordTypeEnum"></a>
## Enum: RecordTypeEnum


* `debetJournal` (value: `"DebetJournal"`)

* `creditJournal` (value: `"CreditJournal"`)

* `debetInvoice` (value: `"DebetInvoice"`)

* `creditInvoice` (value: `"CreditInvoice"`)

* `returnInvoice` (value: `"ReturnInvoice"`)

* `interest` (value: `"Interest"`)

* `exchangeRateDifference` (value: `"ExchangeRateDifference"`)

* `debetORJournal` (value: `"DebetORJournal"`)

* `creditORJournal` (value: `"CreditORJournal"`)

* `claimBase` (value: `"ClaimBase"`)

* `payedClaim` (value: `"PayedClaim"`)

* `droppedClaim` (value: `"DroppedClaim"`)

* `creditcardBase` (value: `"CreditcardBase"`)

* `payedCreditcard` (value: `"PayedCreditcard"`)




<a name="JournalTypeEnum"></a>
## Enum: JournalTypeEnum


* `generalLedger` (value: `"GeneralLedger"`)

* `accountsReceivable` (value: `"AccountsReceivable"`)

* `accountsPayable` (value: `"AccountsPayable"`)

* `projects` (value: `"Projects"`)

* `payroll` (value: `"Payroll"`)

* `fixedAssets` (value: `"FixedAssets"`)

* `memberPayments` (value: `"MemberPayments"`)

* `bankTransaction` (value: `"BankTransaction"`)

* `supporter` (value: `"Supporter"`)

* `booking` (value: `"Booking"`)




