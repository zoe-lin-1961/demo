
#!/usr/bin/eny sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m 'New Deployment'
git push -f git@github.com:zoe-lin-1961/demo.git master:gh-pages

cd -