import styled from "styled-components";
import Modal from "react-modal";

export const TodoItemTitleContainer = styled.div`
  width: 70%;
`;

export const TodoItemButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditInput = styled.input`
  margin-left: -5px;
  background: transparent;
  outline: none;
  border-width: 0px 0px 2px;
  font-size: 14px;
  margin-top: 2px;
`;

export const Grid = styled.div`
  display: inline-block;
  height: 610px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: scroll;
  overflow: auto;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px 0px black;
  width: 1304px;
`;

export const Cell = styled.div`
  float: left;
  margin: 8px;
  width: 300px;
  height: 50px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-indent: 4px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
`;

//   .cell:nth-child(4n) + .cell {
//     clear: both;
//   }

export const SubmitItemButton = styled.button`
  width: 35px;
  height: 35px;
  box-shadow: 0px 0px 10px 0px grey;
  background: #009688;
  border-radius: 50%;
  border: none;
  outline: none;
  color: whitesmoke;
  font-size: 15px;
  margin-left: -55px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
// export const EditButton = styled.button`
//   margin: 2px;
//   border: none;
//   outline: none;
//   width: 15px;
//   height: 15px;
//   color: teal;
//   cursor: pointer;
// `;
//   .delete-button {
//     margin: 2px;
//     border: none;
//     outline: none;
//     width: 15px;
//     height: 15px;
//     color: tomato;
//     cursor: pointer;
//   }

export const SubmitForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const SubmitItemInput = styled.textarea`
  height: 50px;
  border: 1px solid grey;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

export const AddButton = styled.button`
  border: none;
  outline: none;
  background: tomato;
  padding: 10px;
  margin-right: 5px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: grey;
  font-size: 15px;
  cursor: pointer;
`;

export const SubmitFormButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterListContainer = styled.div`
  margin-top: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const FiltersButton = styled.button`
  margin: 7px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
`;

export const Container = styled.div``;
