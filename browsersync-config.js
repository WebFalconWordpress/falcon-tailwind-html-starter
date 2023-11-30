module.exports = {
 
    // Serve files from the app directory
server: "dist",

// Serve files from the current directory
server: true,

    "files": ["*.css", "*.js", "*.php", "./**/*.php",, "*.html", "./**/*.html", "./**/*.js", "./**/*.css"],
    "reloadOnRestart": true,
    "port": 3000,
    "browser": "chrome",
    "reloadDelay": 1000,
    "watchEvents": [ 
        "change" 
    ]
};