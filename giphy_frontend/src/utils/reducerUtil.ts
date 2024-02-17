export const isFetchingReducer = (state: any, action: any) => {
  state.isFetching = true;
};

export const isLoadingReducer = (state: any, action: any) => {
  state.isLoading = true;
};

export const fetchingRedeucer = (state: any, action: any) => {
  state.isFetching = false;
  state.data = action.payload;
};

export const rejectReducer = (state: any, action: any) => {
  state.isFetching = false;
  state.isLoading = false;
  state.error = action.payload;
};
