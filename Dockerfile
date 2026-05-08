FROM node:22-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-slim AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/persona ./persona
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json ./package.json
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "server.js"]
