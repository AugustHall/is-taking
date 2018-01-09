# Build image:
# docker build -t standupbot --no-cache --pull .

# Run container from image:
# docker run -it --rm -v $(pwd):/app -p 9229:9229 standupbot

FROM node:latest

LABEL Maintainer="Tory & August"
LABEL Description="Slack standup bot"

# Move this to compose or some other secret system.
ENV SLACK_TOKEN="xoxb-293732600241-RDTPmLHP1t1fJRNfWdFdczTP"

ENV APP_HOME /app
WORKDIR $APP_HOME/

COPY package.json package-lock.json ./

RUN npm install

VOLUME $APP_HOME/node_modules

COPY . ./

# node inspect debug port
EXPOSE 9229

ENTRYPOINT ["npm", "run"]
CMD ["start"]
