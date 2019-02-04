
## How To Use

### What you need
- [X] [Nodejs](https://nodejs.org)
- [X] [sass](https://sass-lang.com/install)
- [X] [firebase-tools](https://github.com/firebase/firebase-tools)
---
### Use

##### **1. Clone This Project**
```git  
git clone https://github.com/DaoHuyTuan/blog-engine.git
```
##### **2. Edit Scss file**
> All scss file imported by style.scss
```scss
/*Structor scss*/
root/
   |   
   |--scss/
   |    |---__variable.scss
   |    |---__setting.scss
   |    |---...
   |---style.scss
```

> use npm-script to complile scss to css

```js
//on package.json
 "sass": "sass style.scss style.css --watch -s compressed" //watch, compile and compress file css
//on terminal you run
npm run sass
```
##### 3. Class System
> To be building ...
##### 4. Deploy 
> Recommend use firebase deploy 
- Free
- Custom Domain
- SSL

```js
//First time 
$: firebase login
$: firebase init 
$: firebase deploy //or npm run deploy
//Other time 
$: firebase deploy //or npm run deploy

```
---

### Folder Structor
**Folder structor when deploy to server**
> The Deployment is just upload folder **public** on the server
```src
   public/
        |--blog/ 
        |--js/ 
        |--css/
        |----main.js
        |----index.html
        |----index.xml
```
**public/blog/**
> Blogs page is saving in xml file

vd:
```src
public/
     |--blog/
          |
          |---blog1.xml
          |---blog2.xml
          |---...
          
```

**public/index.xml** 
> Will be a feed of all blog (RSS of whole page)
this file will have all Title,link,small description of the blog
this will display in URL: https://yourDomain/index.xml
