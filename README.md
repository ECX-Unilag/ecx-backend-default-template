# ecx-backend-default-template
ECX 4.0 Backend cohort template to used in every project except 
in wierd cases.

****
## SETUP
****
### Install dependencies
```bash
  🍕. npm install  
  🦄. bun install 
  
  install bun here [here](https://bun.sh/, 'link')
```

### Clone project

```git
  git clone git@github.com:Engineering-Career-Expo/backend-template.git
```

### Create environment files and file them correctly
```bash
  cp .env.example .env
```

### Start project [dev mode]
```bash
  npm run start:dev
```

### Start project [prod]
```bash
  npm run start:prod
```

**** 
# GUIDELINES
****
* When creating *new branch* if you're fixing a bug or implementing a feature follow this pattern
  - fixing: *`fix/<name-of-fix>`*
  - feature: *`feat/<name-of-feature>`*
* Never commit directly into the *`main`* branch.

