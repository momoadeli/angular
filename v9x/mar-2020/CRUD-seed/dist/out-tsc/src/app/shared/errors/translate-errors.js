export function getClientMessage(error) {
    if (!navigator.onLine) {
        return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
}
export function getClientStack(error) {
    return error.stack;
}
export function getServerMessage(error) {
    return error.message;
}
export function getServerStack(error) {
    // handle stack trace
    return 'stack';
}
//# sourceMappingURL=translate-errors.js.map