import { React } from "react";
// import ItemService from "../../services/todo-store-service";
// import AddPanel from "../add-panel/add-panel";
// import Header from "../header/header";
import withItemService from "../hoc/with-item-service";
// import ItemStatusFilter from "../item-status-filter/item-status-filter";
// import SearchPanel from "../search-panel/search-panel";
// import TodoList from "../todo-list/todo-list";

const App = ({ itemService }) => {
  console.log(itemService.getItems());
  return <div>App</div>;
};
export default withItemService()(App);

// export default class App extends Component {
//   maxId = 100;

//   state = {
//     items: [
//       { label: "Drink Coffee", important: false, id: 1, done: false },
//       { label: "Make Awesome App", important: true, id: 2, done: false },
//       { label: "Have a lunch", important: false, id: 3, done: true },
//     ],
//     filter: "all",
//     search: "",
//   };
//   toggleProperty = (arr, id, propName) => {
//     const idx = arr.findIndex((item) => item.id === id);
//     const oldItem = arr[idx];
//     const value = !oldItem[propName];

//     const item = { ...arr[idx], [propName]: value };
//     return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
//   };

//   addItem = (text) => {
//     const newItem = {
//       label: text,
//       important: false,
//       id: this.maxId++,
//     };
//     this.setState(({ items }) => {
//       const newArray = [...items, newItem];
//       return { items: newArray };
//     });
//   };
//   deleteItem = (id) => {
//     this.setState(({ items }) => {
//       const idx = items.findIndex((el) => el.id === id);
//       const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
//       return {
//         items: newArray,
//       };
//     });
//   };

//   // onToggleImportant = (id) => {
//   //   console.log(id);
//   //   this.setState(({ items }) => {
//   //     const idx = items.findIndex((el) => el.id === id);
//   //     const oldItem = items[idx];
//   //     const newItem = { ...oldItem, important: !oldItem.important };
//   //     const newArray = [
//   //       ...items.slice(0, idx),
//   //       newItem,
//   //       ...items.slice(idx + 1),
//   //     ];
//   //     return {
//   //       items: newArray,
//   //     };
//   //   });
//   // };
//   onToggleImportant = (id) => {
//     this.setState((state) => {
//       const items = this.toggleProperty(state.items, id, "important");
//       return { items };
//     });
//   };

//   // onToggleDone = (id) => {
//   //   console.log(id);
//   //   this.setState(({ items }) => {
//   //     const idx = items.findIndex((el) => el.id === id);
//   //     const oldItem = items[idx];
//   //     const newItem = { ...oldItem, done: !oldItem.done };
//   //     const newArray = [
//   //       ...items.slice(0, idx),
//   //       newItem,
//   //       ...items.slice(idx + 1),
//   //     ];
//   //     return {
//   //       items: newArray,
//   //     };
//   //   });
//   // };

//   onToggleDone = (id) => {
//     this.setState((state) => {
//       const items = this.toggleProperty(state.items, id, "done");
//       return { items };
//     });
//   };

//   onFilterChange = (filter) => {
//     this.setState({ filter });
//   };

//   onSearchChange = (search) => {
//     this.setState({ search });
//   };

//   filterItems(items, filter) {
//     if (filter === "all") {
//       return items;
//     } else if (filter === "active") {
//       return items.filter((item) => !item.done);
//     } else if (filter === "done") {
//       return items.filter((item) => item.done);
//     }
//   }

//   searchItems(items, search) {
//     if (search.length === 0) {
//       return items;
//     }

//     return items.filter((item) => {
//       return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
//     });
//   }

//   render() {
//     const { items, filter, search } = this.state;
//     const doneCount = items.filter((item) => item.done).length;
//     const toDoCount = items.length - doneCount;
//     const visibleItems = this.searchItems(
//       this.filterItems(items, filter),
//       search
//     );

//     return (
//       <div>
//         <Header toDo={toDoCount} done={doneCount} />
//         <SearchPanel onSearchChange={this.onSearchChange} />
//         <ItemStatusFilter
//           filter={filter}
//           onFilterChange={this.onFilterChange}
//         />
//         <TodoList
//           items={visibleItems}
//           onDeleted={this.deleteItem}
//           onToggleImportant={this.onToggleImportant}
//           onToggleDone={this.onToggleDone}
//         />
//         <AddPanel onItemAdded={this.addItem} />
//       </div>
//     );
//   }
// }
