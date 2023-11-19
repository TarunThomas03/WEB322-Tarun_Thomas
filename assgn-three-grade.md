# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 5   |
| - node_modules is not in the repository                     | 5      | 3   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 6   |
| - api CRUD endpoints added for products                     | 10     | 6   |
| - api login endpount added                                  | 10     | 6   |
| - routes are refactored router modules                      | 15     | 10  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 5   |
| - product data is moved under data folder                   | 5      | 5   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 10  |
| - create a Product Service for CRUD operations              | 10     | 10  |
| - create an AuthenticationService for simple authentication | 15     | 12  |

## Total Score: 78 / 100

### Comments:

Good effort but there is a fundamental problem with your routes. The issues is that you don't send a JSON response. Your Authenticion sevice hadnles the response but that should happen in the route. Also you are missing the
.gitignore file.

So you are on the right tracj just not quite there.
