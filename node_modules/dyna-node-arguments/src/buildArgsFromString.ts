export interface IDynaNodeArguments {
  node: string;
  app: string;
  args: {
    root: string;
    [flag: string]: string;
  };
}

export const buildArgsFromString = (cli: string): IDynaNodeArguments => {
  const dynaNodeArguments: IDynaNodeArguments = {
    node: '',
    app: '',
    args: {
      root: '',
    },
  };

  let flag = 'root';

  cli
    .split(' ')
    .filter(Boolean)
    .forEach((arg, index) => {
      if (index === 0) {
        dynaNodeArguments.node = arg;
        return;
      }

      if (index === 1) {
        dynaNodeArguments.app = arg;
        return;
      }

      if (arg.indexOf('--') === 0) {
        flag = arg.substr(2) || 'root';
        if (!dynaNodeArguments.args[flag]) dynaNodeArguments.args[flag] = '';
        return;
      }

      dynaNodeArguments.args[flag] += `${dynaNodeArguments.args[flag] ? ' ' : ''}${arg.trim()}`;
    });

  return dynaNodeArguments;
};
