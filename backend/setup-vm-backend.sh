#!/bin/bash
# To be run with superuser privileges. See README for further details.
export DEBIAN_FRONTEND=noninteractive

# Remove if extant, to prevent multiple copies
rm -rf __setup__
mkdir __setup__

cd __setup__

# LibSSL dependency
curl http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb -o libssl1.deb
dpkg -i libssl1.deb

# MongoDB
curl https://repo.mongodb.org/apt/ubuntu/dists/focal/mongodb-org/6.0/multiverse/binary-amd64/mongodb-org-server_6.0.2_amd64.deb -o mongodb.deb
dpkg -i mongodb.deb

# MongoDB Database Tools (separate from mongodb core)
curl https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-x86_64-100.6.1.deb -o mongodb-tools.deb
dpkg -i mongodb-tools.deb

cd ..

# Update configuration
rm -rf /etc/mongod.conf
cp ../conf/default.conf /etc/mongod.conf

# (Re)start daemon
service mongod stop
service mongod start

# Load data from remote server
curl https://atlas-education.s3.amazonaws.com/sampledata.archive -o sampledata.archive

# Install and run
npm install
mongod --config conf/default.conf
mongorestore --archive=sampledata.archive
node server.js
