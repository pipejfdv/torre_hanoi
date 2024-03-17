import { Game } from './game.js';

const config = {
    type : Phaser.Auto,
    with: 600,
    height: 500,
    scene : [Game],
    physics : {
        default:'arcade',
        arcade:{
            gravity:{y:400},
            debug:false
        }
    }
}

// crear el juego declarandolo
var game = new Phaser.Game(config);