const fs = require('fs');
const path = require('path');
const data = require('./user-data-structure.json');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createFilesRecursively(node, currentPath) {
  if (node.type === 'folder' && node.children) {
    node.children.forEach((child) => {
      const childPath = path.join(currentPath, child.name);

      if (child.type === 'folder') {
        // Create a folder if it doesn't exist
        if (!fs.existsSync(childPath)) {
          fs.mkdirSync(childPath, { recursive: true });
        }
        // Recursively create files within this folder
        createFilesRecursively(child, childPath);
      } else if (child.type === 'file') {
        // Create a file within the current folder
        fs.writeFileSync(childPath + '.mdx',
          `---
title: ${capitalizeFirstLetter(child.name.replaceAll('-', ' '))}
# description: 
slug: ${childPath}
---

`
        );
      }
    });
  }
}

// Call the function to start creating files based on the structure
createFilesRecursively(data, 'user');

console.log('Files and folders have been created.');
