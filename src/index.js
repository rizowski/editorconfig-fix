import settings from './settings';
import createLogger from './logger';
import behaviors from './behaviors';

const logger = createLogger('econf');

const options = settings.parse(process.argv);

if(options.help){
  logger.log(settings.generateHelp());
  process.exit(0);
}

behaviors.forEach(b =>{
  if(b.canRun(options)){
    b.exec();
  }
});
