FROM node as builder
RUN mkdir /build
WORKDIR /build
COPY . /build
#COPY .npmrc /root/.npmrc
RUN npm install
RUN npm run-script build

FROM node
RUN mkdir /app
WORKDIR /app
COPY --from=builder /build/dist /app/dist
COPY --from=builder /build/node_modules /app/node_modules
COPY api /app/api
COPY server.js /app
EXPOSE 3000
CMD ["npm", "start"]