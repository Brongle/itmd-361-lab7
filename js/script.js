function init(){
	var button = document.getElementById('entrybutton');
	
	function showMeText(){
		var textbox = document.getElementById('entryinput');
		document.getElementbyId('textoutput').innerHTML = textbox.value;
		alert("Bryan Samek + " + textbox.value;
	}
	button.addEventListener('click', showMeText);
	}
}
window.addEventListener('load', init);
