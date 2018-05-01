const {X$O, X$Obj, X$Nil, X$Arr, X$Fun, X$Cst} = require('../../src/boot/archetypes');
const {X$kv2ref, X$ref2k, X$ref2v} = require('../../src/boot/transformers');
const {X$2str} = require('../../src/boot/objects');


describe('stringers together return appropriate string representation', () => {

    const nothing = null;
    const empty = X$Obj();
    const nil = X$Nil();
    const array = X$Arr();
    const fn = X$Fun();

    const complex = X$O(
        X$kv2ref('a', nothing),
        X$kv2ref('b', empty),
        X$kv2ref('c', nil),
        X$kv2ref('d', array),
        X$kv2ref('e', fn),
    );

    it('for a complex object with simple properties', () => {

        expect(
            X$2str(complex)
        ).toBe(
            '𝜔{a:⦰(null)⦰,b:𝜔{}𝜔,c:∅,d:𝛼[]𝛼,e:𝜆($ => $)𝜆}𝜔'
        );

    });

    it('for a trivial object with complex properties', () => {

        expect(X$2str({complex, nothing})).toBe('⦰([object Object])⦰');

    });

    it('for a non-trivial object with complex properties', () => {

        const object = X$Obj({p: 1, q: 2}, X$kv2ref('complex', complex));

        expect(
            X$2str(object)
        ).toBe(
            '𝜔{p:1,q:2,complex:𝜔{a:⦰(null)⦰,b:𝜔{}𝜔,c:∅,d:𝛼[]𝛼,e:𝜆($ => $)𝜆}𝜔}𝜔'
        );

    });

    it('for a constructed _obj_ object with complex properties', () => {

        // eslint-disable-next-line prefer-arrow-callback
        const Construct = X$Cst(function Test(...$$) {
            return X$Obj(X$Obj({p: 1, q: 2}), ...$$);
        });

        const object = Construct(X$kv2ref('complex', complex));

        expect(
            X$2str(object)
        ).toBe(
            'Test:𝜔{p:1,q:2,complex:𝜔{a:⦰(null)⦰,b:𝜔{}𝜔,c:∅,d:𝛼[]𝛼,e:𝜆($ => $)𝜆}𝜔}𝜔'
        );

    });

    it.skip('for a constructed _arr_ object with complex properties', () => {

        // eslint-disable-next-line prefer-arrow-callback
        const Construct = X$Cst(function Test($, ...$$) {
            $.push(...$$.map($ => [X$ref2k($), X$ref2v($)]));
            return $;
        });

        const a = Construct(X$Arr(), X$kv2ref('complex', complex));

        expect(
            X$2str(a)
        ).toBe(
        );

    });

});
