import './play.scss';
import utilities from '../../utilities/utilities';

let fun = 50;

const printPlayQuad = () => {
  let domString = '';
  domString += `<div class="play-buttons">
  <p><progress value="${fun}" max="100" id="playBar">Fun</progress></p>
  <p><button class='primary' id='big-fun-button'>Play Big</button> <button class ='primary' id='little-fun-button'>Play Little</button></p>
  </div>`;
  utilities.printToDom('play', domString);
};
const bigFun = () => {
  if (fun <= 50) {
    fun += 50;
    document.getElementById('playBar').value = fun;
  }
};
const littleFun = () => {
  if (fun <= 98) {
    fun += 2;
    document.getElementById('playBar').value = fun;
  }
};

const playBig = () => {
  document.getElementById('big-fun-button').addEventListener('click', bigFun);
};

const playLittle = () => {
  document.getElementById('little-fun-button').addEventListener('click', littleFun);
};

export default { printPlayQuad, playBig, playLittle };
