/** @odoo-module **/


import { _t } from "@web/core/l10n/translation";
import { jsonrpc } from '@web/core/network/rpc_service';

	$(document).ready(function(){
		var priority_value = $('#priority_value').val()
		$('#ticket_priority').val(priority_value)
	});