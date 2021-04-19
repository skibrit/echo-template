const config = require("config");
const path = require("path");
const { readFile, writeFile } = require("../utils/FileManager");
const { structureFiles } = require("./constants");
const { concatenateString } = require("../utils/StringManipulator");

(async function updateCssWatcher() {
  try {
    const pType = config.get("Project_Type") - 1;
    const scriptFolder = config.get("useBabel") ? "dist" : "src";
    const jsFilePath = path.join(
      __dirname,
      `../`,
      `${scriptFolder}/js/${structureFiles[pType]}.js`
    );
    const jsFileContent = await readFile(jsFilePath);
    const cssFilePath = path.join(__dirname, `../`, `src/styles/main.css`);
    const cssFileContent = await readFile(cssFilePath);
    // update css on js file
    const updateJsFileContent = jsFileContent.replace(
      /`[^)]*`/,
      `\`${cssFileContent}\``
    );
    // write the updated file
    await writeFile(jsFilePath, updateJsFileContent);
    console.log(`JS File Updated Successfully`);
  } catch (e) {
    console.log("Error", e);
  }
})();
