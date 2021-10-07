#!/usr/bin/env node
import { greetings } from '../src/index.js';
import startGcdGame from '../src/games/gcd.js';

const name = greetings();
startGcdGame(name);
