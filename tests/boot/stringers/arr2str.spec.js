const {_metas_, _props_, _toses_} = require('../../../src/symbols');
const {X$arr2str} = require('../../../src/boot/stringers');

describe('stringers.arr2str', () => {

    const vtag = '𝛼';
    const ntag = '⦰';

    it('returns a string for an empty array', () => {

        expect(X$arr2str([])).toBe(`${vtag}[]${vtag}`);

    });

    it('returns a string for an array', () => {

        const a = 1;
        const b = '2';

        const arr = {a, b, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$arr2str(arr)).toBe(`${vtag}(2)[a:1,b:2]${vtag}`);

    });

    it('returns a string for an array ignoring unregistered properties', () => {

        const a = 1;
        const b = '2';
        const c = null;

        const arr = {a, b, c, [_metas_]: {[_props_]: ['a', 'b']}};

        expect(X$arr2str(arr)).toBe(`${vtag}(2)[a:1,b:2]${vtag}`);

    });

    it('returns a string for an object with tosses', () => {

        const a = 1;
        const b = '2';
        const c = (function C() {
        });
        const d = (function D() {
        });

        const toses = [c, d];
        const metas = {
            [_props_]: ['a', 'b'],
            [_toses_]: toses,
        };

        const arr = {a, b, [_metas_]: metas};

        expect(X$arr2str(arr)).toBe(`D:${vtag}(2)[a:1,b:2]${vtag}`);

    });

    it('returns nil string representation for null', () => {

        expect(X$arr2str(null)).toBe(`${ntag}(null)${ntag}`);

    });

    it('returns nil string representation for undefined', () => {

        expect(X$arr2str()).toBe(`${ntag}(undefined)${ntag}`);

    });

});


