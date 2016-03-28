import chokidar from 'chokidar';
import createLogger from '../logger';

const logger = createLogger('watcher');

export default {
  canRun: (settings) => {
    return !!settings.watch;
  },
  exec: () =>{
    logger.debug('Loading watcher');
  }
};
