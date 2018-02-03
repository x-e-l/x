const X$ = require('../src/x');


const log = (
    ($, n) => {

        const {mget, pget, call} = X$;

        const f = mget($, X$._call_);
        const a = pget($, 'a');
        const b = pget($, 'b');

        return console.log({
            [n + '.*protos']:  mget($, X$._protos_),
            [n + '.*props']:   mget($, X$._props_),
            [n + '.*2str()']:  call(mget($, X$._2str_), $),
            [n + '.*call']:    f,
            [n + '()']:        call(f, $),
            [n + '($.a,$.b)']: call(f, $, a, b),
        })
    }
);

const Person = X$.c(
    ($) => {

        const {pset} = Person[X$._metas_][X$._mutas_];

        $ = X$.Obj($);

        pset($, 'a', 3);
        pset($, 'b', 4);

        return $;

    }
);

log(Person(X$.O()), 'person');

