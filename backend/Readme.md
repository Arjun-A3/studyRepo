## File Upload / Download


## Getting Started
**1. Clone the repository**
```bash
```
**2. Specify your database**

Open `src/main/resources/application.properties` file and change following properties accordingly.

```properties
spring.data.mongodb.port = [db port]
spring.data.mongodb.host = [host]
spring.data.mongodb.database = [database name]
```
if you are using MongoDB Atlas, use the following configuration.
* Replace <password> with admin password and <database> with your database name.

```properties
spring.data.mongodb.uri=mongodb+srv://admin:<password>@cluster0.eypdh.mongodb.net/<database>?retryWrites=true&w=majority
```

## REST end-points
* Upload a File: `http://localhost:8080/file/upload`
* Download a File: `http://localhost:8080/file/download/{id}`
* Download a File by Dept Sem Subject  : 'http://localhost:8080/file/downloadByDSS/{deptsemsub} 

##
The application can be accessed at `http://localhost:8080`


That's all! Thank you :muscle:
