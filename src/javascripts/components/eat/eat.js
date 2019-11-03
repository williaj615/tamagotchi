import './eat.scss';
import utilities from '../../utilities/utilities';

let full = 100;

const printEatQuad = () => {
  let domString = '';
  domString += `<div id="eat-buttons">
  <p><progress value="${full}" max="100" id="eatBar">Full</progress></p>
  <p><button class='pos' id='healthy-button'>Healthy Food</button> <button class ='neg' id='junk-button'>Junk Food</button></p>
  </div>`;
  utilities.printToDom('eat', domString);
};

const eatHealthy = () => {
  if (full <= 90) {
    full += 10;
    document.getElementById('eatBar').value = full;
  }
};

const eatJunk = () => {
  if (full > 3) {
    full -= 3;
    document.getElementById('eatBar').value = full;
  }
};
const feedHealthy = () => {
  document.getElementById('healthy-button').addEventListener('click', eatHealthy);
};

const feedJunk = () => {
  document.getElementById('junk-button').addEventListener('click', eatJunk);
};

export default { printEatQuad, feedHealthy, feedJunk };
