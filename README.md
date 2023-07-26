# interview-backend-express

Preparing for interview backend using nodejs express

# Docker Build

docker build . -t helloamarnath/backendinterview

# see the docker image

docker images

# run the node docker in port 3000

docker run -p 3000:3000 -d helloamarnath/backendinterview

# check the running docker containers

docker ps -a

# kill docker container by container ID

docker kill <containerid>

# Remove docker container by id

docker rm <containerid>

# List all images

docker images -a

# install redis in docker
