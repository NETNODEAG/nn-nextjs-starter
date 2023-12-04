# nn-nextjs-starter

## 1. Create local code base
### basic starter
> npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nn-nextjs-starter
### drupal specific starter
> npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nn-nextjs-starter/tree/drupal

## 2. Create git repo & push code
- Create repo https://bitbucket.org/NETNODEAG/workspace/create/repository
- On your local codebase run:
- edit .infrastructure
> git init
> git remote add origin git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
> git add .
> git commit -am "inital commit"
> git push -u origin master

## 3.1 Deploy to Vercel

- Follow https://vercel.com/new/netnodeag

## 3.2 Deploy to Docker Host
- Get ssh pub key from docker host and add it to the git repo
> task nn-ssh-prod-root
> cat .ssh/id_rsa.pub
- Copy the key to (Example: https://bitbucket.org/NETNODEAG/example.ch/admin/access-keys/).
- Login to the project docker host
> task nn-ssh-prod-root
> git clone git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
- Inside repo folder
> cp .env.example .env
> vi .env # edit whatever you want
> task deploy.sh

## 4. Setup pipelines and start local development
- edit bitbucket-pipelines.yml (adapt path & host ip)
- Allow the the git repo to access the docker host
- Adapt Taskfile.yaml (remove commands we dont need)
