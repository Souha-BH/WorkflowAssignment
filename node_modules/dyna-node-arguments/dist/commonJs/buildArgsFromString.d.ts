export interface IDynaNodeArguments {
    node: string;
    app: string;
    args: {
        root: string;
        [flag: string]: string;
    };
}
export declare const buildArgsFromString: (cli: string) => IDynaNodeArguments;
