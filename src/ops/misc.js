const {nil, frz$} = require('../u');

const {X$itr2set, X$props} = require('../boot');


const X$df = (
    ($default, $value) => nil($value) ? $default : $value
);


module.exports = frz$({
    X$df,
});
