#!/usr/bin/env node
import greetings from '../src/index.js';
import startCalcGame from '../src/games/calc.js';

const name = greetings();
startCalcGame(name);
