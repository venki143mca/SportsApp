function login() {

	$.ajax({
		url : '/login',
		type : 'POST',
		contentType : 'application/json',
		
		data : JSON.stringify({
			"Mti-Device-id" : "1234",
			"Mti-Passcode" : "98067",
			"Mti-Username" : "c_das",
			"Mti-First-Name" : "Koushik",
			"Mti-Last-Name" : "Das",
			"Mti-Email" : "c_das@qualcomm.com",
			"Mti-Group-Id" : "100"
			})
		
	}).done( function( data ) {
		console.log("Sample of data:", data);
	}).fail( function( jqXHR, textStatus ) {
		console.log("Request failed: " + textStatus);
	});
}
