<p align="center">
	<img src="https://skillicons.dev/icons?i=js,express,postgres,vercel" height="30" />
</p>

<p align="center">
	<img src="https://cv.nderousseaux.fr/picture.jpg" alt="Icon of the project" width="150" style="border-radius: 50%" />
</p>

# <div align="center">My resume</div>
<div align="center">
	<samp>My resume, and some tools related to it.</samp>
</div>

<hr>

## ℹ️ About
This is my online resume. Made with express, [json-resume](https://jsonresume.org) and [my french version of the stackoverflow theme](https://github.com/nderousseaux/jsonresume-theme-stackoverflow-french).

The deployment is done via vercel.

## 🛠️ Installation, development and deployment

### Installation
```bash
$ npm install
$ mv .env.example .env
```

Fill the `.env` file with your own values. Then, init the database with the `struct.sql` file :

```bash
$ plsql -U <user> -d <database> -f struct.sql
```

And finally, fill the database with your own data.


### Development
```bash
$ npm run dev 
#or, with vercel
$ vercel dev
```

### Deployment
```bash
$ vercel --prod
```

Or simply push to the main branch, if you have the vercel integration enabled.