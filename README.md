# nn-nextjs-starter

## 1. Create local code base
### basic starter
> npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nn-nextjs-starter
### drupal specific starter
> npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nn-nextjs-starter/tree/13-drupal

## 2. Create git repo & push code
- Create repo https://bitbucket.org/NETNODEAG/workspace/create/repository
- On your local codebase run:
- edit .infrastructure
> git init
> git remote add origin git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
> git add .
> git commit -am "Inital commit"
> git push -u origin main

## 3.1 Deploy to Vercel
The most common way to create a Deployment on Vercel is through pushing code to Git repositories Creating an automatic Deployment begins by importing a Git repository on Vercel.

### 3.1.1 New project
The next step is to create a new project from the Vercel Dashboard. Follow https://vercel.com/new/netnodeag

### 3.1.2 Project settings

#### Build & Development Settings

- Set the Framework Preset to Next.js
- Provide the following environment variables:
  - `NEXT_IMAGE_DOMAIN`
  - `NEXT_PUBLIC_DRUPAL_REST_BASE_URL`
  - `NEXT_PUBLIC_DRUPAL_BASE_URL`


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
