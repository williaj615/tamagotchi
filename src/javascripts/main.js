import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  eat.printEatQuad();
  eat.feedHealthy();
  eat.feedJunk();
  play.printPlayQuad();
  play.playBig();
  play.playLittle();
  fight.printFightQuad();
  fight.fightThem();
};

init();
