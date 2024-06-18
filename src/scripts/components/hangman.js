import { content } from "./content";
import { header } from "./header";
import { newGameBlock } from "./newGameBlock";

export function hangman(wordObj, attempt, usedLetters, wordIsFound) {
	const message = wordIsFound
		? `Congratulations! You guessed the word! It is ${wordObj ? wordObj.word : "undefined"}`
		: `Game Over, the correct word is ${wordObj ? wordObj.word : "undefined"}! ` + (!wordObj ? "All words are used" : "");	return `
	<main class="hangman">
	  <div class="hangman__container">
	  	${(attempt >= 6 || wordIsFound) ? newGameBlock(message) : ""}
    	${header(attempt)}
    	${content(wordObj, attempt, usedLetters)}
	  </div>
	</main>
  `;
}
