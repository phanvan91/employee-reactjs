const context = require.context("modules/", true, /route.js$/);

let AppPaths = {};
let routes = []
let configs = []

context.keys().forEach(path => {
  path = path.replace('./', '')
  if (!path.includes('modules/')) {
    let paths = require('modules/' + path.replace('./', '')).path;
    routes.push(paths)

    try {
      paths = require(('modules/' + path.replace('./', '').replace('route', 'config'))).default;
      configs.push(paths.key)
    } catch (e) {
      configs.push(null)
    }
  }
});

routes.forEach((route, index) => {
  if (configs[index]) {
    AppPaths[configs[index]] = route
  } else {
    Object.assign(AppPaths, route)
  }
});

export default AppPaths;
