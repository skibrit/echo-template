const fs = require("fs");
const mkdirp = require("mkdirp");

const createDirectory = (dirName) => {
  return new Promise(async function (resolve, reject) {
    if (!fs.existsSync(dirName)) {
      await mkdirp(dirName);
      console.log(`Created a directory named ${dirName}`);
      resolve(true);
    } else {
      resolve(true);
    }
  });
};

const writeFile = (destPath, data) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(destPath, data, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  writeFile,
  createDirectory,
};
