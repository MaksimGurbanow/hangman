export function cubesRaw(wordObjValue, usedLetters) {
	return `
	<div class="hangman__cubes-row">
		${Array.from(wordObjValue).map((item) => `
			<div class="hangman__cube-item ${item in usedLetters ? "opened" : null}" value="${item}">
				${item}
			</div>
		`).join("")}
	</div>
	`;
}
