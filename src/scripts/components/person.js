export function person(attempt) {
	return `
    <svg class="hangman__head ${attempt > 0 ? "visible" : ""}" width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="head">
      <circle id="Ellipse 1" cx="50.5" cy="50.5" r="48" fill="white" stroke="black" stroke-width="5" />
    </g>
    </svg>
    <svg class="hangman__body ${attempt > 1 ? "visible" : ""}" width="5" height="131" viewBox="0 0 5 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="body">
      <rect id="Rectangle 5" width="5" height="131" fill="black" />
    </g>
    </svg>
    <svg class="hangman__hand-one ${attempt > 2 ? "visible" : ""}" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="hand-one">
      <rect id="Rectangle 7" x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="black" />
    </g>
    </svg>
    <svg class="hangman__hand-two ${attempt > 3 ? "visible" : ""}" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="hand-two">
    <rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="black" />
    </g>
    </svg>
    <svg class="hangman__leg-two ${attempt > 4 ? "visible" : ""}" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="leg-two">
      <rect id="Rectangle 6" y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="black" />
    </g>
    </svg>
    <svg class="hangman__leg-one ${attempt > 5 ? "visible" : ""}" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="leg-one">
        <rect id="Rectangle 9" x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="black" />
      </g>
    </svg>           
  `;
}