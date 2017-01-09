const nodeModules= '../../node_modules/';
require(nodeModules + 'phaser/dist/modules/phaser.js');

//doesn't work as expected => learn vendorstuff + webpack
//try lodash for testing vendor + call in typescript to test
//todo add other vendor-dependencies here