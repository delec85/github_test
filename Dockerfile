# # --------------------------------------------------
# # 1) BACKEND: собираем сервер
# # --------------------------------------------------
# FROM node:18-slim AS backend

# # openssl для generate-cert.sh
# RUN apt-get update \
#  && apt-get install -y --no-install-recommends openssl \
#  && rm -rf /var/lib/apt/lists/*

# # чтобы shared/ тоже работал как ESM
# WORKDIR /app
# RUN printf '{ "type": "module" }\n' > package.json

# # переходим в папку сервера
# WORKDIR /app/server

# # 1) тащим манифесты и .env
# COPY server/package*.json ./
# COPY server/.env         ./
# # 2) сразу копируем весь исходник (без node_modules благодаря .dockerignore)
# COPY server/ ./

# # 3) устанавливаем prod-зависимости (соберёт модули под эту среду)
# RUN npm install --production

# # 4) копируем общий модуль и генерим сертификаты
# COPY shared  /app/shared
# RUN chmod +x generate-cert.sh \
#  && ./generate-cert.sh

# EXPOSE 3000
# CMD ["npm", "start"]


# # --------------------------------------------------
# # 2) FRONTEND: билдим клиент
# # --------------------------------------------------
# FROM node:18-slim AS frontend-builder

# WORKDIR /app/client

# # 1) копируем манифесты
# COPY client/package*.json ./
# RUN npm install

# # 2) копируем исходник + shared + certs сервера
# COPY client/        ./
# COPY shared         /app/shared
# COPY server/cert    /app/server/cert

# # 3) удаляем тесты и пропускаем TS-компиляцию
# RUN find src -type f -name '*.test.ts*' -delete
# RUN npm pkg set scripts.build="vite build"

# # 4) сборка статики
# RUN npm run build


# # --------------------------------------------------
# # 3) FRONTEND: проксируем nginx
# # --------------------------------------------------
# FROM nginx:alpine AS frontend

# COPY --from=frontend-builder /app/client/dist /usr/share/nginx/html
# EXPOSE 80






# --------------------------------------------------
# Общий базовый слой (чтобы "type: module" работал везде)
# --------------------------------------------------
FROM node:18-slim AS base
WORKDIR /app
COPY package.json ./

# --------------------------------------------------
# 1) BACKEND: dev-режим с nodemon
# --------------------------------------------------
FROM base AS backend

# openssl для self-signed сертификатов
RUN apt-get update \
 && apt-get install -y --no-install-recommends openssl \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app/server

# зависимости + .env
COPY server/package*.json ./
COPY server/.env ./

# DEV: ставим все зависимости, чтобы nodemon был доступен
RUN npm install

# код сервера и общий shared
COPY server/ ./
COPY shared /app/shared

# генерим сертификаты
RUN chmod +x generate-cert.sh \
 && ./generate-cert.sh

EXPOSE 3000
# dev-сервер c автоперезагрузкой
CMD ["npm", "run", "dev"]

# --------------------------------------------------
# 2) FRONTEND: dev-режим с Vite
# --------------------------------------------------
FROM base AS frontend

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client/ ./
COPY shared /app/shared
COPY server/cert /app/server/cert

# удаляем тесты
RUN find src -type f -name '*.test.ts*' -delete

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
