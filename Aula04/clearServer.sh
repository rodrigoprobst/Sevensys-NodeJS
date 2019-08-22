#!/bin/bash

rm -rf yarn.lock .env ./node_modules ./dist

yarn

tsc
