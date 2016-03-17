//*********************Block for sap.m.SearchField - Perform Action*****************************************************************
browser.ignoresynchronization = false;
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.SearchField","mProperties":{"placeholder":"Search"}},
							"parentProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.ui.core.CustomData","mProperties":{"key":"sap-ui-fastnavgroup","value":"true"}},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var Index=0;
var value='null';  //value to be entered by user
ui5ControlProperties = JSON.stringify(ui5ControlProperties);
var UI5Action='search,liveChange,suggest';
element(by.sapUI5_Control_Event(ui5ControlProperties, Index, UI5Action, value)).perform();
//!!*******************************************************************************************************

