var globalTitle = "With Great Power Comes Great Responsibility";

// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line
var str = urlSlug(globalTitle);
console.log(str);
