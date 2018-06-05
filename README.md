# Feed Reader Testing
This simple web application that shows RSS Feeds. I wrote very light unit tests with **Jasmine Framework** to validate to the code for DOM manipulation, event handling etc.


## Run/Clone The Project

Clone the repository: ```git clone https://github.com/gunayanil/feed-reader-testing.git```
Open index.html in your browser.


## The Tests

*Tests marked green passed and red failed.*

1.```allFeeds``` variable has been defined and that it is not empty.

2.Each feed in the ```allFeeds``` object and ensures it has a URL defined and that the URL is not empty.

3.Each feed in the ```allFeeds``` object and ensures it has a name defined and that the name is not empty.

4.The menu element is hidden by default.

5.Menu visibility changes when the menu icon is clicked.

6.When the ```loadFeed``` function is called and completes its work,  there is at least a single ```.entry``` element within the ```.feed ``` container.

7.A new feed is loaded by the ```loadFeed``` function that the content actually changes.

## Technologies
* Jasmine
* JavaScript
