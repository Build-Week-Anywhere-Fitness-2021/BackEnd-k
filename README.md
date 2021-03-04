#  Build Week - unit 4 - Anywhere Fitness

## Base URL
https://some1.herokuapp.com


## API endpoints

### login/register

| Auth | Endpoint           | Required                        | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, email, password, role | Username must be unique| Creates a new user with auto Id.        |
| POST | /api/auth/login    | username, password              | None         | Returns a welcome message and the JSON Web Token. |

### For Instructor - token is required (they can do the following to their classes)

| Auth   | Endpoint                         | Required         | Notes                                                           |
| ------ | -------------------------------- | ---------------- | --------------------------------------------------------------- |
| GET    | /api/instructor     | None             | Gets list of classes                                            |
| POST   | /api/instructor     | name, instructor_name, type, intensity,location, date, max_size, duration  | Creates a new class. Date is formatted as follows "yyyy-mm-dd" |
| PUT    | /api/instructor/:id | any key          | Updates the specific key value(s) from a class with the given Id|
| DELETE | /api/instructor:id  | None             | Deletes the WHOLE class with given Id                           |

### For Users - token is required

| Auth | Endpoint                    | Required |  Notes                                                            |
| ---- | --------------------------- | -------- |  ---------------------------------------------------------------- |
| GET  | /api/users     | N/A      |  Gets all classes                                                              |
| GET  | /api/users/:id | id       |  Gets the class with that ID                                                   |
