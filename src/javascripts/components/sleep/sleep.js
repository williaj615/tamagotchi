import './sleep.scss';
import utilities from '../../utilities/utilities';

let energy = 40;

const printSleepQuad = () => {
  let domString = '';
  domString += `<div class="sleep-buttons">
  <p><progress value="${energy}" max="100" id="sleepBar">Energy</progress></p>
  <p><button class='primary' id='nap-button'>Cat Nap</button> <button class ='primary' id='deep-sleep-button'>Deep Slumber</button></p>
  </div>`;
  utilities.printToDom('sleep', domString);
};

const catNap = () => {
  if (energy <= 90) {
    energy += 10;
    document.getElementById('sleepBar').value = energy;
  }
};

const deepSlumber = () => {
  if (energy <= 40) {
    energy += 60;
    document.getElementById('sleepBar').value = energy;
  }
};

const takeANap = () => {
  document.getElementById('nap-button').addEventListener('click', catNap);
};

const longRest = () => {
  document.getElementById('deep-sleep-button').addEventListener('click', deepSlumber);
};

export default { printSleepQuad, takeANap, longRest };
