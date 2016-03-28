import path from 'path';
import fs from 'fs';
import editorconfig from 'editorconfig';
import createLogger from '../logger';

const logger = createLogger('config');


export default {
  canRun: (settings) =>{
    return !!settings.config;
  },
  exec: () =>{
    logger.debug('Executing config');
  }
};
