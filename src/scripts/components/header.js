import { image } from "./image";

export function header(attempt) {
	return `
    <header class="hangman__header">
		 	${image(attempt)}
		  <h1 class="hangman__title">Hangman Game</h1>
		</header>
	`;
}
