import '../styles/main.scss';
import eat from './components/eat/eat';

const init = () => {
  eat.printEatQuad();
  eat.feedHealthy();
  eat.feedJunk();
};

init();
