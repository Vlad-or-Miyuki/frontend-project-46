import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const readFile = (filePath) => {
  const pathToFile = path.resolve(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
};

const genDiff = (filePath1, filePath2) => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);

  const keys = (_.union(_.keys(data1), _.keys(data2))).sort();
  const diffObj = keys.map((key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
        return `- ${key}: ${data1[key]}`;
    }

    if (_.has(data2, key) && !_.has(data1, key)) {
        return `+ ${key}: ${data2[key]}`
    }

    if (data1[key] !== data2[key]) {
        return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;

    }

    return ` ${key}: ${data1[key]}`;
  })

  return diffObj;
};

export default genDiff;

// file1.json => directory/file1.json
// directory - текущая папка - получаем через process.cwd()
// file1.json - файл в текущей папке
// papka/file1.json => directory/papka/file1 - json
// path.resolve() - склеивает фрагменты в путь