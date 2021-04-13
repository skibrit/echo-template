const config = require("config");
const FileManager = require("../utils/FileManager");

(async function () {
  try {
    const filePath = `${__dirname}\\root.js`;
    const dirName = `${__dirname}/script`;
    const userScriptFilePath = `${dirName}/userScript.js`;
    const userScript = config.get("UserScript");
    const content = `
                    // ==UserScript==
                    // @name         ${
                      userScript.title || Date.now() + "_userScript"
                    }
                    // @namespace    http://tampermonkey.net/
                    // @version      0.1
                    // @description  ${userScript.description}
                    // @author       ${userScript.author}
                    // @match        ${userScript.websiteURL}
                    // @require      file://${filePath}
                    // @icon         ${userScript.icon}
                    // @grant        ${userScript.grant}
                    // ==/UserScript==
                  `;
    await FileManager.createDirectory(dirName);
    const result = await FileManager.writeFile(userScriptFilePath, content);
    if (result) {
      console.log(`User Script Has been generated Successfully`);
    }
  } catch (e) {
    console.log(e);
  }
})();
