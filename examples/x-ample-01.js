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
            [n + '(0)']:       call(f, $, 0),
        })
    }
);

[
    [X$.O(), X$.Obj, 'o'],
    [X$.O(), X$.Nil, 'n'],
    [X$.O(), X$.Arr, 'a'],
    [($, a, b) => a - 0 + b, X$.Fun, 'f'],
    [($) => X$.pget($, 'a') - 0 + X$.pget($, 'b'), X$.Fun, 'g'],
].map(([$, C, name]) => log(
    C(
        $,
        {[X$._key_]: 'a', [X$._val_]: 1,},
        {[X$._key_]: 'b', [X$._val_]: 2,},
    ),
    name
));


