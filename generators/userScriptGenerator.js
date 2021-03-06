const config = require("config");
const FileManager = require("../utils/FileManager");
const path = require("path");
const { structureFiles } = require("./constants");

(async function () {
  try {
    const pType = config.get("Project_Type") - 1;
    const scriptFolder = config.get("useBabel") ? "dist" : "src";
    const filePath = path.join(
      __dirname,
      `../`,
      `${scriptFolder}/js/${structureFiles[pType]}.js`
    );
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
