const {frz$} = require('./u');

module.exports = frz$({
    NILMOD: 'X-NILMOD', // trying to modify Nil object
    NILKEY: 'X-NILKEY', // key was nil
});
