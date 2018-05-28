var random=Math.floor(Math.random() * 1000000);
var filenamea="dot.png?abc="+random;
var email_id="";
var button_Active=true;
var image_shower=false;
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

var muui=document.getElementsByClassName("Ax pl editable LI-aAvf");

if(muui[0] !=null && image_shower==false)
 	 {
 		 console.log("In sent ");
 		image_shower=true;
 		setTimeout(function(){
 			console.log("pick a booo");
	 		var email_double_tick="";
	 		var subject_double_tick="";
	 		var content_double_tick="";
	 		var conts=document.getElementsByClassName("zA yO");
	 		for (var i = 0; i<conts.length; i++) {

	 			//image refrence
	 			var double_tick_img_cont=conts[i].getElementsByClassName("apU xY");
	 			// console.log(double_tick_img_cont[0].innerHTML);



	 			var class_afn=conts[i].getElementsByClassName("yW");//afn
	 			var to_class_afn=(class_afn[0].innerHTML.substring(0,3));
	 			if(to_class_afn==="To:"){
		 			var rec2=conts[i].getElementsByClassName("yW");//afn
		 			var rec=rec2[0].getElementsByClassName("yP");
		 			var recspecial=conts[i].getElementsByClassName("afn");
		 			var recspecial2=recspecial[0].getElementsByClassName("yp");
		 			//var rec=rec2;
		 			if(rec[0]!=null){
			 			email_double_tick=rec[0].getAttribute('email');
			 			if(rec[1]!= null){
			 				email_double_tick+=" , "+rec[1].getAttribute('email')+" or other recipient";
			 			}
		 			}
		 			else if(recspecial2[0]!=null){
		 				email_double_tick=recspecial2[0].getAttribute('email');
			 			if(recspecial2[1]!= null){
			 				email_double_tick+=" , "+recspecial2[1].getAttribute('email')+" or other recipient";
			 			}

		 			}
		 			var class_bog=conts[i].getElementsByClassName("bog");
		 			subject_double_tick=class_bog[0].innerHTML;
		 			var class_y2=conts[i].getElementsByClassName("y2");
		 			if(class_y2[0]!=null){
		 				content_double_tick=class_y2[0].innerHTML.substring(13);//removing nbsp and -
		 			}
		 			console.log("8888 "+email_double_tick);
		 			console.log("111 "+subject_double_tick);
		 			console.log("555 "+content_double_tick);

		 			var image_path_comp;
					//Sending data to server
					var formData2 = new FormData();
					formData2.append("user_name", "abcx");
					formData2.append("Pass_word", "123");
					formData2.append("sender",email_id);
					formData2.append("content_mail",content_double_tick);
					formData2.append("subject",subject_double_tick);
					formData2.append("recipients",email_double_tick);
					// console.log(email_id +" "+content_double_tick+" "+email_double_tick+" "+subject_double_tick);
					$.ajax({
			       url: "https://geekagame.000webhostapp.com/checker.php",
			       type: "POST",
			       data: formData2,
			       processData: false,
			       contentType: false,
			       success: function(response) {
			       	// console.log(response);
			       	   // .. do something
			       	   // console.log(response);
			       	   myarray[i]=response;
			       },
			       error: function(jqXHR, textStatus, errorMessage) {
			           console.log(errorMessage); // Optional
			       }
			    });
					//Assigning the appropiate image
		 			if(!(double_tick_img_cont[0].innerHTML.includes('class="abcxdqq"'))){
		 				console.log("oioinjf");
		 				if(image_path_comp!=null)
		 				var img_url=chrome.extension.getURL(image_path_comp);
		 				double_tick_img_cont[0].innerHTML+='<span class="abcxdqq" tabindex="-1" data-order-hint="0"><div class="lala" data="161905cd8fc478fa"><img class="mama" src="'+img_url+'"></div></span>';
					}
	 			}		
	 		}
	 	}, 5000); 
 	

 	for(i=0;i<myarray.length;i++)
 	{

 		if(myarray[i]==="0")
   	   {
   	   		 console.log("not received");
   	   		image_path_comp=null;


   	   }
   	   else if(myarray[i]==="1")
   	   {
   	   	console.log("received");
   	   	image_path_comp="/icon16.png";

   	   }
   	   else
   	   {
   	   		console.log("none");
   	 		image_path_comp=null;
   	   }
 	 }
 	}
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
