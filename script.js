var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-button');
var clearButton = document.querySelector('.clear-button');
var bookmarks = document.querySelector('.bookmark-section');
var numOfLinks = document.querySelector('.number-of-links');
var numOfLinksRead = document.querySelector('.number-of-links-read');
var cardCounter = 0;
var readCounter = 0;

enterButton.addEventListener('click', function(e) {
	e.preventDefault();

	var newCard = document.createElement('article');
	var newCardTitle = document.createElement('h2');
	var newCardUrl = document.createElement('h4');
	var prevCard = document.querySelector('article');
	var readButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	var titleNode = document.createTextNode(titleInput.value);
	var urlNode = document.createTextNode(urlInput.value);

	cardCounter++;
	emptyFieldAlert();
	createNewBookmark();
	addClasstoButtons();

	bookmarks.insertBefore(newCard, prevCard);

	deleteButton.addEventListener('click', deleteBookmark);
	readButton.addEventListener('click', toggleReadTag);

	updateLinkCount();

	function createNewBookmark() {
		readButton.innerText = 'Read';
		deleteButton.innerText = 'Delete';

		newCardTitle.appendChild(titleNode);
		newCardUrl.appendChild(urlNode);

		newCard.appendChild(newCardTitle);
		newCard.appendChild(newCardUrl);
		newCard.appendChild(readButton);
		newCard.appendChild(deleteButton);
	}

	function addClasstoButtons() {
		readButton.classList.add('read-button');
		deleteButton.classList.add('delete-button');
	}

	function deleteBookmark() {
		cardCounter--;
		bookmarks.removeChild(newCard);

		if (readButton.classList.contains('read')) {
			readCounter--;
		}
		updateLinkCount();
		updateReadCount();
	}

	function toggleReadTag() {
		if (!readButton.classList.contains('read')) {
			readButton.classList.add('read');
			readCounter++;
		} else {
			readButton.classList.remove('read');
			readCounter--;
		}
		updateReadCount();
	}
});

clearButton.addEventListener('click', function(e) {
	e.preventDefault();
	cardCounter = 0;
	readCounter = 0;
	
	var allCards = document.querySelector('.bookmark-section');
	allCards.innerHTML = '';
	
	clearButton.disabled = true;
	updateLinkCount();
	updateReadCount();
});	

document.addEventListener('keyup', function() {
	if (titleInput.value && urlInput.value){
		enterButton.disabled = false;
	} else {
		enterButton.disabled = true;
	}
});

function emptyFieldAlert() {
	if (titleInput.value === '' || urlInput.value === '') {
		alert('Please fill out both fields!');
		return;
	}
}

function updateLinkCount() {
	numOfLinks.innerText = `Number of Links: ${cardCounter}`;
	if (cardCounter > 0) {
		clearButton.disabled = false;
	} else {
		clearButton.disabled = true;
	}
}

function updateReadCount() {
	numOfLinksRead.innerText = `Number of Links Read: ${readCounter}`;
}