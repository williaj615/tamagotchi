import './play.scss';
import utilities from '../../utilities/utilities';

const full = 100;

const printPlayQuad = () => {
  let domString = '';
  domString += `<div class="play-buttons">
  <p><progress value="${full}" max="100" id="playBar">Full</progress></p>
  <p><button class='primary' id='big-fun-button'>Big Fun</button> <button class ='primary' id='little-fun-button'>Little Fun</button></p>
  </div>`;
  utilities.printToDom('play', domString);
};


// const feedHealthy = () => {
// document.getElementById('healthy-button').addEventListener('click', eatHealthy);
// };

// const feedJunk = () => {
// document.getElementById('junk-button').addEventListener('click', eatJunk);
// };

export default { printPlayQuad };
