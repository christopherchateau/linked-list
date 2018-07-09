
var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".url-input");
var websiteTitle = document.querySelector(".website-title")
var websiteURL = document.querySelector(".website-url")
var enter = document.querySelector(".enter-button");
var bookmarks = document.querySelector(".bookmark-section");
var deleteButton;


var prevCard;

// deleteButton.addEventListener('click', function(){

// 	alert("Hey!");


// });


function addElement(e){
	e.preventDefault();

	var newCard = document.createElement("article");
	var newCardTitle = document.createElement("h2");
	var newCardUrl = document.createElement("h4");
	var readButton = document.createElement("button");
	deleteButton = document.createElement("button");

	var input1 = document.createTextNode(titleInput.value);
	var input2 = document.createTextNode(urlInput.value);

	newCardTitle.appendChild(input1);
	newCardUrl.appendChild(input2);

	readButton.innerText = 'Read';
	deleteButton.innerText = 'Delete';

	readButton.classList.add("read-button");
	deleteButton.classList.add("delete-button");

	newCard.appendChild(newCardTitle);
	newCard.appendChild(newCardUrl);
	newCard.appendChild(readButton);
	newCard.appendChild(deleteButton);


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