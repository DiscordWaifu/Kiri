FROM node:current

ARG buildno
ARG commitsha

LABEL maintainer="Jordan Jones <info@kashall.dev>" \
      repository="https://github.com/Kashalls/kiri"

RUN mkdir /opt/kiri
# Copy files and install modules
COPY . /opt/kiri
WORKDIR /opt/kiri
RUN npm ci --production

CMD ["node", "."]