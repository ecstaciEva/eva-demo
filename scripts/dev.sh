ip=$(ifconfig | grep -Eo 'inet (addr:)?192.([0-9]*\.){2}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)
if [ -z "$ip" ]
then
  ip=$(ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)
fi

echo "Your local ip is ${ip}"

DATE=`date +%Y.%m.%d.%H.%M`

config=.env.development

if [ ! -e $config ]; then
    touch $config
fi

PORT=$(grep PORT $config | xargs)
PORT=${PORT#*=}
PORT=${PORT:-3000}

grep -q '^PORT=' $config || echo "PORT=$PORT" >> $config

yarn open-cli http://localhost:$PORT
NODE_OPTIONS='--inspect' ./node_modules/.bin/next dev -p ${PORT}