# Usando uma imagem oficial do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Construir o Next.js
RUN npm run build

# Expor a porta 3000 (Next.js padrão)
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]