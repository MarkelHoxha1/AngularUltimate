import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
// function ShoppingList()
// {
//     this.groceries = [];
// }

// ShoppingList.prototype.addItem = function(item)
// {
//     this.groceries = this.groceries.concat([item]);
// };


// ShoppingList.prototype.removeItem = function(item)
// {
//     this.groceries = this.groceries.filter(function(grocery){
//         return item != grocery;
//     });
// }
// var myList = new  ShoppingList();
// myList.addItem('Banana'); 
// console.log(myList.groceries);
