# DkPlusApi.DkCloudDataModelProjectRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**_number** | **String** |  | 
**type** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**extraDescription** | **String** |  | [optional] 
**memo** | **String** |  | [optional] 
**transfered** | **Boolean** |  | [optional] 
**dim1** | **String** |  | [optional] 
**dim2** | **String** |  | [optional] 
**dim3** | **String** |  | [optional] 
**project** | **String** |  | 
**phase** | **String** |  | [optional] 
**task** | **String** |  | 
**supervisor** | **String** |  | 
**worker** | **String** |  | 
**from** | **Date** |  | [optional] 
**to** | **Date** |  | [optional] 
**hasPriority** | **Boolean** |  | [optional] 
**workerCount** | **Number** |  | [optional] 
**isScheduled** | **Boolean** |  | [optional] 
**isLocked** | **Boolean** |  | [optional] 
**parentRequest** | **String** |  | [optional] 
**customer** | **String** |  | [optional] 
**objectDate** | **Date** |  | [optional] 
**deleted** | **Boolean** |  | [optional] 
**created** | **Date** |  | [optional] 
**modified** | **Date** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `requestTypeNone` (value: `"RequestTypeNone"`)

* `requestTypeJob` (value: `"RequestTypeJob"`)

* `requestTypeOther` (value: `"RequestTypeOther"`)

* `requestTypeBooking` (value: `"RequestTypeBooking"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notStarted` (value: `"NotStarted"`)

* `inProgress` (value: `"InProgress"`)

* `onHold` (value: `"OnHold"`)

* `finished` (value: `"Finished"`)

* `preWork` (value: `"PreWork"`)

* `orderingParts` (value: `"OrderingParts"`)

* `cancelled` (value: `"Cancelled"`)

* `readyToBill` (value: `"ReadyToBill"`)

* `billed` (value: `"Billed"`)

* `arrived` (value: `"Arrived"`)




