FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN apt-get update
RUN apt-get install yarn -y
RUN yarn

EXPOSE 3000

ENTRYPOINT ["yarn"]
CMD ["dev"]
