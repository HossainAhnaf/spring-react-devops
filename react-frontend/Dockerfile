FROM node:16.13.1 AS base 

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


FROM base AS dev

EXPOSE 4200

CMD ["npm", "start"]


FROM base AS build

RUN npm run build


FROM node:16-alpine AS prod 

WORKDIR /app

COPY --from=build /app/built ./built

RUN npm install -g serve

EXPOSE 4200

CMD ["serve", "-s", "-l", "4200", "built"]
