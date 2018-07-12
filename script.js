var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-button');
var clearButton = document.querySelector('.clear-button');
var bookmarks = document.querySelector('.bookmark-section');

var numOfLinks = document.querySelector('.number-of-links');
var numOfLinksRead = document.querySelector('.number-of-links-read');
var numOfLinksUnread = document.querySelector('.number-of-links-unread');

var cardCounter = 0;
var readCounter = 0;
var unreadCounter = 0;

enterButton.addEventListener('click', createNewBookmark);
clearButton.addEventListener('click', clearReadBookmarks);
document.addEventListener('keyup', enterButtonToggleChecker);

function createNewBookmark(e) {
	e.preventDefault();

	if (verifyUrl()) {
		alert('Not a valid URL!');
		return;
	}
	var newCard = document.createElement('article');
	var newCardTitle = document.createElement('h2');
	var newCardUrl = document.createElement('h4');
	var prevCard = document.querySelector('article');
	var readButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	var titleNode = document.createTextNode(titleInput.value);
	var urlNode = document.createTextNode(urlInput.value);

	createBookmarkTemplate();
	addClassToButtons();
	noInputAlert();
	clearInputFields();
	disableEnterButton();

	cardCounter++;
	updateLinkCount();
	updateUnreadCount();
	bookmarks.insertBefore(newCard, prevCard);

	deleteButton.addEventListener('click', deleteBookmark);
	readButton.addEventListener('click', toggleReadTag);

	function createBookmarkTemplate() {
		readButton.innerText = 'Read';
		deleteButton.innerText = 'Delete';

		newCardTitle.appendChild(titleNode);
		newCardUrl.appendChild(urlNode);

		newCard.appendChild(newCardTitle);
		newCard.appendChild(newCardUrl);
		newCard.appendChild(readButton);
		newCard.appendChild(deleteButton);
	}

	function addClassToButtons() {
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
		updateUnreadCount();
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
		updateUnreadCount();
	}
}

function clearReadBookmarks(e) {
	e.preventDefault();
	cardCounter -= readCounter;
	readCounter = 0;
	
	allCards = document.querySelectorAll('article');

	for (var i = 0; i < allCards.length; i++) {
		if (allCards[i].innerHTML.match(' read')) {
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
	clearButton.disabled = true;
	updateLinkCount();
	updateReadCount();
	updateUnreadCount();
}

function enterButtonToggleChecker() {
	if (titleInput.value && urlInput.value){
		enterButton.disabled = false;
	} else {
		enterButton.disabled = true;
	}
}

function verifyUrl() {
	return !urlInput.value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i)
}

function noInputAlert() {
	if (titleInput.value === '' || urlInput.value === '') {
		alert('Please fill out both fields!');
		return;
	}
}

function updateLinkCount() {
	numOfLinks.innerText = `Links: ${cardCounter}`;
}

function updateUnreadCount() {
	unreadCounter = cardCounter - readCounter;
	numOfLinksUnread.innerText = `Unread: ${unreadCounter}`;
}

function updateReadCount() {
	numOfLinksRead.innerText = `Read: ${readCounter}`;
	if (readCounter > 0) {
		clearButton.disabled = false;
	} else {
		clearButton.disabled = true;
	}
}

function clearInputFields() {
	titleInput.value = '';
	urlInput.value = ''
}

function disableEnterButton() {
	enterButton.disabled = true;
}