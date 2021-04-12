const config = require("config");
const projectType = config.get("Project_Type");
const structureFiles = [
  "../src/basicStructure",
  "../src/basicStructure-jQuery",
  "../src/basicStructure - Optimizely",
  "../src/basicStructure - DY",
];

// [1 = "basic" || 2 = "basic + jquery" || 3 = "basic + optimizely" || 4 = "basic + dy"]
require(structureFiles[projectType - 1]);
