// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Drink R Us",
    productCategories:["Beer","Wine","Soft Drinks","Hot Drinks"],//list of product categories
    stores:[{address:"410 sycamore st, nw1 4ef",manager:"Isaac Newton"},{address:"23 prince albert st, n13 0rs",manager:"Albert Einstein"},{address:"42 main st, w1 3fc",manager:"Richard Hawkins"}]//list of store locations with managers associated
};


// Handle the main routes
// TODO
//main page route. renders index.ejs with shop data
router.get('/', function(req, res) {
    res.render('index.ejs', shopData)
}); 
//about page route. renders about.ejs with shop data
router.get('/about', function(req, res) {
    res.render('about.ejs', shopData)
}); 
//search page route. renders sertch.ejs with shop data
router.get('/search', function(req, res) {
    res.render('search.ejs', shopData)
});
// Search result route: handles GET request from search form
// Displays custom message with search text and category from parameters embedded
router.get('/search_result', function(req, res){
res.send("You searched for " + req.query.search_text + " in " + req.query.category);
})
//register page route. renders register.ejs with shop data
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 // Registration result route: handles POST request from register form
// Displays custom message with the data inputted into the registration fields embedded
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!.' + ' We will send an email to you at ' + req.body.email); 
}); 
//survey page route. renders survey.ejs with shop data
router.get('/survey', (req, res) => {
    res.render('survey.ejs', shopData)
}); 
 // survey result route: handles POST request from survey form
// Displays custom message with the data inputted into the survey fields embedded
router.post("/surveyed", (req, res) => {
  const { first, last, email, age, drinks, student } = req.body;
  const studentChecked = student ? true : false;
  res.send(`
    <h1>Thank you for completing the survey:<br><br>
     Name: ${first} ${last},<br><br>
     Age: ${age}<br><br>
     Preferred Drink: ${drinks}<br><br>
     Email: ${email} <br><br>
     Currently a Student: ${studentChecked} 
     </h1>`);
});

// Export the router object so index.js can access it
module.exports = router;
