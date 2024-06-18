import { letterButton } from "../letterButtons";

export function lettersBlock(usedLetters) {
	const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  
	return `
	  <div class="hangman__letters-block">
		${letters.map((letter) => letterButton(letter, usedLetters)
	).join("")}
	  </div>
	`;
}
  