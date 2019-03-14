# Ecosia Kubernetes assignment

You can skip to DevOps section to find the all in one script.

## Development

To run:

    npm install
    npm start

The rest API will be available at:

    http://localhost:3000

To test:

    npm test

## API

The following URIs are available:

- / - root URI, with a HATEOAS description to the others
- /trees - list of trees
- /trees/x - tree with id x, or 404 (Not Found), if there is no such tree

## Deployment

To build a Docker image named trees:

    docker build -t trees .

To run a Kubernetes deployment with the local image:

    kubectl run trees --image=trees --image-pull-policy=Never

To expose it as a service:

    kubectl expose deployment trees --port 80 --target-port=3000

To expose the service outside the cluster throught a ingress, routing by local.ecosia.org host header

    kubectl apply -f ingress.yml

And to access it via Curl:

    curl -H Host:local.ecosia.org http://localhost

Or set local.ecosia.org as the domain name to cluster IP, throught /etc/hosts (Linux) or a DNS server, and access:

    http://local.ecosia.org

## DevOps

The deploy.sh script runs all the commands for Deployment:

    sh deploy.sh

## Versions

Tools/libraries:

- NodeJS: 10.15.3 LTS
- NPM: 6.4.1
- ExpressJS: 4.16.4

Testing:

- Mocha: 6.0.2
- Supertest: 4.0.0

Deploy:

- Docker: 18.09.2
- Kubernetes: 1.13.4