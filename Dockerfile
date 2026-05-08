FROM node:22-slim AS build
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM node:22-slim AS runtime
RUN corepack enable
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/persona ./persona
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json ./package.json
RUN pnpm install --prod
EXPOSE 3000
CMD ["node", "server.js"]
