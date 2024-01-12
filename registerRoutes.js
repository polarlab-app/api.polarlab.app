const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    const dirPath = path.join(__dirname, 'routes');

    // Recursive function to read all files in a directory and its subdirectories
    function readDirRecursively(dir) {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);
   
        if (stats.isDirectory()) {
          // If the item is a directory, recursively read its contents
          readDirRecursively(itemPath);
        } else if (stats.isFile() && path.extname(item) === '.js') {
          // If the item is a .js file, register the route
          const routeName = '/' + path.relative(dirPath, itemPath).replace(/\\/g, '/').replace('.js', '');
          const routeModule = require(itemPath);
          app.use(routeName, routeModule);
        }
      });
    }
   
    readDirRecursively(dirPath);
}