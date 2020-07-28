const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUOTE":
      const quote = action.payload;
      return {
        ...state,
        quotesById: {
          ...state.quotesById,
          [quote.quoteId]: quote,
        },
      };
    default:
      return state;
  }
};

export default Reducer;
