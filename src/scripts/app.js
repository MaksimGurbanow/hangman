import { hangman } from "./components/hangman";

const words = [];
let currentWord = "";
let attemptCounter = 0;
let usedLetters = {};

async function fetchData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

function chooseRandomWord(wordList) {
	const randomItem = Math.floor(Math.random() * wordList.length);
	const [randomWord] = wordList.splice(randomItem, 1);
	return randomWord;
}

function isInTheWord(word, letter) {
	return word.includes(letter);
}



function updatePage(wordObj) {

	function wordIsFound(word, usedLetters) {
		return word.split("").every((wordLetter) => !!usedLetters[wordLetter]);
	}
	document.body.innerHTML = hangman(wordObj, attemptCounter, usedLetters, wordIsFound(wordObj.word, usedLetters));

	const cubeItems = document.querySelectorAll(".hangman__cube-item");
	const lettersBlock = document.querySelector(".hangman__letters-block");

	lettersBlock.addEventListener("click", (e) => {
		const target = e.target.closest("button");
		if (target) {
			const targetValue = target.getAttribute("value");
			handleLetterClick(targetValue);
		}
	});
	document.addEventListener("keydown", handlekeyDown);

	function handlekeyDown(e) {
		
		if (/^[a-zA-Z]$/.test(e.key)) {	
			document.removeEventListener("keydown", handlekeyDown);
			handleLetterClick(e.key.toUpperCase());
		}

	}
	window.letterButtons = lettersBlock;
	function handleLetterClick(value) {
		if (isInTheWord(currentWord.word, value)) {
			cubeItems.forEach((cubeItem) => {
				if (cubeItem.getAttribute("value") === value) {
					cubeItem.classList.add("opened");
				}
			});
		}
		else {
			if (!(value in usedLetters)) {
				attemptCounter += 1;
			}
		}
		usedLetters[value] = true;	
		lettersBlock.children[value].classList.add("used");
		updatePage(wordObj);
	}

	if (attemptCounter >= 6 || wordIsFound(wordObj.word, usedLetters)) {
		document.removeEventListener("keydown", handlekeyDown);
		document.querySelector(".hangman__new-game-button").addEventListener("click", () => {
			initializeGame();
		});
	}

}

const data = await fetchData("./data/words.json");
words.push(...data);
async function initializeGame() {
	try {
		window.words = words;
		usedLetters = {};
		attemptCounter = 0;
		currentWord = chooseRandomWord(words);
		updatePage(currentWord);
		console.group("Hello");
		console.log(currentWord.word);
		console.log(currentWord.description);
		console.groupEnd();
	} catch (error) {
		console.error("Something went wrong");
	}
}

initializeGame();
