/* eslint-disable global-require */
// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    route.title = `${route.title || 'GEHMI - Interview Questions'}`;
    route.description = route.description || '';

    return route;
  },

};
