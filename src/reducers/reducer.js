export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      const newFeature = state.additionalFeatures[action.id - 1];
      if (!state.car.features.includes(newFeature.name)) {
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, newFeature.name],
            price: state.car.price + newFeature.price,
          },
        };
      } else {
        return state;
      }
    case "REMOVE_ITEM":
      const newFeatures = state.car.features.filter((f) => f !== action.name);
      console.log(state.additionalFeatures);
      const getPrice = state.additionalFeatures.filter((f) => {
        if (f.name === action.name) {
          return f;
        }
      });
      console.log(getPrice);
      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures,
          price: state.car.price - getPrice[0].price,
        },
      };
    default:
      return state;
  }
};
