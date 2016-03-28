import optionator from 'optionator';

const settings = {
  prepend: 'econf [options] [file ...] [dir ...]',
  concatRepeatedArrays: true,
  mergeRepeadedObject: true,
  options: [
    {
      heading: 'Options'
    },
    {
      option: 'help',
      alias: 'h',
      type: 'Boolean',
      description: 'Displays this context menu'
    },
    {
      option: 'config',
      alias: 'c',
      type: 'String',
      description: 'Path to a config'
    },
    {
      option: 'watch',
      alias: 'w',
      type: 'Boolean',
      description: 'Enable file or directory watching'
    }
  ]
};

export default optionator(settings);
