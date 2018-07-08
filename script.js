
var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".url-input");
var websiteTitle = document.querySelector(".website-title")
var websiteURL = document.querySelector(".website-url")
var enter = document.querySelector(".enter");
var bookmarks = document.querySelector(".bookmark-section");

	var prevCard;


function addElement(){

	var newCard = document.createElement("article");
	var newCardTitle = document.createElement("h2");
	var newCardUrl = document.createElement("h4");

	// newDiv.style.color = "#455A64	";
	// newDiv.style.background = "white"; 
	// newDiv.style.width = "90%";
	// newDiv.style.margin = "0 auto";
	// newDiv.style.border = "4px solid #607D8B";
	// newH2.style.borderBottom = "1px solid #CFD8DC";
	// newH4.style.borderBottom = "1px solid #CFD8DC";
	// newH2.style.padding = "1em";
	// newH4.style.padding = "2em";
	// newH2.style.margin = "1rem 1rem";
	// newH4.style.margin = "1rem 1rem";

	var input2 = document.createTextNode(urlInput.value);
	var input1 = document.createTextNode(titleInput.value);

	newCardTitle.appendChild(input1);
	newCardUrl.appendChild(input2);

	newCard.appendChild(newCardTitle);
	newCard.appendChild(newCardUrl);

	var prevCard = document.querySelector("article");
	bookmarks.insertBefore(newCard, prevCard);
}

enter.addEventListener('click', addElement);

document.addEventListener('keyup', function(){

	if (titleInput.value || urlInput.value){
		enter.disabled = false;
	}
	else {
		enter.disabled = true;
	}
});