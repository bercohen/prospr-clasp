const fs = require("fs");
const path = require("path");

function updateAppsscriptJson(projectDirectory) {
  const appsscriptJsonPath = path.join(projectDirectory, "appsscript.json");

  // Read the existing appsscript.json file
  const appsscriptData = JSON.parse(
    fs.readFileSync(appsscriptJsonPath, "utf8")
  );

  // Update the library version (replace with your library information)
  appsscriptData.dependencies.libraries[0].version = "1";

  // Write the updated appsscript.json file
  fs.writeFileSync(appsscriptJsonPath, JSON.stringify(appsscriptData, null, 2));

  console.log(
    "appsscript.json updated successfully in " + projectDirectory + "."
  );
}

// Usage: node update_appsscript.js /path/to/project
if (process.argv.length !== 3) {
  console.log("Usage: node update_appsscript.js /path/to/project");
  process.exit(1);
}

const projectDirectory = process.argv[2];
updateAppsscriptJson(projectDirectory);
