// fix_indent.js — Normalize <link> indentation in all HTML files
var fs = require("fs");
var files = [
  "home.html", "company.html", "contact.html", "services.html",
  "blog.html", "faq.html", "projects.html", "login.html", "register.html"
];

files.forEach(function (f) {
  var c = fs.readFileSync(f, "utf8");

  // Normalise ANY number of leading spaces before the styles.css link
  c = c.replace(
    /^[ ]+<link rel="stylesheet" href="styles\.css" \/>$/m,
    '    <link rel="stylesheet" href="styles.css" />'
  );

  // Normalise mobile.css link indentation
  c = c.replace(
    /^[ ]+<link rel="stylesheet" href="mobile\.css" \/>$/m,
    '    <link rel="stylesheet" href="mobile.css" />'
  );

  fs.writeFileSync(f, c, "utf8");
  console.log("Fixed: " + f);
});
