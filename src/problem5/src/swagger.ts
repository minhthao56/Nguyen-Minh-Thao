import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API',
        description: 'Description'
    },
    host: 'localhost:7070/api/v1',
};

const outputFile = './swagger-output.json';
const routes = ['./app.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({
    openapi: '3.0.0'
})(outputFile, routes, doc);