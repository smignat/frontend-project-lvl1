#!/usr/bin/env node
import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have your name?: ');
console.log(`Welcome to the Brain Games, ${name}!`);