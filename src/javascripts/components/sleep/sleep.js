import './sleep.scss';
import utilities from '../../utilities/utilities';

let energy = 50;

const printSleepQuad = () => {
  let domString = '';
  domString += `<div class="sleep-buttons">
  <p><progress value="${energy}" max="100" id="sleepBar">Energy</progress></p>
  <p><button class='primary' id='nap-button'>Cat Nap</button> <button class ='primary' id='deep-sleep-button'>Deep Slumber</button></p>
  </div>`;
  utilities.printToDom('sleep', domString);
};

const catNap = () => {
  if (energy <= 50) {
    energy += 50;
    document.getElementById('sleepBar').value = energy;
  }
};

const takeANap = () => {
  document.getElementById('nap-button').addEventListener('click', catNap);
};

export default { printSleepQuad, takeANap };
