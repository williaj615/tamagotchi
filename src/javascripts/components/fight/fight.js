import './fight.scss';
import utilities from '../../utilities/utilities';

let strength = 100;

const printFightQuad = () => {
  let domString = '';
  domString += `<div class="fight-buttons">
  <p><progress value="${strength}" max="100" id="fightBar">Strength</progress></p>
  <p><button class='primary' id='fight-button'>Fight</button> <button class ='primary' id='run-button'>Run</button></p>
  </div>`;
  utilities.printToDom('fight', domString);
};

const commitViolence = () => {
  if (strength >= 10) {
    strength -= 10;
    document.getElementById('fightBar').value = strength;
  }
};


const fightThem = () => {
  document.getElementById('fight-button').addEventListener('click', commitViolence);
};

export default { printFightQuad, fightThem };
