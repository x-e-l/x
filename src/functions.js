const X$call = (
    (f, $, ...$$) => f.call(null, $, ...$$)
);

const X$bind = (
    (f, $, ...$$) => f.bind(null, $, ...$$)
);

module.exports = ({
    X$call,
    X$bind,
});
