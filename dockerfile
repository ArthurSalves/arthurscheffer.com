# 🔹 Etapa 1: Construção do Next.js
FROM node:18 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# 🔹 Etapa 2: Configuração para rodar no Lambda
FROM public.ecr.aws/lambda/nodejs:18
WORKDIR /var/task

# Copia os arquivos do Next.js standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# 🔹 REMOVE O ENTRYPOINT padrão do AWS Lambda
ENTRYPOINT []

# 🔹 Define o comando correto para rodar Next.js standalone
CMD ["node", "server.js"]
