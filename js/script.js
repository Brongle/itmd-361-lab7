function init(){
//add your javascrip between these two lines of code
	var button = document.getElementById('entrybutton');
	
	function showMeText(){
		var textbox = document.getElementById('entryinput');
		document.getElementbyId('textoutput').innerHTML = textbox.value;
		alert("Bryan Samek + " + textbox.value;
	}
	button.addEventListener('click', showMeText);
	}
window.addEventListener('load', init);
