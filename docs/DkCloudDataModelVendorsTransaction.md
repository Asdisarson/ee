# DkPlusApi.DkCloudDataModelVendorsTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**vendor** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**text** | **String** |  | [optional] 
**reference** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**ledgerAccount** | **String** |  | [optional] 
**journalDate** | **Date** |  | [optional] 
**journalType** | **String** |  | [optional] 
**journalHeadType** | **String** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**inputAmount** | **Number** |  | [optional] 
**currencyAmount** | **Number** |  | [optional] 
**settleAmount** | **Number** |  | [optional] 
**settledCurrencyAmount** | **Number** |  | [optional] 
**settleId** | **Number** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**exchange** | **Number** |  | [optional] 
**voucher** | **String** |  | [optional] 
**origin** | **String** |  | [optional] 
**code** | **String** |  | [optional] 
**transactionType** | **String** |  | [optional] 
**recordType** | **String** |  | [optional] 
**paymentSlip** | **String** |  | [optional] 
**paymentStatus** | **String** |  | [optional] 
**journalHeadCode** | **String** |  | [optional] 
**created** | **Date** |  | [optional] 
**modified** | **Date** |  | [optional] 


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




<a name="JournalHeadTypeEnum"></a>
## Enum: JournalHeadTypeEnum


* `manual` (value: `"Manual"`)

* `automatic` (value: `"Automatic"`)

* `exchangeRateDifference` (value: `"ExchangeRateDifference"`)

* `payments` (value: `"Payments"`)

* `receipt` (value: `"Receipt"`)

* `fundTransfer` (value: `"FundTransfer"`)

* `medicor` (value: `"Medicor"`)

* `webService` (value: `"WebService"`)

* `cbSoOnlinePosting` (value: `"_cbSoOnlinePosting"`)

* `printing` (value: `"Printing"`)

* `timeClock` (value: `"TimeClock"`)




<a name="OriginEnum"></a>
## Enum: OriginEnum


* `gLJournal` (value: `"GLJournal"`)

* `aRJournal` (value: `"ARJournal"`)

* `aPJournal` (value: `"APJournal"`)

* `sOInvoice` (value: `"SOInvoice"`)

* `aRInterestCalc` (value: `"ARInterestCalc"`)

* `inJournal` (value: `"InJournal"`)

* `sOJournal` (value: `"SOJournal"`)

* `sOOpenInvoice` (value: `"SOOpenInvoice"`)

* `pjJournal` (value: `"PjJournal"`)

* `aPInvoice` (value: `"APInvoice"`)

* `aPInvoicePayment` (value: `"APInvoicePayment"`)

* `pjInvoice` (value: `"PjInvoice"`)

* `sKIPayment` (value: `"SKIPayment"`)

* `pjDirect` (value: `"PjDirect"`)

* `geSaldo` (value: `"GeSaldo"`)

* `fAJournal` (value: `"FAJournal"`)

* `iNBOMFabricate` (value: `"INBOMFabricate"`)

* `NOT_USED` (value: `"NOT_USED"`)

* `payments` (value: `"Payments"`)

* `bankTrans` (value: `"BankTrans"`)

* `pjPostedJournal` (value: `"PjPostedJournal"`)

* `customReport` (value: `"CustomReport"`)

* `depreciationReport` (value: `"DepreciationReport"`)

* `visa` (value: `"Visa"`)

* `euro` (value: `"Euro"`)

* `doJournal` (value: `"DoJournal"`)

* `pOJournal` (value: `"POJournal"`)

* `pOPostedJournal` (value: `"POPostedJournal"`)

* `dataExport` (value: `"DataExport"`)

* `oRGrantApplication` (value: `"ORGrantApplication"`)

* `orGrantPayment` (value: `"OrGrantPayment"`)

* `aPInterestCalc` (value: `"APInterestCalc"`)

* `aRBSSPayment` (value: `"ARBSSPayment"`)

* `oRMemberFee` (value: `"ORMemberFee"`)

* `oRMemberFeeClaim` (value: `"ORMemberFeeClaim"`)

* `oRMemberFeeClaimDrop` (value: `"ORMemberFeeClaimDrop"`)

* `aRBSSPaymentExNOTUSED` (value: `"ARBSSPaymentEx_NOTUSED"`)

* `oRMemberFeeClaimExNOTUSED` (value: `"ORMemberFeeClaimEx_NOTUSED"`)

* `oRMemberFeeClaimDropExNOTUSED` (value: `"ORMemberFeeClaimDropEx_NOTUSED"`)

* `inTrans` (value: `"InTrans"`)

* `oRMemberFeeCreditcardEx` (value: `"ORMemberFeeCreditcardEx"`)

* `oRMemberFeeCreditcardPaymentEx` (value: `"ORMemberFeeCreditcardPaymentEx"`)

* `inWOPJournal` (value: `"InWOPJournal"`)

* `inOpenJournal` (value: `"InOpenJournal"`)

* `inUndispatchedSalesOrder` (value: `"InUndispatchedSalesOrder"`)

* `inWOPPostedJournal` (value: `"InWOPPostedJournal"`)

* `gLTrans` (value: `"GLTrans"`)

* `aPRequest` (value: `"APRequest"`)

* `arTrans` (value: `"ArTrans"`)

* `apTrans` (value: `"ApTrans"`)

* `inPrescription` (value: `"InPrescription"`)

* `discardedAccountPeriod` (value: `"DiscardedAccountPeriod"`)

* `soHead` (value: `"SoHead"`)

* `gLFastGd` (value: `"GLFastGd"`)




<a name="CodeEnum"></a>
## Enum: CodeEnum


* `ordinary` (value: `"Ordinary"`)

* `baseTax` (value: `"BaseTax"`)

* `tax` (value: `"Tax"`)

* `opening` (value: `"Opening"`)

* `taxSettlement` (value: `"TaxSettlement"`)

* `exchangeRateDifference` (value: `"ExchangeRateDifference"`)




<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum


* `debit` (value: `"Debit"`)

* `credit` (value: `"Credit"`)




<a name="RecordTypeEnum"></a>
## Enum: RecordTypeEnum


* `debitJournal` (value: `"DebitJournal"`)

* `creditJournal` (value: `"CreditJournal"`)

* `debitInvoice` (value: `"DebitInvoice"`)

* `creditInvoice` (value: `"CreditInvoice"`)

* `paidInvoice` (value: `"PaidInvoice"`)

* `cbSKIPaidApplication` (value: `"_cbSKIPaidApplication"`)

* `exchangeRateDifference` (value: `"ExchangeRateDifference"`)

* `interest` (value: `"Interest"`)

* `capitalTax` (value: `"CapitalTax"`)




<a name="PaymentSlipEnum"></a>
## Enum: PaymentSlipEnum


* `bankTransfer` (value: `"BankTransfer"`)

* `bankSlip` (value: `"BankSlip"`)

* `aBGiro` (value: `"ABGiro"`)

* `cGiro` (value: `"CGiro"`)

* `notDefined` (value: `"NotDefined"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `statusNone` (value: `"StatusNone"`)

* `statusOnHold` (value: `"StatusOnHold"`)




