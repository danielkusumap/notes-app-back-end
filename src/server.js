const Hapi = require("@hapi/hapi");
const routes = require("./route.js");
const init = async () => {
  const server = new Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ['*'],
      },
    }
  });
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
// const y = require("./route.js");
// console.log(y())
// console.log(y())
// console.log(y())
// y()