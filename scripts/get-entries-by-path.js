const fs = require('file-system');
const kebabCase = require('just-kebab-case');

const getRoutesOfIndex = ({ rootPath, fileContent }) => fileContent
  .split('\n')
  .filter(each => each.includes('from'))
  .map((each) => {
    let routes = [];

    const [otherImport, rowRoute] = each.split('from');

    const route = rowRoute
      .replace(/'/g, '')
      .replace(/"/g, '')
      .replace(/;/g, '')
      .replace('./', '')
      .trim();

    routes.push(`${rootPath}/${route}`);

    if (otherImport.match(/import(.*?)\{(.*?)\}/g)) {
      const subImports = otherImport
        .replace(/import(.*?)\{(.*?)\}/g, (match, param1, param2) => param2.trim())
        .split(',')
        .map(subImport => `${rootPath}/${route}/${kebabCase(subImport.trim())}`);

      routes = [
        ...routes,
        ...subImports,
      ];
    }

    return routes;
  })
  .flat();

const getEntriesByPath = (rootPath) => {
  const entries = {
    index: `${rootPath}/index.js`,
  };

  const indexContent = fs.readFileSync(`${rootPath}/index.js`, 'utf8');

  const fileLinesWithImports = getRoutesOfIndex({ rootPath, fileContent: indexContent });

  fileLinesWithImports.forEach((line) => {
    const splitRoute = line.split('/');
    const name = splitRoute[splitRoute.length - 1];

    entries[name] = `${line}/index.js`;
  });

  return entries;
};

module.exports = getEntriesByPath;
