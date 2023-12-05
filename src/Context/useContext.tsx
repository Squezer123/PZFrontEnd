import { useContext, useEffect, useState } from "react";
import { SysContext } from "./ContextProvider";
import { User } from "./types";

export const useSysContext = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [showButtons, setShowButtons] = useState("none");
 const [currentModal, setCurrentModal] = useState("none");
 const [users, setUsers] = useState<User[]>([]);
 const [editUsersVisible, setEditUserVisible] = useState(false);

 useEffect(() => {
  fetch("/src/Data/users.json")
   .then((response) => response.json())
   .then((data) => {
    setUsers(data.users);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleUserChange = () => {
  // Implement user data changes as needed
 };

 const handleItemChange = () => {
  // Implement item data changes as needed
 };

 const handleCategoryChange = () => {
  // Implement user data changes as needed
 };

 const showHideLoginButtons = () => {
  if (showButtons === "none") {
   setShowButtons("block");
   changeModal("none");
  } else {
   setShowButtons("none");
   changeModal("none");
  }
 };

 const changeModal = (element: string) => {
  setCurrentModal(element);
 };

 const handleEditUserVisible = () => {
  setEditUserVisible(!editUsersVisible);
 };

 const handleModalOpen = () => {
  setIsModalOpen(true);
  setShowButtons("none");
 };
 const handleModalClose = () => setIsModalOpen(false);

 return {
  isModalOpen,
  showButtons,
  currentModal,
  users,
  editUsersVisible,
  showHideLoginButtons,
  changeModal,
  handleCategoryChange,
  handleItemChange,
  handleUserChange,
  handleEditUserVisible,
  handleModalOpen,
  handleModalClose,
 };
};

export const useSystemContext = () => {
 return useContext(SysContext);
};
