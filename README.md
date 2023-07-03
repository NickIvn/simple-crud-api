## Install the application

* clone repository: `git clone https://github.com/NickIvn/simple-crud-api.git`
* switch to branch: `git checkout develop`
* open project: `cd simple-crud-api`

# Install dependecies
`npm install`

(!) Make sure to copy `.env.example` to `.env` and update the port value if needed.

`cp .env.example .env`

## Run the application

1. Run the application in development mode:
`npm run start:dev`

This command will run the application in development mode with `nodemon` and `ts-node` packages on a port from `.env`.

   By default, it will run on http://localhost:4000/api/users.

2. Run the application in production mode:

   `npm run start:prod`
   
   This command will build the application using `webpack` to the `build/bundle.js` file and run it.

   By default, it will run on http://localhost:4000/api/users.

3. Run the application in a multi-node `Cluster` environment:

    `npm run start:multi`
    
    This command will create 1 master process and `N` workers in a cluster, where `N` is the number of logical CPU cores.

    Master node will start on `API_PORT` from `.env` file and workers will start on `API_PORT + %worker_index%` port.

    Workers will use the in-memory database, located in master process.

    Master process load balances requests between workers using `Round Robin` algorithm.

    By default, load balancer will run on http://localhost:4000/api/users.

## Test the application

`npm run test`
