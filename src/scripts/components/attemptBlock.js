export function attemptBlock(attempt) {
	if (attempt <= 6) {
		return `
			<div  class="hangman__atempt-block">
				${attempt}/6
			</div>
		`;
	}
	return "";
}