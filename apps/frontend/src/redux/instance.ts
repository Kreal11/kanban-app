import axios from "axios";

export const kanbanApi = axios.create({
  baseURL: "https://kanban-app-y6i8.onrender.com/",
});
