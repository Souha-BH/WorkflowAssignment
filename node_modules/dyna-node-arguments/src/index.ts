import { buildArgsFromString } from "./buildArgsFromString";

export const dynaNodeArguments = buildArgsFromString(process.argv.join(' '));
