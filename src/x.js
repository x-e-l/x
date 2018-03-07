module.exports = Object.freeze({
    // no imports
    ... require('./symbols'),
    ... require('./boot/functions'),
    ... require('./boot/arrays'),
    // single import
    ... require('./boot/predicates'),
    ... require('./boot/transformers'),
    // triple and multiple imports
    ... require('./boot/getters'),
    ... require('./boot/setters'),
    ... require('./boot/objects'),
    ... require('./boot/stringers'),
    ... require('./boot/constructors'),
});
