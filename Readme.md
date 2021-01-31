## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Development ](#development)

  - [App Architecture](#app-archi)
  - [API Architecture Explained](#app-exp)

  - [Running the API](#app-run)

- [Deployment ](#deployment)
  - [Deployment Architecture](#dep-archi)
  - [Deployment Architecture Explained](#dep-exp)
  - [Docker](#docker)
  - [Kubernetes GKE](#k8s)
- [Built Using](#built_using)
- [Author](#authors)

## 🧐 About <a name = "about"></a>

- This  API allow you connect to CMS module  to send  costume messages and bonus depend on what you receive in the request body 

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You need to install the fellowing software in order to get the application up and running :

- Node.js and npm.
- Docker.
- Kubernetes on cloud.

# Development <a name = "development"></a>

## APP Architecture <a name = "app-archi"></a>

- ![Alt text](./images/dte-cms.PNG?raw=true "Title")

### APP Architecture Explained <a name = "app-exp"></a>

The application architecture contain 2 part

- Node js application that connect to sql server database network using Sequelize as interface 
- the api get all the information from the body request to write it to the database 




### Installing

- Download and Install node.js and NPM from https://nodejs.org/en/download/ .

### Running the Node.js application <a name = "app-run"></a>

- Download or clone the project code from https://github.com/abdm64/CMS-API-JS.git

- Install all required npm packages by running npm install from the command line in the app folder (where the package.json is located).

```
cd api
```

```
npm install
```

- Before start the application you should change the  keys in the api/src/config folder (ip, user, password etc) in order to connect to the database.

- Start the application by running npm start from the command line in the app folder, you should see the message: "CMS API  listen on port: 3000".

```
npm start
```

- Now you have  api that connected to the database as cms module  

# 🚀 Deployment <a name = "deployment"></a>

## Deployment Architecture <a name = "dep-archi"></a>

- ![Alt text](./images/Ether-deploy.PNG?raw=true "Title")

## Deployment Architecture Explained <a name = "dep-exp"></a>

- In order to deploy this application in production we need :
  - Docker to build image for this application and push it to the docker hub or private registry .
  - Kubernetes cluster to run the application in production mode from the image that was created .

## Docker <a name = "docker"></a>

### Installing

- Download and install docker on your machine

### Build Docker image

- Build your own docker image and push it to your repo by running "docker build -t my-app-name:v1 . "
  from the command line in app folder

```
cd app
```

```
docker build -t my-app-name:v1 .
```

you need to push the image to [Docker hub](https://hub.docker.com) or your own registry .

### Run Docker image

- Run your Docker image for the application by the command line

```
docker run -e [inject your env variable here] my-app-name:v1
```

### Docker compose

- Also you can run the application as service by running

```
docker-compose up
```

and the docker-compose.yaml handle all the task for you

- to drop the running container use the command

```
docker-compose  down
```

## Kubernetes GKE <a name = "k8s"></a>

- you should have access to Kubernetes cluster GKE or you can download and install minikube in your machine

- Please fellow the instruction in the eth-app.yaml file in the k8s folder to update all information needed ( env var ) in order to the application work on Kubernetes cluster

- To run the application on Kubernetes cluster ( GKE) just run the fellowing command

```
kubectl apply -f k8s
```

- this will create 3 Kubernetes objects:

  - Deployment for the application with one pod ( running container) insuring high availability for that service.
  - Secret to store all you secret data including username password etc
  - Namespace a virtual cluster for all your resource related to this application ( in our case the secret and the deployment )
  - Cluster ip service that connected to the pod .
  - ingress service that connect the cluster ip service with ingress-nginx load balancer .
- to drop the application just run the command :

```
kubectl delete  -f k8s
```

## ⛏️ Built Using <a name = "built_using"></a>

- [sequelize](https://sequelize.org) - promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

- [NodeJs](https://nodejs.org/en/) - Server side environment for javascript .
- [Docker](https://www.docker.com/) - Software platform for building and packaging applications.
- [Kubernetes](https://kubernetes.io/) - Container Orchestration.

## ✍️ Author <a name = "authors"></a>

- [@abdm64](https://github.com/abdm64) Backend | DevOps Engineer @ [Djezzy](http://www.djezzy.dz/)

Made with ❤️ by Abdellah
