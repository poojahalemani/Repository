//*********************Block for sap.m.Toolbar - Perform Action*****************************************************************
browser.ignoresynchronization = false;
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.Page","mProperties":{}},
							"prevSiblingProperties":{"metadata":"sap.m.PageAccessibleLandmarkInfo","mProperties":{"rootLabel":"Master","headerLabel":"Header","subHeaderRole":"Search","subHeaderLabel":"Object Search","contentRole":"Navigation","contentLabel":"Items"}},
							"nextSiblingProperties":{"metadata":"sap.m.Bar","mProperties":{}},
							"childProperties":{"metadata":"sap.ui.core.CustomData","mProperties":{"key":"sap-ui-fastnavgroup","value":"true"}}
							};
var Index=0;
ui5ControlProperties = JSON.stringify(ui5ControlProperties);
var UI5Action='press';
element(by.sapUI5_Control_Event(ui5ControlProperties, Index, UI5Action)).perform();
//!!*******************************************************************************************************

