# Ecosia

Ecosia assignment

To run:

    npm install
    npm start

The rest API will be available at:

    http://localhost:3000

To test:

    npm test

To build a Docker image:

    docker build -t <image> .

To run a Docker container:

    docker run -p 3000:3000 <image>

Tools/libraries:

- NodeJS: 10.15.3 LTS
- NPM: 6.4.1
- ExpressJS: 4.16.4

Testing:

- Mocha: 6.0.2
- Supertest: 4.0.0

Deploy:

- Docker: 18.09.2