import { attemptBlock } from "./attemptBlock";
import { cubesRaw } from "./cubesRow";
import { lettersBlock } from "./lettersBlock";
import { wordDescription } from "./wordDescription";

export function content(wordObj, attempt, usedLetters) {
	return `
    <section class="hangman__content">
      ${cubesRaw(wordObj.word, usedLetters)}
      ${wordDescription(wordObj.description)}
			${attemptBlock(attempt)}
      ${lettersBlock(usedLetters)}
    </section>
  `;
}
