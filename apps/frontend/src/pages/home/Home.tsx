import { useSelector } from "react-redux";
import {
  selectGetBoards,
  selectHasNextPage,
  selectIsLoading,
} from "../../redux/board/selectors";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getAllBoardsThunk } from "../../redux/board/operations";
import BoardItem from "../../modules/board/components/boardItem/BoardItem";
import {
  AddBoardWrapper,
  BoardsList,
  BoardsWrapper,
  LoadMoreButton,
  NoBoardsPlugWrapper,
} from "./Home.styled";
import { useModal } from "../../shared/hooks/useModal";
import Modal from "../../shared/components/modal/Modal";
import AddBoardForm from "../../modules/board/components/addBoardForm/AddBoardForm";
import { toast } from "react-toastify";

import Svg from "../../shared/components/svg/SvgWrapper";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isOpen, openModal, closeModal } = useModal();

  const [currentPage, setCurrentPage] = useState(1);
  const [loadedPages, setLoadedPages] = useState([1]);

  const boards = useSelector(selectGetBoards);
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);

  useEffect(() => {
    const params = {
      page: currentPage,
      limit: 10,
    };

    dispatch(getAllBoardsThunk(params))
      .unwrap()
      .then()
      .catch(() => {
        toast.warning("Oops, something went wrong! Try again, please!");
      });
  }, [dispatch, currentPage, boards.length]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (!loadedPages.includes(nextPage)) {
      setCurrentPage(nextPage);
      setLoadedPages([...loadedPages, nextPage]);
    }
  };

  return (
    <BoardsWrapper>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <BoardsList>
          {(!boards || !boards.length) && (
            <NoBoardsPlugWrapper>
              <AddBoardWrapper onClick={openModal}>
                <Svg id="plus" />
                <p>Add board</p>
              </AddBoardWrapper>
              <p>There are no boards yet. Add new board to see it there</p>
            </NoBoardsPlugWrapper>
          )}
          {boards.map((board, index) => (
            <React.Fragment key={board._id}>
              {index === 0 && (
                <AddBoardWrapper onClick={openModal}>
                  <Svg id="plus" />
                  <p>Add board</p>
                </AddBoardWrapper>
              )}
              <BoardItem {...board} />
            </React.Fragment>
          ))}
        </BoardsList>
      )}
      {hasNextPage && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      )}
      {isOpen && (
        <Modal closeModal={closeModal}>
          <AddBoardForm closeModal={closeModal} />
        </Modal>
      )}
    </BoardsWrapper>
  );
};

export default Home;
