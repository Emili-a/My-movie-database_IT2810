#!/bin/bash
# NOTE: This script is to be run with sudo privileges
# and after having copied the production build to /tmp on the vm.

# On your PC, run the following:

# npm run build && scp -r build <user>@it2810-61.idi.ntnu.no:/tmp/

apt-get update && apt-get install -y apache2

# Delete previous contents of project folder, (re) create empty
rm -rf /var/www/html/project3
mkdir /var/www/html/project3

rsync -a /tmp/build/ /var/www/html/project3
rm -rf /tmp/build
