"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildArgsFromString = void 0;
exports.buildArgsFromString = function (cli) {
    var dynaNodeArguments = {
        node: '',
        app: '',
        args: {
            root: '',
        },
    };
    var flag = 'root';
    cli
        .split(' ')
        .filter(Boolean)
        .forEach(function (arg, index) {
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
            if (!dynaNodeArguments.args[flag])
                dynaNodeArguments.args[flag] = '';
            return;
        }
        dynaNodeArguments.args[flag] += "" + (dynaNodeArguments.args[flag] ? ' ' : '') + arg.trim();
    });
    return dynaNodeArguments;
};
//# sourceMappingURL=buildArgsFromString.js.map