const fs = require("fs");
const path = require("path");

function updateAppsscriptJson(projectDirectory, libraryVersion) {
  const appsscriptJsonPath = path.join(projectDirectory, "appsscript.json");

  // Read the existing appsscript.json file
  const appsscriptData = JSON.parse(
    fs.readFileSync(appsscriptJsonPath, "utf8")
  );

  // Update the library version based on the argument
  appsscriptData.dependencies.libraries[0].version = libraryVersion;

  // Write the updated appsscript.json file
  fs.writeFileSync(appsscriptJsonPath, JSON.stringify(appsscriptData, null, 2));

  console.log(
    "appsscript.json updated successfully in " + projectDirectory + "."
  );
}

// Usage: node update_appsscript.js /path/to/project libraryVersion
if (process.argv.length !== 4) {
  console.log(
    "Usage: node update_appsscript.js /path/to/project libraryVersion"
  );
  process.exit(1);
}

const projectDirectory = process.argv[2];
const libraryVersion = process.argv[3];
updateAppsscriptJson(projectDirectory, libraryVersion);
