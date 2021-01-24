// JS Shopping List using the prompt box to communicate with the user

var newName = prompt("Hello! What is your name?", "yourName")

var ikea = prompt(`Hey ${newName}! Fancy shopping at Ikea today?...`, "y / n");

if (ikea == 'y') {
    alert("Wonderful. Let's do this!");
    var money = prompt("How much of your £100 do you want to spend?", "100");
    if (money <= 100) { // if spending £100 or less
        alert("OK. Let's go to the Market Hall.\nThink of what you want to buy...");
        var shoppingList = [];
        var firstItem = prompt("What's your first item?", "first item");

        // if response is null ie shopper clicks on 'Cancel' - end this loop, otherwise add another item to list
        shoppingList.push(firstItem);
        var nextItem = "";
        while (nextItem !== null) {
          nextItem = prompt("Next item? Or select 'Cancel' to stop.");
            shoppingList.push(nextItem);
        }
        // Clicking on 'Cancel' creates NULL element at end of array, so remove it
        shoppingList.pop();

        // Asking if shopper wants to remove a specific item
        var removeYes = prompt("These are the items in your shopping trolley...\n " + (shoppingList) + "\nDo you wish to remove an item?", "y / n");
        if (removeYes == 'y') {
          var remove = prompt("Which item are you leaving back?", "");
          console.log(shoppingList);
          console.log(remove);
          var position = shoppingList.indexOf(remove); // finding position of item to remove
          console.log(position);
          shoppingList.splice(position, 1); // remove 1 item only, at known position in array
        };

        // final list of items
        alert("You now buying ...\n" + (shoppingList) + "\nLet's go and pay!")
        document.write("<br>" + shoppingList + "<br>" + shoppingList.length + " items to buy."); // current list is written to web page
        console.log(shoppingList, typeof(shoppingList));

    } else { // if spending £100 or more
      alert("OK, you obviously have too much money! \n\nWhoop! Whoop! \n\nLet's go & buy out the Showroom!")
    }

} else { // if not wanting to go shopping
    alert ("Maybe next time...bye!!!")
}

// What could be improved?
// Input checks - typing errors, empty strings ie user hits return instead of entering an item
