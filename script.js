
var titleInput = document.querySelector(".title-input");

var urlInput = document.querySelector(".url-input");

var websiteTitle = document.querySelector(".website-title")
var websiteURL = document.querySelector(".website-url")

var enter = document.querySelector(".enter");

enter.addEventListener('click', function(){

// titleInput = websiteTitle.innerText
	websiteTitle.innerText = titleInput.value;
	websiteURL.innerText = urlInput.value;

});

document.addEventListener('keyup', function(){

	if((titleInput.value) && (urlInput.value)){
		enter.disabled = false;
	}

});
