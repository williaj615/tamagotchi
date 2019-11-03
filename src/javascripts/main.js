import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
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
};

init();
