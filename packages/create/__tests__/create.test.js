'use strict';

const create = require('../index.js');

describe('@lerna/create', () => {
    it('needs tests', () => {
        expect(create()).toBe("create")
    });
});
