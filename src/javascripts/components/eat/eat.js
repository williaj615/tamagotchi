import './eat.scss';
import utilities from '../../utilities/utilities';

let full = 100;

const printEatQuad = () => {
  let domString = '';
  domString += `<div class="eat-buttons">
  <p><progress value="${full}" max="100" id="eatBar">Full</progress></p>
  <p><button class='primary' id='healthy-button'>Healthy Food</button> <button class ='primary' id='junk-button'>Junk Food</button></p>
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

};
const feedHealthy = () => {
  document.getElementById('healthy-button').addEventListener('click', eatHealthy);
};

const feedJunk = () => {
  document.getElementById('junk-button').addEventListener('click', eatJunk);
};

export default { printEatQuad, feedHealthy, feedJunk };
