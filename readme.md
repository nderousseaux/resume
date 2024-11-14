# Mon cv

Il s'agit de mon cv, avec le thème stackoverflow, francisé.

Disponible à l'adresse : [https://nderousseaux.github.io/resume](https://nderousseaux.github.io/resume)

## Installation

```bash
npm install -g resume-cli
npm install
```

## Utilisation

```bash
export NAME=<exemple> && resume export --resume resumes/$NAME.json resumes$NAME.pdf --theme=stackoverflow 
# ou
export NAME=<exemple> && resume export --resume resumes/$NAME.json resumes/$NAME.html --theme=stackoverflow 
```