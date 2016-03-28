import debug from 'debug';

export default function (moduleName){
  return {
    log: console.log,
    error: console.error,
    debug: debug(`econf:${moduleName}`)
  };
}
