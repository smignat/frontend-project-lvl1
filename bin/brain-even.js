#!/usr/bin/env node
import greetings from '../src/index.js';
import startEvenGame from '../src/games/even.js';

const name = greetings();
startEvenGame(name);
