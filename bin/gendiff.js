#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
    .name('gendiff')
    .arguments('<filepath1> <filepath2>')
    .version('1.0.0', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference')
    .option('-f, --format <type>', 'output format')
    .option('-h, --help', 'output usage information')
    .help()

program.parse(process.argv);

const { filepath1, filepath2 } = program.opts();

const genDiff = (file1, file2) => {
    // Здесь должен быть ваш код для сравнения файлов
    return `Diff between ${file1} and ${file2}`;
};

const diff = genDiff(filepath1, filepath2);

console.log(diff);
