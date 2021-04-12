const fs = require("fs");

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
};
