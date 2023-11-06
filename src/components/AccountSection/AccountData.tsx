import React from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";
import { useAuth0 } from "@auth0/auth0-react";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);
  const { user, logout, isAuthenticated } = useAuth0();

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <span className="font-medium">{user?.given_name || "unknown "}</span>
          <img
            src={user?.picture || avatar1}
            alt="cat"
            className="w-10 rounded-full ml-4"
          />
        </span>

        <DarkMode />
        <TasksDone />

        <DeleteTasks />
        <div className="text-center text-white font-medium pt-6">
          {isAuthenticated && (
            <button
              className=""
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
