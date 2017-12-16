# DOM-manipulation
## Used javascript to make a to-do-app with search engine
### Steps
- First as the user fills the input text then add the task to listlist.
```
first take the value from input using querySelector or getElementById method.
Add submit event to form to execute a function which has following functionality.
Now make a new-list item using createElement method.
Add text node to new-list item as value from input using appendChild method.
Now add delete button to new-list item.
Now add new-list item to main list.
```
- As user clicks the delete button then item should be deleted from tasklist.
```
Add onclick event to delete button to execute a function which has following steps.
Delete confirming using confirm box.
After that parent element of delete button is selected (li) using parentElement.
Then that element is removed from main list using removeChild method.
```
- If user write in search bar then search appropriate results according to it.
```
first add keyup event to search bar to execute a function which has following steps
first convert the text using toLowerCase method
Then get List items in main list to search for using getElementsByTagName method.
Convert obtained HTMLCollection to array to loop through
Then get content of each item using textContent property.
Finally, check condition if item content matches text of search bar if then show results otherwise put display ot none.
```
