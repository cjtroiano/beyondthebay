FROM nginx
WORKDIR /wwwroot
COPY . /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
# COPY build dir

CMD ["nginx", "-g", "daemon off;"]