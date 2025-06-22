FROM node:alpine AS base

FROM base AS build
USER root

WORKDIR /app
COPY . .
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci && \
    npm i -g @angular/cli && \ 
    npm run start:testing
CMD ["npm","run","cypress:testing"]