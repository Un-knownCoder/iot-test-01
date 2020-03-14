import chalk from 'chalk';

export const i = chalk.yellowBright(' ◧ mqtt');
export const o = chalk.yellowBright(' ◨ mqtt');
export const q = chalk.rgb(130, 224, 255)(' ◐ http');
export const a = chalk.rgb(130, 224, 255)(' ◑ http');
export const u = chalk.redBright(' ☣ post');
export const w = chalk.greenBright(' ✱ warn');
// ◉◈
export function cg (text) {return chalk.grey(text);} 
export function cr (text) { return chalk.redBright(text); } 