# Thirst Student App - Express.js Example

This project showcases a simple Express.js application using routers and EJS templates. It includes dynamic routing, form handling (GET and POST), and rendering of dynamic data with HTML forms, a survey, and a registration system.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **EJS** - Embedded JavaScript templates that allow for dynamic HTML
-**CSS** - For styling and layout

## Features

### Routes
- Handles multiple routes such as:
  - `/` - Main page returning shop name and product categories
  - `/about` - About page with location of other stores and managers
  - `/search` - Search page with a form to search by product name and category
  - `/search` - Search page with a form to search by product name and category
 - `/search_result` - Shows the result of the search form submission
 - `/register` - Registration page with a form for user details
 - `/registered` - Shows the result of the registration form submission
 - `/survey` -  Survey page with a form for user details and preferred drink
 - `/surveyed` -  Shows the result of the survey form submission
 
### Form and Validation
- GET and POST forms with input validation
- Validation for input fields like Email and Age
- Required fields are marked

### Dynamic EJS integration
- Loop through products and store locations
- integrate the products into the forms

### styling
- External stylesheet to set style and format of the content

## Getting Started

### Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/shass005/04_express_33882590.git
cd 04_express_33882590
```
2. Install Node.js (if not already installed)
- Node.js installed (Download from [nodejs.org](https://nodejs.org))

3. Insall dependencied
```bash
npm install express
npm install ejs
```
4. Run the Server
```bash
node index.js
```
5. Open your browser
Visit: http://localhost:8000
The webpage should be rendered