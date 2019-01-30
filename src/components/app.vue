<template> 
<div class="container">
	<div class="logo">
  		<img class="google-logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height="92px" width="202px" id="hplogo" alt="Google" title="Google" />
	</div>

	<div class="searchform">
		<input style="search" ></input>
	</div>

	<div class="buttons">
	  <button> Thanks For asking </button>
	  <center>
	  <br>
		<button class="lucky">
			<ul>
			    <li><a href="#">Ask Plies</a></li>
			    <li>I'm Feeling Doodley</li>
			    <li>I'm Feeling Playful</li>
			    <li>I'm Feeling Trendy</li>
			    <li>I'm Feeling Artistic</li>
			    <li>I'm Feeling Puzzled</li>
			</ul>  
		</button>
	  </center>
	</div>

	<div class="footer">
	  
		<span class="footer-left">
		    <a href="#">Advertising</a>
		    <a href="#">Business</a>
		    <a href="#">About</a>
		</span>
		  
		<span class="footer-right">
		  <a href="#">Privacy</a>
		    <a href="#">Terms</a>
		    <a href="#">Settings</a>
		    <a href="#">Use Google.com</a>
		</span>
	</div>
  

</div>

</template>
<script>
$("button").hover(function(){
  var self = this;
  var pos = -(Math.floor(Math.random() * 5) + 1) * 55
  setTimeout(function(){
    $(self).find("ul").css("margin-top", pos + "px");
  }, 500);
}, function(){
  $(this).find("ul").css("margin-top", "0px");
});
</script>
<style>
* {
  box-sizing:border-box;
}
body{
  font-family:"Arial", sans-serif;
}
button {
  background-color:#f2f2f2;
  border:none;
  padding:10px;
  margin:1px;
  height:50px;
  color:#757575;
  font-size:10pt;
  font-weight:bold;
  font-family:arial;
  border-radius: 2px;
   &:hover{
    border-color:darken(#DCDCDC, 5%);
    box-shadow:rgba(0,0,0,0.2) 0px 1px 1px;
    background-image:-webkit-linear-gradient(top, #f8f8f8, #F1F1F1);
    background-image:-moz-linear-gradient(top, #f8f8f8, #F1F1F1);
  }
  &:active{
    box-shadow:rgba(0,0,0,0.2) 0px 0px 1px;
    outline:none !important;
  }
  &:focus{
    outline:1px #08c solid;
  }
}

.lucky {
  display:block;
  padding:0;
  appearance:none;
  overflow:hidden;
  background-color:#F2F2F2;
  background-image:-webkit-linear-gradient(top, #F5F5F5, #F1F1F1);
  background-image:-moz-linear-gradient(top, #F5F5F5, #F1F1F1);
  &:hover{
    border-color:darken(#DCDCDC, 5%);
    box-shadow:rgba(0,0,0,0.2) 0px 1px 1px;
    background-image:-webkit-linear-gradient(top, #f8f8f8, #F1F1F1);
    background-image:-moz-linear-gradient(top, #f8f8f8, #F1F1F1);
  }
  &:active{
    box-shadow:rgba(0,0,0,0.2) 0px 0px 1px;
    outline:none !important;
  }
  &:focus{
    outline:1px #08c solid;
  }
ul{
   margin-top:10;
   padding:0;
   list-style:none;
   -webkit-transition:margin-top .45s ease-in-out;
   -moz-transition:margin-top .45s ease-in-out;
   transition:margin-top .45s ease-in-out;
  	li{
      display:block;
      height:55px;
      padding:1.5em;
    }
  }
}	


.container {
  text-align:center;
  width:100%;
  height:auto;
  padding-top:130px;
  margin:0 auto;
}

.logo {
margin-top:96px;

}
input {
width:400px;
  height:30px;
  margin-bottom:15px;
}

a{
  text-decoration:none;
}
p{
  font-family:arial;
  font-size:9pt;
}

.footer a{
  color:#757575;
  padding:5px;
  font-size:10pt;
}

.footer {
  background:#f2f2f2;
  font-family:arial;
  font-color:#757575;
  padding:5px;
  bottom:0;
  position:fixed;
  width:100%;
  left:-5px;
}
.footer:after {
  display:block;
  clear:both;
  content: "";
  height:0;
  overflow:hidden;
}

.footer-left{
  float:left;
}
.footer-right{
  float:right;
}

.google-logo {
  width:300px;
}

.buttons {
  margin-bottom:60px;
}


</style>