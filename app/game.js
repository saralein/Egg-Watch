var pixi = require('pixi.js');
var p2 = require('p2');
var Phaser = require('phaser');
// new Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig)

let width = 1400,
    height = 600;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'eggy', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}
