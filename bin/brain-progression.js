#!/usr/bin/env node
import { greetings } from '../src/index.js';
import startProgressionGame from '../src/games/progression.js';

const name = greetings();
startProgressionGame(name);
