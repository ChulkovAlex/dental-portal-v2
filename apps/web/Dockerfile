FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm i || true
COPY . .
EXPOSE 3000
CMD ["npm","run","dev","--","-p","3000"]
