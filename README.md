# Task Management App (React + TypeScript + Auth0)

## Overview
This is a task management application built using **React**, **TypeScript**, and **Auth0** authentication. 
It allows users to log in, create, edit, view, and delete tasks. Tasks have a title, optional description, due date, and completion status.

## Features
- Secure authentication using Auth0.
- Create, edit, view, and delete tasks.
- Mark tasks as completed.
- Responsive and user-friendly design.
- Protected routes for authenticated users only.

## Tech Stack
- **Frontend Framework**: React (TypeScript)
- **Authentication**: Auth0
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: CSS

## Project Structure
```
src/
  components/        # Reusable UI components
  context/           # Context for global state (tasks)
  pages/             # Page components (Dashboard, Create, Edit, View)
  types/             # TypeScript types
  App.tsx            # App entry point
  index.tsx          # React DOM entry point
```

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/logandeveloper1000/Task-Management
cd task-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root of the project and add your Auth0 credentials:
```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

4. Start the development server:
```bash
npm start
```

## Usage
- Log in with your Auth0 credentials.
- Create a new task by clicking the **+ Create Task** button.
- Edit or delete tasks from the dashboard.
- View task details in the task detail page.

## Deployment
You can deploy this application to **Vercel** or **Netlify**.

### Steps:
1. Build the project:
```bash
npm run build
```
2. Deploy the `build` folder using your preferred hosting provider.
3. Update your Auth0 application settings to include your production URL in:
   - Allowed Callback URLs
   - Allowed Logout URLs
   - Allowed Web Origins

## License
This project is open source and available under the MIT License.
