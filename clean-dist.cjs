const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

fs.rm(distPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error deleting dist folder:', err);
  } else {
    console.log('Dist folder deleted successfully.');
  }
});
