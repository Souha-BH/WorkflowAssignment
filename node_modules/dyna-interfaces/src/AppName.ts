import {IError} from "./IResult";

export interface IAppNameConfig {
  projectName: string;
  end: "FE" | "BE";
  machineName: string;
  mode: "PROD" | "STAGE" | "DEV";
  version: {
    major: number;
    minor: number;
    patch: number;
    flag?: string;
  },
  nameDelimiter?: string;    // default: '--'
}

export class AppName {
  private _config: IAppNameConfig;

  constructor(config?: IAppNameConfig) {
    const {
      projectName = 'UnknownProject',
      end = 'BE',
      machineName = 'UnknownMachine',
      mode = 'DEV',
      version = {major: 0, minor: 0, patch: 0},
      nameDelimiter = '--',
    } = config;

    const newConfig = {
      projectName,
      machineName,
      end,
      mode,
      version,
      nameDelimiter,
    };

    const validationError = this.validate(newConfig);
    if (validationError) throw {
      section: 'AppName/constructor',
      code: 202002229030,
      message: 'AppName: ' + validationError,
      data: {
        givenConfig: config,
        finalConfig: newConfig,
      },
    } as IError;

    this._config = newConfig;
  }

  public setConfig(config: IAppNameConfig): void {
    const validationError = this.validate(config);
    if (validationError) throw {
      section: 'AppName/setConfig',
      code: 202002229031,
      message: 'AppName: ' + validationError,
      data: {config},
    } as IError;
    this._config = config;
  }

  public updateConfig(partialConfig: Partial<IAppNameConfig>): void {
    this.setConfig({
      ...this._config,
      ...partialConfig,
    });
  }

  public getConfig(): IAppNameConfig {
    return this._config;
  }

  public parse(appName: string): void {
    const parts = appName.split(this._config.nameDelimiter);

    if (parts.length !== 4) throw {
      section: 'AppName/parse',
      code: 202002229034,
      message: 'AppName: ' + "Wrong number of parts, it should be 4.",
      data: {
        appName,
      },
    } as IError;

    const [
      projectName,
      mode,
      end,
      machineName,
    ] = parts;

    const parsedConfig: IAppNameConfig = {
      projectName,
      mode,
      end,
      machineName,
      version: {major: 0, minor: 0, patch: 0},
    } as any;

    const validationError = this.validate(parsedConfig);
    if (validationError) throw {
      section: 'AppName/parse',
      code: 202002229034,
      message: 'AppName: ' + validationError,
      data: {
        appName,
        parsedConfig,
      },
    } as IError;

    this._config = parsedConfig;
  }

  public get name(): string {
    const {
      projectName,
      mode,
      end,
      machineName = '',
    } = this._config;
    return [
      projectName,
      mode,
      end,
      machineName,
    ].join(this._config.nameDelimiter);
  }

  public get tags(): string[] {
    const {
      projectName,
      mode,
      end,
      machineName = '',
    } = this._config;
    return [
      projectName,
      mode,
      end,
      machineName,
      `v${this.version}`
    ]
  }

  public get version(): string {
    const {
      major,
      minor,
      patch,
      flag = '',
    } = this._config.version;
    return [
        major,
        minor,
        patch,
      ]
        .join('.')
      + (flag ? '-' + flag : '');
  }

  public validate(config: IAppNameConfig): string {
    const {
      nameDelimiter: delimiter,
    } = config;
    if (!config.projectName) return `projectName is required`;
    if (!config.machineName) return `machineName is required`;
    if (config.projectName.indexOf(delimiter) > -1) return `projectName should contain the '${delimiter}' char`;
    if (config.machineName.indexOf(delimiter) > -1) return `machineName should contain the '${delimiter}' char`;
    if (config.projectName.indexOf(' ') > -1) return "projectName should contain the space char";
    if (config.machineName.indexOf(' ') > -1) return "machineName should contain the space char";
    return "";
  }
}

