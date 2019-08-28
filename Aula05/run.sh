#!/bin/bash

dirbase=`pwd`
echo $dirbase

docker run \
    -p 3002:3002 \
    -it \
    --rm \
    -v $dirbase:/var/www/ \
    nodejs-sevensys
