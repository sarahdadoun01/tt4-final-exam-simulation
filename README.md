- 20 multiple-choice questions (easy to intermediate)
- A complete fullstack project (API + frontend)
- GitHub publishing
- Docker Compose for running the app (production-like environment)
- Frontend framework depends on the **last digit of the student ID**

---

## 📝 **FINAL EXAM – Fullstack Development with Docker, Git, GitHub, .NET Core and JavaScript Frameworks**

---

### ✍️ **Part I – Multiple Choice Questions (20 questions)**  

Each question is worth 0.5 points. Total: **10 points**

---

#### 🐳 **Docker**

1. What is Docker?
   - C) A container platform for creating and managing environments

2. Which command builds a Docker image from a Dockerfile?
   - B) `docker build`

3. What is `docker-compose` used for?
   - C) Orchestrating multiple containers

4. What does the command `docker ps` do?
   - C) Show running containers

---

#### 🌿 **Git / GitHub**

5. What does `git clone` do?  
   - B) Download a copy of a remote repository

6. What is a “commit” in Git?
   - C) Save changes locally in Git

7. Which command pushes changes to GitHub?  
   - A) `git push`

8. What is the purpose of a `.gitignore` file?  
   - B) Ignore files/folders from being committed

---

#### ⚙️ **.NET Core**

9. Which command creates a new Web API project in .NET Core?
   - B) `dotnet new webapi`

10. Which file configures services and middleware in .NET Core?
    - A) `Startup.cs`

11. Which package enables CORS in a .NET API?
    - B) `Microsoft.AspNetCore.Cors`

12. What does the `[HttpGet]` attribute do in a Controller?
    - C) Handle a GET request

---

#### ⚛️ **Frontend Frameworks**

13. In Angular, what is a *component*?
    - C) A part of the UI

14. In React, what is `useState`?
    - B) A hook to manage state

15. What does VueJS use to loop through items?
    - B) `v-for`

16. In Svelte, how do you declare a reactive variable?
    - C) `$:`

---

#### 💡 **General Concepts**

17. What is CRUD?
    - C) Create, Read, Update, Delete

18. How do you install dependencies in Angular?  
    - C) `npm install`

19. What is the purpose of `package.json`?
    - C) Manage project dependencies

20. How do you start services using Docker Compose?
    - D) `docker-compose up`

---

### 💻 **Part II – Final Project (10 points)**

#### 🔧 Project: **Task Manager (CRUD Application)**

---

### ✅ Requirements

#### 📦 Backend (ASP.NET Core API)

- Create a `.NET Core WebAPI` project
- Build CRUD operations for "Task" entity:
  - ID
  - Title
  - Description
  - Completed (boolean)
- Use Entity Framework with SQLite
- Enable CORS
- Push code to a public GitHub repository

#### 🌐 Frontend App

Use a frontend framework based on the **last digit of the student ID**:

| Last Digit | Framework |
|------------|-----------|
| 0, 2, 4    | Angular   |
| 1, 3, 5    | React     |
| 6, 9       | VueJS     |
| 7, 8       | Svelte    |

Must implement:

- Fetching tasks from the API
- Listing, creating, updating, deleting tasks
- Simple UI (Bootstrap, Tailwind or Material allowed)

#### 🐳 Docker Setup

- Create `Dockerfile` for **backend** and **frontend**
- Create `docker-compose.yml` to simulate production
- Must run using `docker-compose up`

---

### 📁 Expected GitHub Repo Structure

```
/final-project
├── backend/
│   ├── Dockerfile
│   └── src/
│       └── TodoApi/
├── frontend/
│   ├── Dockerfile
│   └── src/
│       └── app/
├── docker-compose.yml
├── README.md
```

---

## 📄 **Extra Requirement – Project README**

The `README.md` file in the GitHub repository **must contain this final exam** (both parts I and II).

- Students must **highlight their selected answers** in the multiple-choice questions by surrounding the chosen option with `**` (markdown bold).
  
  ### Example

  ```markdown
  1. What is Docker?  
     - A) A relational database  
     - **B) A container platform for creating and managing environments**  
     - C) A web server  
     - D) A frontend framework  
  ```
  
  ---

  # Submit only the link to your github repository
