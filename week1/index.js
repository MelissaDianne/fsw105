var shopper = {
  firstName: "Jane",
  lastName : "Doe",
  id       : 5566,
  membershipCard: true,
  groceryCart: ["apples", "steak", "corn", "shampoo", "conditioner", "advil"],
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


console.log(shopper .fullName());