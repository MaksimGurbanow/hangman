import { person } from "./person";

export function image(attempt) {
	return `
  <div class="hangman__image">
    <svg class="hangman__gallow" height="90%" width="30vw" viewBox="0 0 353 581" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="176" y="34.6662" width="10%" height="199.598" transform="rotate(45 176.337 34.6662)" fill="black" stroke="#FFFEFE" stroke-width="3" />
      <rect x="34.5" y="1.5" width="10%" height="100%" rx="3.5" fill="black" stroke="#FFFEFE" stroke-width="3" />
      <rect x="351.5" y="34.5" width="10%" height="350" rx="3.5" transform="rotate(90 351.5 34.5)" fill="black" stroke="#FFFEFE" stroke-width="3" />
      <rect x="298" y="65" width="10" height="74" fill="black" />
      ${person(attempt)}
    </svg>
  </div>
  `;
}