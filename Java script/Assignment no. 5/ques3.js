// Creating user object
const user = {
    name: "Radhika",

    // Arrow function
    showName: () => {
        console.log(this.name);
    }
};

// Calling arrow function
console.log("Using Arrow Function:");
user.showName();

// Fix using normal function
const user2 = {
    name: "Radhika",

    showName: function() {
        console.log(this.name);
    }
};

// Calling normal function
console.log("Using Normal Function:");
user2.showName();