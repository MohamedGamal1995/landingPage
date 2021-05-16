# Project title:
Landing page
# Technologies used:
HTML - CSS - javaScript
# Project description:
this project for manipulating the DOM through by using javaScriptf to make the website from being static to dynamic, so you will find:

- Fixed navigation menu that built dynamically and when add a new section it will automatically add to the  navigation menu.

- While  navigating through the page, the section which in viewport will get a class that distinguish it from the others.

- Clicking on navigation item will scroll to the appropriate section smoothly.

- Top button will display when scrolling down to take the user to the top.

- responsive page that when using phone or tablate the navigation menu collapse to icon bars that will display navigation menu when you click it

### The steps
1. I create a buildNav() function to build the navigation menu that take the data-nav from the sections and the id and build a navigation.

2. Adding class active to the section which in viewport by removing your-active-class first and then add event listener scrolling that when we scroll through the sections it will give the your-active-class to the section which in viewport.

3. Scrolling when clicking the navigation menu by making function scroll() the get the li elements and give it an event listener click and i prevent the jumping behaviour when clicking the navigation menu and make the naviagtion smoothly by using **ScroolIntoView()**.

4. add button to the HTML and style it with CSS and write its function by javaScript

5. Make the page responsive by using media query in CSS by hide the navigation menu and  appear the (fas fa bars) and write a function to appear and hide the navigation menu by clicking the bars
