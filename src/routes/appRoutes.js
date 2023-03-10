const context = require.context("modules/", true, /route.js$/);

let AppRoutes = [];

context.keys().forEach((path) => {
  path = path.replace('./', '')
  if (!path.includes('modules/')) {
    let routes = require('modules/' + path.replace('./', '')).default;
    if (Array.isArray(routes)) {
      AppRoutes.push(...routes)
    } else {
      AppRoutes.push(routes)
    }
  }
});

export default AppRoutes;
