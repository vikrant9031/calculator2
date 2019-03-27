function calc(event){
	var a = event.target.id;
	var x = document.getElementById("calcScreen");
	switch(a){
     case '0':x.innerHTML+="0";
     break;
     case '1':x.innerHTML+="1";
     break;
     case '2':x.innerHTML+="2";
     break;
     case '3':x.innerHTML+="3";
     break;
     case '4':x.innerHTML+="4";
     break;
     case '5':x.innerHTML+="5";
     break;
     case '6':x.innerHTML+="6";
     break;
     case '7':x.innerHTML+="7";
     break;
     case '8':x.innerHTML+="8";
     break;
     case '9':x.innerHTML+="9";
     break;
     case '+':x.innerHTML+="+";
     break;
     case '-':x.innerHTML+="-";
     break;
     case '/':x.innerHTML+="/";
     break;
     case '*':x.innerHTML+="*";

	}

}
	function evalu(){
    var x = document.getElementById("calcScreen");
    var evaluate = eval(x.innerHTML);
    x.innerHTML= evaluate;

	}
 	function rem(){
    var x = document.getElementById("calcScreen");
    x.innerHTML= "";

	}
 
