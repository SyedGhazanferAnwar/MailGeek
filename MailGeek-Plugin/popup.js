var chk = true;

$('#ll').text("Turn Off");
		$('#ll').css("background"," linear-gradient(135deg, #6e8efb, #a777e3)");
		chk = true;
		chrome.runtime.sendMessage("true");

$('#ll').click(function  () {
		chrome.storage.sync.get('response',function(res){
 			console.log(res.response);
 			if(parseInt(res.response)==1)chk=true;
 			else if(parseInt(res.response)==0)chk=false;
 			
 		
	//$('#ll').toggleClass('blob');
	if(chk==true) {
		$('#ll').text("Turn On");
		$('#ll').css("background","gray");//background:gray;
		//$('#ll').background=gray;
		//$('#11').toggleClass('blob');
		chk = false;
		chrome.runtime.sendMessage("false");
	}else{
		$('#ll').text("Turn Off");
		$('#ll').css("background"," linear-gradient(135deg, #6e8efb, #a777e3)");
		chk = true;
		chrome.runtime.sendMessage("true");

	}


});
});