# DkPlusApi.DkCloudDataModelTimeClockEntryModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** |  | [optional] 
**employee** | **String** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**project** | **String** |  | [optional] 
**phase** | **String** |  | [optional] 
**task** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**currentStatus** | **String** |  | [optional] 
**entryType** | [**DkCloudDataModelTimeClockEntryTypeModel**](DkCloudDataModelTimeClockEntryTypeModel.md) |  | [optional] 
**start** | **Date** |  | [optional] 
**end** | **Date** |  | [optional] 
**actualStart** | **Date** |  | [optional] 
**actualEnd** | **Date** |  | [optional] 
**totalHours** | **Number** |  | [optional] 
**actualTotalHours** | **Number** |  | [optional] 
**totalMinutes** | **Number** |  | [optional] 
**actualTotalMinutes** | **Number** |  | [optional] 
**lines** | [**[DkCloudDataModelTimeClockChildEntryModel]**](DkCloudDataModelTimeClockChildEntryModel.md) |  | [optional] 
**processed** | **Boolean** |  | [optional] 
**processedJournal** | **Boolean** |  | [optional] 


<a name="CurrentStatusEnum"></a>
## Enum: CurrentStatusEnum


* `work` (value: `"Work"`)

* `vacation` (value: `"Vacation"`)

* `sick` (value: `"Sick"`)




