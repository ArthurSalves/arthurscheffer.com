# 🔹 Etapa 1: Constrói o Next.js (builder)
FROM node:18 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# 🔹 Etapa 2: Configura a imagem do AWS Lambda
FROM public.ecr.aws/lambda/nodejs:18
WORKDIR /var/task

# Copia os arquivos necessários do builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Copia o script de entrada e dá permissão de execução
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expor a porta (apenas para testes locais)
EXPOSE 3000

# Define o entrypoint correto
CMD ["/entrypoint.sh"]
