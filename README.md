# ecx-backend-default-template
This is the default template to be used for every project during ECX 4.0


****
## SETUP
****
### Install dependencies
```json
  1. npm install 
  2. bun install 
  
  install bun here [here](https://bun.sh/, 'link')
```

### Clone project

```json
  git clone git@github.com:Engineering-Career-Expo/backend-template.git
```

### Create environment files and file them correctly
```json
  cp .env.example .env
```

### Start project [dev mode]
```json
  npm run start:dev
```

### Start project [prod]
```json
  npm run start:prod
```

**** 
# GUIDELINES
****
* When creating *new branch* if
  - fixing a bug: follow the pattern *`fix/<name-of-fix>`*
  - implementing a new feature *`feat/<name-of-feature>`*
* Never commit directly into the *`main`* branch.

