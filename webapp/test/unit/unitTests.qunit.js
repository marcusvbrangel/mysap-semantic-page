/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"commysap/mysap-semantic-page/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
