export default class ItemService {
  getItems() {
    return [
      { label: "Drink Coffee", important: false, id: 1, done: false },
            { label: "Make Awesome App", important: true, id: 2, done: false },
            { label: "Have a lunch", important: false, id: 3, done: true }
    ];
  }
}
