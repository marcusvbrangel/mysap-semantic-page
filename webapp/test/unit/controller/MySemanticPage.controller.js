/*global QUnit*/

sap.ui.define([
	"commysap/mysap-semantic-page/controller/MySemanticPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MySemanticPage Controller");

	QUnit.test("I should test the MySemanticPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
