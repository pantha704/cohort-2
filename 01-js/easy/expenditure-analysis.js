/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let spent = {};

  transactions.forEach((t) => {
    let categories_spent = Object.keys(spent);
    // console.log(categories_spent);
    if (categories_spent.includes(t.category)) {
      spent[t.category] += parseInt(t.price);
      // console.log("includes", t.category);
    } else {
      spent[t.category] = parseInt(t.price);
      // console.log(t.price, "e");
    }
  });

  final = [];
  // console.log(spent);

  let arr = Object.keys(spent);
  arr.forEach((cat) => {
    new_obj = {
      category: cat,
      totalSpent: spent[cat],
    };
    final.push(new_obj);
  });

  // console.log(final);
  return final;
}

// calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 90,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 20,
//     category: "Workout",
//     itemName: "Pizza",
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 30,
//     category: "Home",
//     itemName: "Pizza",
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 60,
//     category: "Home",
//     itemName: "Pizza",
//   },
// ]);

module.exports = calculateTotalSpentByCategory;
