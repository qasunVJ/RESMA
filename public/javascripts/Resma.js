var tableNo = 1;
function addNewTable () {

	$("#tables-wrapper ul").append('<li class="table-holder ui-state-default"><span class="number">' + tableNo +'</span><a href="#"><img src="images/free.svg"></a></li><li class="table-empty ui-state-default"></li>');
	$("#sortable").sortable();
    $("#sortable").disableSelection();
    tableNo++;
}

$(document).ready(function () {
	$("#sortable").sortable();
    $("#sortable").disableSelection();
});

function makeAvailable () {
}
