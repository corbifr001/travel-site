
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;

    this.greet = function() {
        console.log("Hello there.  I am " + this.name + " my fav color is " + this.favoriteColor + ".");
    }
}

