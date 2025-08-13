[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

exec node server.js

node -e "process.on('uncaughtException', console.error); process.on('unhandledRejection', console.error); require('./server.js')"
