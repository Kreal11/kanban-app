import { ButtonsWrapper } from "../../../board/components/boardItem/BoardItem.styled";
import { CardInfoWrapper, CardLi } from "./CardItem.styled";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteCardThunk } from "../../../../redux/card/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useModal } from "../../../../shared/hooks/useModal";
import Modal from "../../../../shared/components/modal/Modal";
import UpdateCardForm from "../updateCardForm/UpdateCardForm";
import { Draggable } from "react-beautiful-dnd";

import Svg from "../../../../shared/components/svg/SvgWrapper";

interface CardItemProps {
  _id: string;
  title: string;
  description: string;
  index: number;
}

const CardItem = ({ title, description, _id, index }: CardItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const handleGetCard = (id: string) => {
    navigate(`/cards/${id}`);
  };

  const handleDeleteCard = (id: string) => {
    dispatch(deleteCardThunk(id))
      .unwrap()
      .then(() => {
        toast.success("Card was deleted successfully!");
      })
      .catch(() => {
        toast.error("Oops, something went wrong. Try again, please!");
      });
  };

  return (
    <>
      <Draggable draggableId={_id} index={index}>
        {(provided) => (
          <CardLi
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardInfoWrapper onClick={() => handleGetCard(_id)}>
              <h3>{title}</h3>
              <p>{description}</p>
            </CardInfoWrapper>
            <ButtonsWrapper>
              <button onClick={openModal}>
                <Svg id="edit" />
              </button>
              <button onClick={() => handleDeleteCard(_id)}>
                <Svg id="delete" />
              </button>
            </ButtonsWrapper>
          </CardLi>
        )}
      </Draggable>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <UpdateCardForm
            closeModal={closeModal}
            id={_id}
            title={title}
            description={description}
          />
        </Modal>
      )}
    </>
  );
};

export default CardItem;
