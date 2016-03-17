//*********************Block for sap.m.ToolbarSpacer - Perform Assert*****************************************************************
browser.ignoresynchronization = false;
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://drop-down-list"}},
							"nextSiblingProperties":{"metadata":"sap.m.Title","mProperties":{"text":"Entities (198)"}},
							"childProperties":{}
							};
var Index=0;
ui5ControlProperties = JSON.stringify(ui5ControlProperties);
var assertType = 'assertEquals';      //(assertNotEquals,assertContains)
var compareValue = null;             //expected value
var attribute = null;                //eg: title, text, value etc.
element(by.sapUI5_Control_Assert(ui5ControlProperties,Index, assertType,attribute,compareValue)).perform();
//!!*******************************************************************************************************

