import './fight.scss';
import utilities from '../../utilities/utilities';

let strength = 100;

const printFightQuad = () => {
  let domString = '';
  domString += `<div id="fight-buttons">
  <p><progress value="${strength}" max="100" id="fightBar">Strength</progress></p>
  <p><button class='neg' id='fight-button'>Fight</button> <button class ='pos' id='run-button'>Run</button></p>
  </div>`;
  utilities.printToDom('fight', domString);
};

const commitViolence = () => {
  if (strength >= 10) {
    strength -= 10;
    document.getElementById('fightBar').value = strength;
  }
};

const runBravely = () => {
  if (strength < 100) {
    strength += 1;
    document.getElementById('fightBar').value = strength;
  }
};

const fightThem = () => {
  document.getElementById('fight-button').addEventListener('click', commitViolence);
};

const runAway = () => {
  document.getElementById('run-button').addEventListener('click', runBravely);
};

export default { printFightQuad, fightThem, runAway };
