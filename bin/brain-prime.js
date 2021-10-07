#!/usr/bin/env node
import { greetings } from '../src/index.js';
import startPrimeGame from '../src/games/prime.js';

const name = greetings();
startPrimeGame(name);
