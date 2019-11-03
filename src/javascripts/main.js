import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import petPic from './components/pet-picture/pet-picture';


const init = () => {
  petPic.displayPetPic();
  eat.printEatQuad();
  eat.feedHealthy();
  eat.feedJunk();
  play.printPlayQuad();
  play.playBig();
  play.playLittle();
  fight.printFightQuad();
  fight.fightThem();
  fight.runAway();
  sleep.printSleepQuad();
  sleep.takeANap();
  sleep.longRest();
};

init();
