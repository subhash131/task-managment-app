import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Directory from "../Routes/Directory";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0button from "../Auth0Button";

const TasksSection: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      {isAuthenticated ? (
        <>
          <HeaderTasks />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/today" element={<TodaysTasks />} />
            <Route path="/important" element={<ImportantTasks />} />
            <Route
              path="/completed"
              element={<DoneTasks done={true} title="Completed tasks" />}
            />
            <Route
              path="/Incompleted"
              element={<DoneTasks done={false} title="Incompleted tasks" />}
            />
            <Route path="/results" element={<SearchResults />} />
            <Route path="/dir/:dir" element={<Directory />} />
            <Route path="/task/:taskId" element={<TaskOnly />} />
            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Auth0button />
        </div>
      )}
    </main>
  );
};

export default TasksSection;
