export function newGameBlock(message) {
	return `
		<div class="hangman__new-game-block">	
			<div class="hangman__new-game-block-container">
				${message}
				<button class="hangman__new-game-button">
					Play Again!
				</button>
			</div>
		</div>
	`;	
}