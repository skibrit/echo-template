# Echo - Template
This is a template startup for the dom manipulation projects

## Instructions
First run 
```
npm i
```
Next Add the configuration of the project in `config/default.json` file

```
{
  "Project_Type": 1  //Type of the project,
  "UserScript": { // user script configuration
    "title": "New UserScript",
    "websiteURL": "*://*/*",
    "description": "A new UserScript for hot reloading",
    "icon": "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    "grant": "none",
    "author": "you"
  }
}
```

Now run
```
npm run gen
```
This will create a userScript in the `temperMonkey/script/` folder. 

Import the generated script in the temperMonkey dashboard.

Install the LiveReload Extension from [chromeStore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

Install the LiveReload Server from [here](http://livereload.com/) and include the project location.

All Done.
