#  Build Week - unit 4 - Anywhere Fitness

## Base URL
https://some1.herokuapp.com


## API endpoints

### login/register

| Auth | Endpoint           | Required                        | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, email, password, role | None         | Creates a new user with auto Id.                  |
| POST | /api/auth/login    | username, password              | None         | Returns a welcome message and the JSON Web Token. |

### For Instructor - token is required (they can do the following to their classes)

| Auth   | Endpoint                         | Required         | Notes                                                           |
| ------ | -------------------------------- | ---------------- | --------------------------------------------------------------- |
| GET    | /api/auth/instructor/classes     | N/A              | Gets list of classes                                            |
| POST   | /api/auth/instructor/classes     | name, instructor_name, type, intensity,location, date, max_size, duration  | N/A  | Creates a new class in the database. Date has to string in "2020-11-17" format.    |
| PUT    | /api/auth/instructor/classes/:id | any key          | Updates the key from a class with given Id                      |
| DELETE | /api/auth/instructor/classes/:id | any of the field | Deletes the class with given Id                                                                                                                               |

### For Users - token is required

| Auth | Endpoint                    | Required |  Notes                                                                         |
| ---- | --------------------------- | -------- |  ----------------------------------------------------------------------------- |
| GET  | /api/auth/users/classes     | N/A      |  Gets all the classes                                                          |
| GET  | /api/auth/users/classes/:id | id       |  Gets the class with that ID                                                   |
