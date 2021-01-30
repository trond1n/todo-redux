const itemLoaded = (newItems) => {
  return {
    type: "ITEM_LOADED",
    payload: newItems,
  };
};
export { itemLoaded };
