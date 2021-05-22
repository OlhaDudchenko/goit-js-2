function slugify(title) {
  // Change code below this line
    return title.toLowerCase().split(' ').join('-');


  // Change code above this line
}
console.log(slugify("Arrays for begginers"));