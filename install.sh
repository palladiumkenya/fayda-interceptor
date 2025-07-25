#!/bin/bash

echo "Building interceptor stack"
docker compose build --no-cache
echo "Starting interceptor stack"
docker compose up -d