export const buyItem = (item) => {
  //console.log("item",item)
  // dipsatch an action here to add an item
  return { type: "BUY_ITEM", id:item};
};
export const removeItem = (item) => {
  console.log("removeItem",item)
  // dipsatch an action here to add an item
  return { type: "REMOVE_ITEM", name:item};
};

