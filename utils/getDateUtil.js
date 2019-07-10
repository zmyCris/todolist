const moment = require('moment');

module.exports = function (mark) {
    if (mark === 1) {
        return moment().format('MM/DD');
    }
    return moment().format('YYYY/MM/DD HH:mm');
};