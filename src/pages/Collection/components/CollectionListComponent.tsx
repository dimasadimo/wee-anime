import * as React from "react";
import styled from '@emotion/styled/macro';
import { useSnackbar } from 'notistack';

export const CollectionListComponent = () => {

  const data = JSON.parse(localStorage.getItem("collection")!);
  const [modal, setModal] = React.useState(false);
  const [collection, setCollection] = React.useState<[]>([]);
  const [name, setName] = React.useState<string>("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const toggleModal = () => {setModal(!modal); enqueueSnackbar('Success', {autoHideDuration: 3000})};

  const createCollection = () => {
    let array = [];
    if(data.length > 0) array = data;
    let date = new Date().toLocaleDateString();
    array.push({collection: name, time_updated: date});
    console.log(array);
    localStorage.setItem("collection", JSON.stringify(array));
    setModal(!modal);
  }
  
  
  return (
    <>
      {/* <CollectionTitle>
        <button onClick={toggleModal}>Add to Collection</button>
      </CollectionTitle>
      {modal && <ModalBody>
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Create Collection</ModalTitle>
            <label >First name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <label >First name:</label>
            <ModalButtonSubmit onClick={createCollection}>Create</ModalButtonSubmit>
            <ModalButton onClick={toggleModal}/>
          </ModalContent>
        </ModalOverlay>
      </ModalBody>}
      <CollectionListWrapper>
        {data.map(() => (
          // <AnimeCardComponent
          //   data={item}
          // />
          <div style={{backgroundColor: 'red'}}>sdadad</div>
        ))}
      </CollectionListWrapper> */}
    </>
  )
}

export const CollectionListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 415px);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 5%;
  transition: all 0.5s ease-in-out;
  margin-top: 40px;
`;

export const CollectionTitle = styled.div`

  --content-wrapper-padding-inline: 1.25rem;
  --content-width: 55.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--content-wrapper-padding-inline)*2);
  padding-left: var(--content-wrapper-padding-inline);
  padding-right: var(--content-wrapper-padding-inline);
  padding-top: 5rem;

  @media (max-width: 1350px) {
    --content-width: 55.625rem;
  }

  @media (max-width: 1000px) {
    --content-width: 35.625rem;
  }

  @media (max-width: 700px) {
    --content-width: 25.625rem;
  }

  @media (max-width: 450px) {
    --content-width: 15.625rem;
  }
`;

export const ModalBody = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49,49,49,0.8);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 50rem;
  min-width: 40rem;
  background-color: #333533;
  text-align: center;
  height: 10rem;
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;

export const ModalTitle = styled.h3`
  margin-top: 30px;
`;

export const ModalButtonSubmit = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  padding: 5px 7px;
`;