# Usa a imagem oficial Node.js do AWS Lambda
FROM public.ecr.aws/lambda/nodejs:18

# Define o diretório de trabalho
WORKDIR /var/task
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
