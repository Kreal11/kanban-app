import { RootState } from "../store";

export const selectGetBoards = (state: RootState) => state.boards.boards;
export const selectGetBoardById = (state: RootState) => state.boards.board;
export const selectIsLoading = (state: RootState) => state.boards.isLoading;
export const selectError = (state: RootState) => state.boards.error;
export const selectHasNextPage = (state: RootState) => state.boards.hasNextPage;
export const selectTotalBoardsCount = (state: RootState) =>
  state.boards.totalBoardsCount;
