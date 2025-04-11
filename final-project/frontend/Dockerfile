# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY ./src/package*.json ./
RUN npm install
COPY ./src .
RUN npm run build -- --output-path=dist

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
