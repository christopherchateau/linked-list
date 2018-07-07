
var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".url-input");
var websiteTitle = document.querySelector(".website-title")
var websiteURL = document.querySelector(".website-url")
var enter = document.querySelector(".enter");


// document.body.onload = addElement;

function addElement(){

	document.body.onload = addElement;

	var newDiv = document.createElement("div");

	var input2 = document.createTextNode(urlInput.value);
	var input1 = document.createTextNode(titleInput.value);

	newDiv.appendChild(input1);
	newDiv.appendChild(input2);

	var currentDiv = document.getElementById(".article");

	document.body.insertBefore(newDiv, currentDiv);

}

enter.addEventListener('click', addElement);


// titleInput = websiteTitle.innerText
	// websiteTitle.innerText = titleInput.value;
	// websiteURL.innerText = urlInput.value;

	// websiteTitle.append(titleInput.value);
	// websiteURL.append(urlInput.value);
	// article.set(".input");

	// var bookmarks = document.querySelector('.bookmark-section');

	// var article = document.createElement("ARTICLE");

	// document.bookmarks.appendChild(article);

	// var newCard = document.createElement("ARTICLE");
	// var newH1 = document.createTextNode('asdf');
	// newCard.appendChild(newH1);
	// var bookmarkSection = document.querySelector(".article");
	// document.body.insertBefore(newCard, bookmarkSection);


document.addEventListener('keyup', function(){

	if((titleInput.value) && (urlInput.value)){
		enter.disabled = false;
	}

});


