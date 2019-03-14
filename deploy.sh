#!/bin/sh

echo 'Building Docker image...'
docker build -t trees .

echo 'Starting Kubernetes deployment...'
kubectl run trees --image=trees --image-pull-policy=Never
echo 'Waiting 10 seconds for services to convert...'
sleep 10

echo 'Creating Kubernetes service...'
kubectl expose deployment trees --port 80 --target-port=3000
echo 'Waiting 10 seconds for services to convert...'
sleep 10

echo 'Exposing service throught ingress...'
kubectl apply -f ingress.yml
echo 'Waiting 10 seconds for services to convert...'
sleep 10

echo 'Fetching /trees'
curl -H Host:local.ecosia.org http://localhost/trees

echo ''
echo 'Done'
