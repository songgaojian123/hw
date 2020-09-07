$(document).ready(function() { 
	$("#Dialer").show();
	$("#ContactList").hide(); 
  	$("#AddContact").hide(); 
});

$("#DialerBtn").click(function() { 
	$("#Dialer").show(); 
	$("#AddContact").hide();	
  	$("#ContactList").hide();	
});

$("#AddContactBtn").click(function() { 
	$("#Dialer").hide(); // show element
	$("#AddContact").show();	
  	$("#ContactList").hide();	
});

$("#ContactListBtn").click(function() { 
	$("#Dialer").hide(); // show element
	$("#AddContact").hide();	
  	$("#ContactList").show();	
});

function dialButton(button) {
    var x = button.value;
    document.getElementById("displayDial").innerHTML += x;
}
function clearDial(button) {
    var x = " ";
    document.getElementById("displayDial").innerHTML = x;
}

function dialNumber(button) {
    var x = "DIALING ...";
    document.getElementById("displayDial").innerHTML += x;
}
