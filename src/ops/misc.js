const {nil, frz$} = require('../u');


const X$df = (
    ($default, $value) => nil($value) ? $default : $value
);


module.exports = frz$({
    X$df,
});
