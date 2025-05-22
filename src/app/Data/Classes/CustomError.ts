export default class CustomError extends Error {
    override name: string= 'CustomError';
    override message: string;
    error: {detail: string};
    constructor(exception : string) {
        super();
        this.message = exception;
        this.error = {detail: exception}
    }
}