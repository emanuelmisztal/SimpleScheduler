# simple-scheduler

A simple scheduler widget for Mendix. This scheduler is based on [react-big-scheduler](https://github.com/StephenChou1017/react-big-scheduler).

## Downloading it from the marketplace

This widget can simply be download from the Mendix Marketplace.

## Description

With this widget you can define resources and events for the resources. You can just drag and drop the events between resources or dates. You can even create events by choosing the dates.

## How to use

Note that the widget itself can be implemented however you see fit. But to understand how the widget works this readme can be used as a example. This widget assumes a certain structure to your data. Events belong to single resources. An example is given below. <br /><br />

Example Data Structure
![Example Data Structure](https://github.com/DevrimBaran/SimpleScheduler/blob/main/screenshots/Screenshot%20(41).png) <br />

Your first step is to identify the analogues for Event and Resource in your data model, if they exist. For those that do exist, create a one-to-one association from the analogues to Event/Resource and modify their various creation microflows to also create the Event/Resource/Group object. If you have existing data, it will be necessary to run a data fix to create an appropriate Event or Resource for it. <br />
The second step is to set up the security to include the Scheduling module. Users that require access to the scheduling page need to be given User access. They then have read access to all of the Events and Resources in the system. The Administrator role is only used for admin-level data creation and should be assigned to whatever application level role needs to create Resources and Groups only no 1-1 associations were created in step 1. <br />
Now the microflows that are shown below are needed for the widget to work.

## Demo application

https://simplescheduler100-sandbox.mxapps.io/
