FROM node
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY .npmrc /root/.npmrc
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]