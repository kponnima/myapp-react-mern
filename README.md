
# MyApp
Personal project using ReactJS to render SPA using the below key components.

## Key components
`React App`
* Calls API and deals with responses  [Passes JWT token for protected routes]
* Stores JWT in order to maintain user's session
* Checks the validity of JWT when displaying protected views

`Jest`
* Snapshot testing integrated. [`\src\__tests__\__snapshots__`] has the latest snapshot results saved.
* Comes with JSDom configured, meaning you can write browser tests but run them through Node, can deal with asynchronous tests and has advanced features such as mocking, spies and stubs built in

### Startup Screen
![Alt text](/screenshots/loading.jpg?raw=true "Loading Screen")
### Login Screen
![Alt text](/screenshots/login.jpg?raw=true "Login Screen")
### Home Screen
![Alt text](/screenshots/home.jpg?raw=true "Home Screen")

---
## Development server
* Run `ng build` to build the project. The build artifacts will be stored in the `build/` directory.

* Run `ng start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source[`\src`] files.

  To test docker build locally
* Run `docker build -t myapp-react-mern .` to build locally.
* Run `docker run --rm -it -p 8080:80 react-nginx` to  run locally.
* Navigate to `http://localhost:8080`.
---
## Docker/Kubernetes build
* Run `docker build -t myapp-react-mern .` to create docker image.

-- Docker Hub
* Run `docker tag myapp-react-mern kponnima86/myapp-react-mern:latest` to tag the image with hostname & port of docker registry(docker hub).
* Run `docker login` to connect to docker registry.
* Run `docker push kponnima86/myapp-react-mern:latest` to push the image to local docker registry.

-- kubernetes Docker cluster (Alt)
* Run `kubectl config use-context docker-for-desktop` if using kubernetes docker cluster.

* Run `kubectl apply -f kubernetes/deployment.yaml` to deploy the react application.
* Run `minikube service myapp-react-mern --url` to get the deployed service url.
Note: Since we are using Docker driver on darwin, the terminal needs to be open to run it.
* Navigate to `deployed service url` to view the application in browser.
-- Alt
* Run `kubectl port-forward svc/myapp-react-mern 8080:8080` to map the service to localhost
* Navigate to `http://localhost:8080` to view the application in browser.
---
## Production build
You may serve it with a static server:
`npm install -g serve` Pre-requisite
`serve -s build`