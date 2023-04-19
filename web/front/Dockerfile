FROM node:latest AS build
WORKDIR /front
COPY . /front
RUN npm ci
RUN npm run build

FROM nginx:latest AS final
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=build /front/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD nginx -g "daemon off;"