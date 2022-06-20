const pako = require('pako');

const test = { my: 'super', puper: [456, 567], awesome: 'pako' };

export const compressed = pako.deflate(JSON.stringify(test));

export const restored = JSON.parse(pako.inflate(compressed, { to: 'string' }));
