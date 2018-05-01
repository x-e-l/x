const {frz$} = require('./u');

module.exports = frz$({

    ...require('./boot'),
    ...require('./csts/bul'),
    ...require('./ops/logic'),

});
