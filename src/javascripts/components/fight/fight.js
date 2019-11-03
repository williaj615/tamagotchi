import './fight.scss';
import utilities from '../../utilities/utilities';

const strength = 100;

const printFightQuad = () => {
  let domString = '';
  domString += `<div class="fight-buttons">
  <p><progress value="${strength}" max="100" id="fightBar">Strength</progress></p>
  <p><button class='primary' id='fight-button'>Fight</button> <button class ='primary' id='run-button'>Run</button></p>
  </div>`;
  utilities.printToDom('fight', domString);
};

export default { printFightQuad };
