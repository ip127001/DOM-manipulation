var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var search = document.getElementById('filter');

//Form to submit so add submit event
form.addEventListener('submit', addItem);

//delete items from the list
itemList.addEventListener('click', removeItems);

//serch the items
search.addEventListener('keyup', searchItems);

//add items
function addItem(e){
    e.preventDefault();

    //get input box value
    var newItem = document.querySelector("#item");

    console.log(newItem.value);
    //create new li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //create text node
    var newText = document.createTextNode(newItem.value);

    //add text node with input value
    li.appendChild(newText);

    //create del
    var deleteButton = document.createElement('button');
    
    //add class to del
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteButton.appendChild(document.createTextNode('X'));

    //append del to li
    li.appendChild(deleteButton);

    //add li to ul
    itemList.appendChild(li);
}

//removes items
function removeItems(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure')){
                var li = e.target.parentElement;

                itemList.removeChild(li);
            }
        }
}

function searchItems(e){
    //convert to lowercase   
    var text = e.target.value.toLowerCase();
    
    //get li in itemlists
    var items = itemList.getElementsByTagName('li');

    //convert to arrary
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}