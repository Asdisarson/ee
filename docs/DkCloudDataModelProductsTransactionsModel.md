# DkPlusApi.DkCloudDataModelProductsTransactionsModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** |  | [optional] 
**created** | **Date** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**modified** | **Date** |  | [optional] 
**origin** | **String** |  | [optional] 
**headId** | **Number** |  | [optional] 
**sequence** | **Number** |  | [optional] 
**itemCode** | **String** |  | [optional] 
**warehouse** | **String** |  | [optional] 
**subGroup1** | **String** |  | [optional] 
**subGroup2** | **String** |  | [optional] 
**subGroup3** | **String** |  | [optional] 
**subGroup4** | **String** |  | [optional] 
**vendor** | **String** |  | [optional] 
**customer** | **String** |  | [optional] 
**voucher** | **String** |  | [optional] 
**transactionCode** | **String** |  | [optional] 
**journalDate** | **Date** |  | [optional] 
**journalType** | **String** |  | [optional] 
**quantity** | **Number** |  | [optional] 
**purchasePrice** | **Number** |  | [optional] 
**currencyCode** | **String** |  | [optional] 
**exchange** | **Number** |  | [optional] 
**costPrice** | **Number** |  | [optional] 
**costAmount** | **Number** |  | [optional] 
**salesAmount** | **Number** |  | [optional] 
**inventOnHand** | **Number** |  | [optional] 
**text** | **String** |  | [optional] 
**reference** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**netWeight** | **Number** |  | [optional] 
**unitVolume** | **Number** |  | [optional] 
**numberOfPackages** | **Number** |  | [optional] 
**countedQuantity** | **Number** |  | [optional] 
**jobNumber** | **String** |  | [optional] 
**vendorPrice** | **Number** |  | [optional] 
**vendorDiscount** | **Number** |  | [optional] 
**fabrication** | **Number** |  | [optional] 
**batch** | **String** |  | [optional] 
**batchExpiry** | **Date** |  | [optional] 
**_typeOf** | **String** |  | [optional] 
**purchaseAmount** | **Number** |  | [optional] 
**unitCode** | **String** |  | [optional] 
**iNPUnitCode** | **String** |  | [optional] 
**poBatchId** | **Number** |  | [optional] 
**jobRequestId** | **String** |  | [optional] 


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

* `mEPayments` (value: `"MEPayments"`)

* `mEBankTrans` (value: `"MEBankTrans"`)

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

* `aRBSSPaymentEx` (value: `"ARBSSPaymentEx"`)

* `oRMemberFeeClaimEx` (value: `"ORMemberFeeClaimEx"`)

* `oRMemberFeeClaimDropEx` (value: `"ORMemberFeeClaimDropEx"`)

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




<a name="TransactionCodeEnum"></a>
## Enum: TransactionCodeEnum


* `inTransactionJournal` (value: `"InTransactionJournal"`)

* `inTransferJournal` (value: `"InTransferJournal"`)

* `inBOMJournal` (value: `"InBOMJournal"`)

* `inCountingJournal` (value: `"InCountingJournal"`)

* `sOSalesOrders` (value: `"SOSalesOrders"`)

* `pOPurchaseOrders` (value: `"POPurchaseOrders"`)

* `pjProject` (value: `"PjProject"`)

* `sOAfreikningur` (value: `"SOAfreikningur"`)

* `pOCustomReport` (value: `"POCustomReport"`)




<a name="JournalTypeEnum"></a>
## Enum: JournalTypeEnum


* `manual` (value: `"Manual"`)

* `automatic` (value: `"Automatic"`)

* `exchangeRateDifference` (value: `"ExchangeRateDifference"`)

* `payments` (value: `"Payments"`)

* `receipt` (value: `"Receipt"`)

* `fundTransfer` (value: `"FundTransfer"`)

* `medicor` (value: `"Medicor"`)

* `webservice` (value: `"Webservice"`)

* `soOnlinePosting` (value: `"SoOnlinePosting"`)

* `printing` (value: `"Printing"`)




<a name="TypeOfEnum"></a>
## Enum: TypeOfEnum


* `notDefined` (value: `"NotDefined"`)

* `wastage` (value: `"Wastage"`)

* `returned` (value: `"Returned"`)

* `depreciated` (value: `"Depreciated"`)

* `adjusted` (value: `"Adjusted"`)

* `extraFee` (value: `"ExtraFee"`)




