# Start a new vercel/docker based nextjs project

The following steps explain how you can create a new nextjs codebase using nn-nextjs-starter template and deploy to Vercel and a custom docker host.

## 1. Create local code base
> npx create-next-app@latest --experimental-app
> npx create-next-app -e https://github.com/NETNODEAG/nn-nextjs-starter



## 2. Create git repo & push code
- Create repo https://bitbucket.org/NETNODEAG/workspace/create/repository
- On your local codebase run:
> git init
> git remote add origin git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
> git add .
> git commit -am "inital commit"
> git push -u origin master
- You may need to edit ./nn/docker-prod/settings.docker.php (set allowed trusted host to something like: "'^.+\.docker2\.netnode\.cloud$'")
- edit drush/sites/cloud.site.yml
- edit .infrastructure 
> git commit -am "Adds infrastructure info"
> git push

## 3. Setup prod environment on docker host
- Get ssh pub key from docker host and add it to the git repo
> task nn-ssh-prod-root
> cat .ssh/id_rsa.pub
- Copy the key to (Example: https://bitbucket.org/NETNODEAG/example.ch/admin/access-keys/). 
- Login to the project docker host 
> task nn-ssh-prod-root
> git clone git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
- Inside repo folder
- > cp .env.example .env
- > vi .env # edit whatever you want
- use the following to generate passwords 
- > date |md5 | head -c24; echo
- > task nn-docker-prod-first-install 
- Login to the site and check /admin/reports/status

## 4. Setup pipelines and start local development

- Edit lando.yaml and change name
- Start lando (no DB synced yet)
> lando start
- Sync DB from docker host
> task nn-lando-sync-db-prod
- edit bitbucket-pipelines.yml (adapt path & host ip)
- Allow the the git repo to access the docker host
- Adapt Taskfile.yaml (remove commands we dont need)