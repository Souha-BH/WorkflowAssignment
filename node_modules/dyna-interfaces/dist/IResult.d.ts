export interface IResult<TData> {
    success?: boolean;
    type?: string;
    data?: TData;
    log?: ILog;
    info?: IInfo;
    warn?: IWarn;
    error?: IError;
    debug?: IDebug;
}
export interface ILog {
    code?: number | string;
    section?: string;
    message?: string;
    userMessage?: string;
    data?: any;
}
export interface IInfo extends ILog {
    progress?: number;
    values?: any;
}
export interface IWarn extends ILog {
}
export declare enum EErrorType {
    USER = "USER_ERROR",
    APP = "APP_ERROR",
    HW = "HW_ERROR"
}
export interface IError extends ILog {
    status?: number;
    error?: Error | any;
    errorType?: EErrorType;
    networkStatus?: number;
}
export interface IDebug extends ILog {
}
