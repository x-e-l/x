const {X$Cst, X$O, X$toses, X$2str, X$pset, X$first, X$kv2ref, X$ref2v} = require('../../src/x');

const Car = X$Cst(function Car($, ...$$) {
    $ = X$pset($, 'name', X$ref2v(X$first($$)));
    return $;
});

const c = Car(
    X$O(),
    X$kv2ref('model', 'Model T')
);

console.log({'Car.*toses': X$toses(Car), 'Car.*2str()': X$2str(Car)});
console.log({'c.*toses': X$toses(c), 'c.*2str()': X$2str(c)});

