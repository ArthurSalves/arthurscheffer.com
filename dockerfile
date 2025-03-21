FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Gera os arquivos estáticos
RUN npm run build

# Instala um servidor HTTP leve
RUN npm install -g serve

EXPOSE 3000

# Serve os arquivos estáticos
CMD ["serve", "-s", "out", "-l", "3000"]
