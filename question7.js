changecase = function changecase(str) {
    // Using the replace method with a regular expression to match lowercase and uppercase letters separately
    //Replacing lowercase with uppercase using('([a-z]+)').
// replacing uppercase with lowercase using ('([A-Z]+)').
       return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // changing lowercase to uppercase and uppercase to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// Output the result of applying the changecase function to the string 
console.log(changecase('hElLo'));
console.log(changecase('HeLlO'));
