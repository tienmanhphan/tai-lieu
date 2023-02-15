function Logger(log, type = TYPE_LOG){
    console[type](log);
}
export var TYPE_LOG = 'log';
export var TYPE_WARN = 'warn';
export var TYPE_INFO = 'info';

export default Logger