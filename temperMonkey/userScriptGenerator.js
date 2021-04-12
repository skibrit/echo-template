const config = require("config");
const FileManager = require("../utils/FileManager");

(async function () {
  try {
    const filePath = `${__dirname}\\root.js`;
    const userScriptFilePath = `${__dirname}/script/userScript.js`;
    const userScript = config.get("UserScript");
    console.log(`File Path `, filePath);
    const content = `/* COPY & PASTE THE CODE IN A NEW TEMPER MONKEY SCRIPT */
    
                    // ==UserScript==
                    // @name         ${userScript.title}
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
    const result = await FileManager.writeFile(userScriptFilePath, content);
    if (result) {
      console.log(`User Script Has been generated Successfully`);
    }
  } catch (e) {
    console.log(e);
  }
})();
