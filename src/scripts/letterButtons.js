export function letterButton(letter, usedLetters) {
	return `
		<button 
		class="hangman__letter-button ${letter in usedLetters ? "used" : ""}" 
		id="${letter}" 
		value="${letter}"
		>
			${letter}
		</button>
	`;
}
