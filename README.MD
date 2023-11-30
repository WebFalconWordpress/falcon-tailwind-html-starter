# Introduction

This is a minimal boilerplate using [Tailwind CSS](https://tailwindcss.com/) that can be used as a starting point for coding html and css templates that can easily be integrated into WordPress Falcon themes. 

### General

* You will find the editable CSS and Javascript files within the `/resources` folder.
* Before you use your theme in production, make sure you run `npm run production`.
* You need to install npm install -g grunt-cli in order to run project normally

## NPM Scripts

A script is executed through the terminal by running `npm run script-name`.

| Script        | Description                                                                    |
|------------   |--------------------------------------------------------------------------------|
| production    | Creates a production (minified) build of app.js, app.css and editor-style.css. |
| dev           | Creates a development build of app.js, app.css and editor-style.css.           |
| watch         | Runs several watch scripts concurrently.                                       |
| watch-sync    | Refresh browser automatically if something is changed.                         | 


NOTE: Browser-sync is not working out of the box. 
* In order to make browser sync work you need to change the proxy url in `browsersync-config.js` to your local development url.


