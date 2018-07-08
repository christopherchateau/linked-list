
var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".url-input");
var websiteTitle = document.querySelector(".website-title")
var websiteURL = document.querySelector(".website-url")
var enter = document.querySelector(".enter");
var bookmarks = document.querySelector(".bookmark-section");


function addElement(){

	var newH2 = document.createElement("h2");
	var newH4 = document.createElement("h4");
	var newDiv = document.createElement("article");

	newDiv.style.width = '25px';
	newDiv.style.color = "red";
	newDiv.style.background = "white"; 
	newDiv.style.width = "300px";
	newDiv.style.margin = "0 1em";
	newDiv.style.border = "1px solid #607d8b";
	newH4.style.borderBottom = "1px solid red";
	newH2.style.borderBottom = "1px solid #cfd8dc";
	newH2.style.padding = "1em";
	newH4.style.padding = "2em";
	newH2.style.margin = "1rem 1rem";
	newH4.style.margin = "1rem 1rem";

	var input2 = document.createTextNode(urlInput.value);
	var input1 = document.createTextNode(titleInput.value);

	newH2.appendChild(input1);
	newH4.appendChild(input2);

	newDiv.appendChild(newH2);
	newDiv.appendChild(newH4);

	var currentDiv = document.getElementById("h1");
	bookmarks.insertBefore(newDiv, currentDiv);
}

enter.addEventListener('click', addElement);

document.addEventListener('keyup', function(){

	if((titleInput.value) && (urlInput.value)){
		enter.disabled = false;
	}

});


