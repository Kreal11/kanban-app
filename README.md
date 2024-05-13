# Kanban App

Kanban App is a convenient task management application. 

Any participant can create, edit, and delete boards containing tasks. Authentication is not provided but can be added if necessary.

When navigating to a specific board page (by ID in the search at the top or by clicking on the board header), you enter a space divided into 3 columns: To Do, In Progress, and Done. Each user can create, edit, and delete tasks. There is also the ability to drag and drop tasks between columns depending on the progress of a particular task.

Clicking on a specific task displays a separate page with the task's title and full description.

## Hosting
The backend of the project is hosted on Render, while the frontend is deployed on Vercel.
Please note that the Render hosting uses the free tier, so if there are no requests to it for 10-15 minutes, it may "fall asleep," requiring 1-2 minutes to wake up upon reopening the site.

## Get Started

You can use the link on the Live page at the top right of this repository.

To run the project locally, clone this repository and use the following commands:

### Backend
```bash
cd apps/backend
yarn
yarn serve
```

### Frontend
```bash
cd apps/frontend
yarn
yarn dev
```

## Technologies

<div align="center">

#### Frontend
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![React Router Dom](https://img.shields.io/badge/-React_Router_Dom-CA4245?style=flat&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/-React_Hook_Form-46A6F7?style=flat&logo=react&logoColor=white)
![React-beautiful-dnd](https://img.shields.io/badge/-React_beautiful_dnd-%23000000?style=flat)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-1572B6?style=flat)
</div>  

<div align="center">
  
#### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-47A248?style=flat&logo=mongoose&logoColor=white)
</div>

<div align="center">
  
#### Others
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Yarn](https://img.shields.io/badge/-Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white)
![Husky](https://img.shields.io/badge/-Husky-%23FF4081?style=flat)
</div>

## Code Quality Control

Husky is utilized in the project, ensuring that commits adhere to project requirements and do not contain errors. Additionally, Spell Checker, ESLint, and Prettier are employed for code cleanliness.
