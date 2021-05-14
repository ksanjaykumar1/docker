#  use an existing docker image

FROM alpine

# download and install a dependency

RUN apk add --update redis
Run apk add --update gcc

# tell the image what to do when it starts as a container
CMD ["redis-server"]