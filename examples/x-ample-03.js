const X$ = require('../src/x');


const log = (
    ($, n) => {

        const {mget, pget, call} = X$;

        const f = mget($, X$._call_);
        const a = pget($, 'a');
        const b = pget($, 'b');

        return console.log({
            [n + '.*protos']: mget($, X$._protos_),
            [n + '.*2str()']: call(mget($, X$._2str_), $),
            [n + '.*call']:   f,
            [n + '()']:       call(f, $),
            [n + '(0)']:      call(f, $, 0),
        })
    }
);

const Adder = X$.c(
    function Adder(a) {

        const $ = X$.Fun(
            ($, b) => b - 0 + X$.pget($, 'fixed'),
            {[X$._key_]: 'fixed', [X$._val_]: a}
        );

        Adder[X$._metas_][X$._mutas_].mset($, X$._protos_, X$.padd($, Adder,));
        return $;
    }
);

log(Adder(30), 'adder30');
log(Adder(40), 'adder40');

