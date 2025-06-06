# Устанавливаем базовый образ Node.js
FROM node:18-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект (если используется TypeScript)
RUN npm run build

# Открываем порт, который использует приложение
EXPOSE 8041

# Запускаем приложение
CMD ["npm", "run", "start"]