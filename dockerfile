# Usa a imagem oficial do AWS Lambda para Node.js 18
FROM public.ecr.aws/lambda/nodejs:18

# Define o diretório de trabalho
WORKDIR /var/task

# Copia os arquivos necessários
COPY package.json package-lock.json ./
RUN npm install

# Copia todo o build standalone do Next.js
COPY .next/standalone ./
COPY .next/static .next/static

# Define o comando correto para rodar o Next.js
CMD ["node", "server.js"]
