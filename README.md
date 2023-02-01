# simple-scheduler

A simple scheduler widget for Mendix. This scheduler is based on [react-big-scheduler](https://github.com/StephenChou1017/react-big-scheduler).

## Downloading it from the marketplace

This widget can simply be download from the Mendix Marketplace.

## Description

With this widget you can define resources and events for the resources. You can just drag and drop the events between resources or dates. You can even create events by choosing the dates.

## How to use

Note that the widget itself can be implemented however you see fit. But to understand how the widget works, this readme can be used as an example. <br />

This widget assumes a certain structure to your data. Events belong to single resources. The following is just an basic example for a functioning widget. <br />

Example Data Structure
![Example Data Structure](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(41).png) <br />

Your first step is to identify the analogues for Event and Resource in your data model, if they exist. For those that do exist, create a one-to-one association from the analogues to Event/Resource and modify their various creation microflows to also create the Event/Resource/Group object. If you have existing data, it will be necessary to run a data fix to create an appropriate Event or Resource for it. <br />

The second step is to set up the security to include the Scheduling module. Users that require access to the scheduling page need to be given User access. They then have read access to all of the Events and Resources in the system. The Administrator role is only used for admin-level data creation and should be assigned to whatever application level role needs to create Resources and Groups only no 1-1 associations were created in step 1. <br />

Now the microflows, nanflows and JSON Mapping that are shown below are needed for the widget to work.<br />

ConvertStringToDateTime
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(42).png) <br />

ConvertStringToLong
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(43).png) <br />

ACT_RefreshDateChange
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(44).png) <br />

ACTION_EventEdit
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(45).png) <br />

ACTION_NewEvent
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(46).png) <br />

DS_GenerateResources
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(47).png) <br />

DS_GetResources
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(48).png) <br />

DS_NewCellUnit
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(49).png) <br />

DS_NewContent
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(50).png) <br />

DS_NewWeekend
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(51).png) <br />

DS_OnEventChange
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(52).png) <br />

SUB_EventCreate with configuration of Java Action
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(56).png) <br />

Import Mapping for needed JSON
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(54).png) <br />

JSON
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(55).png) <br />

The following screenshots show an example for the configuration of the properties of the widget:

Page
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(57).png) <br />

Resources Properties
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(58).png) <br />

Events Properties
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(59).png) <br />

Event Design Properties
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(60).png) <br />

Calender Design Properties
![ConversionStringDate](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(61).png) <br />

## Demo application

https://simplescheduler100-sandbox.mxapps.io/
