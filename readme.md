## Travel Agency (Backend)
A si mple travel agency backend.
Note: It doesnt have dedicated notification & history, so fetch with this endpoint: ``http://localhost:500/api/v1/getbokkings/:id`` , where id == user id.

---
### Documentation

- for signing up 
```
 http://localhost:500/api/v1/signup
```
- for siging in
```
 http://localhost:500/api/v1/signin
```
- for adding place
```
 http://localhost:500/api/v1/addplace
```
- to get all the places
```
 http://localhost:500/api/v1/getplaces
```
- for adding place
```
 http://localhost:500/api/v1/booking
```
- to get booked trip/to use it for notification & history  
```
 http://localhost:500/api/v1/getbokkings/:id
```
- for deleting a booked trip
```
 http://localhost:500/api/v1//deletebooking/:id
```

---