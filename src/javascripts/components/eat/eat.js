import './eat.scss';
import utilities from '../../utilities/utilities';

const printEatQuad = () => {
  let domString = '';
  const full = 100;
  domString += `<div class="eat-buttons">
  <p><progress value="${full}" max="100" id="eatTotal">Full</progress></p>
  <p><button class='primary' id='healthy'>Granola</button> <button class ='primary' id='junk'>Cheetos</button></p>
  </div>`;
  utilities.printToDom('eat', domString);
};

export default { printEatQuad };
