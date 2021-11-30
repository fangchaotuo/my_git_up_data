window.onload=function(){
	var  grxx=document.getElementById("tomygrxx");
	var  edt=document.getElementById("tomyedt");
	var  work=document.getElementById("tomywork");
	var  like=document.getElementById("tomylike");
	
	var  mygrxx=document.getElementById("mygrxx");
	var  myedt=document.getElementById("myedt");
	var  mywork=document.getElementById("mywork");
	var  mylike=document.getElementById("mylike");
	
	grxx.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=mygrxx.offsetTop+71;
	}
	edt.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=myedt.offsetTop+71;
	}
	work.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=mywork.offsetTop+71;
	}
	like.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=mylike.offsetTop+71;
	}
	
}