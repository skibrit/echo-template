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
    "icon": "https://www.google.com/s2/favicons?domain=stackoverflow.com",
    "grant": "none",
    "author": "you"
  }
}
```

Now run
```
npm run gen
```
This will create a userScript script in the `temperMonkey/script/` folder. 

Import the generated script in the temperMonkey dashboard.
