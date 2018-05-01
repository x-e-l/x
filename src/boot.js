const {frz$} = require('./u');

module.exports = frz$({
    // top
    ...require('./symbols'),
    // no imports
    ...require('./boot/functions'),
    ...require('./boot/arrays'),
    // single import
    ...require('./boot/predicates'),
    ...require('./boot/transformers'),
    // w/ more imports
    ...require('./boot/getters'),
    ...require('./boot/setters'),
    ...require('./boot/objects'),
    ...require('./boot/stringers'),
    ...require('./boot/archetypes'),
});
