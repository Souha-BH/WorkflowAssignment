import { IError } from "./IResult";
export interface IResponse<TData, TAuth> {
    command?: string;
    status?: number;
    data?: TData;
    schema?: string;
    completed?: boolean;
    auth?: TAuth;
    error?: IError;
    _debugData?: any;
}
