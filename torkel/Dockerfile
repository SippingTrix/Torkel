FROM alpine:latest

RUN mkdir -p /torkel

WORKDIR /torkel

COPY . ./torkel

RUN apk add --update nodejs npm \
    && npm install

EXPOSE 3000

CMD npm start
