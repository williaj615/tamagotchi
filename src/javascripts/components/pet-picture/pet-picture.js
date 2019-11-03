import utilities from '../../utilities/utilities';
import './pet-picture.scss';

const displayPetPic = () => {
  const petImg = '<img src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"></>';
  utilities.printToDom('pet', petImg);
};
export default { displayPetPic };
