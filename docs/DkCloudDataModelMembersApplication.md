# DkPlusApi.DkCloudDataModelMembersApplication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | **String** |  | [optional] 
**bankAccount** | [**DkCloudDataModelMembersApplicationBankAccount**](DkCloudDataModelMembersApplicationBankAccount.md) |  | [optional] 
**contact** | [**DkCloudDataModelMembersApplicationContact**](DkCloudDataModelMembersApplicationContact.md) |  | [optional] 
**fund** | **String** |  | [optional] 
**grantDescription** | **String** |  | [optional] 
**grant** | **String** |  | [optional] 
**purpose** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**_number** | **Number** |  | [optional] 
**status** | **String** |  | [optional] 
**managedBy** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**dateOfMeeting** | **Date** |  | [optional] 
**denialCode** | **String** |  | [optional] 
**denialCodeDescription** | **String** |  | [optional] 
**group** | **String** |  | [optional] 
**subGroup** | **String** |  | [optional] 
**totalAmount** | **Number** |  | [optional] 
**period** | [**DkCloudDataModelGeneralDateRange**](DkCloudDataModelGeneralDateRange.md) |  | [optional] 
**amount** | **Number** |  | [optional] 
**posted** | **Date** |  | [optional] 
**comment** | **String** |  | [optional] 
**text1** | **String** |  | [optional] 
**text2** | **String** |  | [optional] 
**membershipRulesOK** | **Boolean** |  | [optional] 
**grantRulesOK** | **Boolean** |  | [optional] 
**reference** | **String** |  | [optional] 
**jobRatio** | **Number** |  | [optional] 
**periodDesc** | **String** |  | [optional] 
**communicationMemo** | **String** |  | [optional] 
**grantCount** | **Number** |  | [optional] 
**unitCount** | **Number** |  | [optional] 
**location** | **String** |  | [optional] 
**periodDescription** | **String** |  | [optional] 
**organizer** | **String** |  | [optional] 
**workPlace** | **String** |  | [optional] 
**workPlaceNumber** | **String** |  | [optional] 
**voucherTag** | **String** |  | [optional] 
**details** | [**[DkCloudDataModelMembersApplicationDetail]**](DkCloudDataModelMembersApplicationDetail.md) |  | [optional] 
**workPlaceHistory** | [**[DkCloudDataModelMembersWorkPlaceHistory]**](DkCloudDataModelMembersWorkPlaceHistory.md) |  | [optional] 
**maternityLeaves** | [**[DkCloudDataModelMembersMaternityLeave]**](DkCloudDataModelMembersMaternityLeave.md) |  | [optional] 
**amountTraveled** | **Number** |  | [optional] 
**travelCost** | **Number** |  | [optional] 
**companyID** | **String** |  | [optional] 
**attachments** | [**[DkCloudDataModelGeneralAttachmentModel]**](DkCloudDataModelGeneralAttachmentModel.md) |  | [optional] 
**termsConsentGiven** | **Boolean** |  | [optional] 
**termId** | **Number** |  | [optional] 
**extraProperties** | **{String: String}** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `inProgress` (value: `"InProgress"`)

* `accepted` (value: `"Accepted"`)

* `rejected` (value: `"Rejected"`)

* `expired` (value: `"Expired"`)

* `partlyPaid` (value: `"PartlyPaid"`)

* `fullyPaid` (value: `"FullyPaid"`)

* `closed` (value: `"Closed"`)

* `payedToCompany` (value: `"PayedToCompany"`)

* `onHold` (value: `"OnHold"`)

* `invalid` (value: `"Invalid"`)

* `notFinished` (value: `"NotFinished"`)




<a name="ManagedByEnum"></a>
## Enum: ManagedByEnum


* `employee` (value: `"Employee"`)

* `meeting` (value: `"Meeting"`)




