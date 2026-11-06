# ci-cd-for-music-streaming-app

### To run the server
#### Run 'node server.js' and visit http://localhost:3000

### To test the server
#### Run 'npm test'
![alt text](image.png)

### Containerize the application
#### Build the container
- docker build -t nodejs-cicd .
#### Run the container
- docker run -p 3000:3000 nodejs-cicd