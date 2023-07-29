'use strict';

const init = require('..');

describe('@lerna/init', () => {
    it('needs tests', () => {
        expect(init()).toBe("init")
    });
});
