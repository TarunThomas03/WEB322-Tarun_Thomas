# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |    |
| ----------------------------------------------------- | ------ |----|
| DB                                                    |        |    |
| - neondb created                                      | 10     | 10 |
| Routes                                                |        |    |
| - api CRUD endpoints added for orders                 | 10     | 10 |
| Server                                                |        |    |
| - sequelize or mongo dependencies added               | 10     | 10 |
| - successfully connect to db                          | 10     | 10 |
| Create Database Objects Definitions                   |        |    |
| - User                                                | 10     | 10 |
| - Product                                             | 10     | 10 |
| - Order                                               | 10     | 10 |
| Change your service classes use your Database objects |        |    |
| - User                                                | 10     | 5  |
| - Product                                             | 10     | 5  |
| - Order                                               | 10     | 5  |

## Total Score: 85 / 100

The code looks excellent but at the end of the day your crud post & put operations
won't work because you did not add the express.json() middleware to your
app. This is a requirement for the body-parser to work.  

Given that there is no data in your database I imagine you ran into this issue
as well.


