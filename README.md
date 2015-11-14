[![Stories in Ready](https://badge.waffle.io/Kadajett/blog-backend.png?label=ready&title=Ready)](https://waffle.io/Kadajett/blog-backend)
# Blog API, because fuck the wheel.

## Endpoints
### Posts
- POST: {title: String, body: String} -> {200 OK}
- GET: {} -> [
              {
                "_id": "5640ec458598adee294b936a",
                "title": "PostMan test#1",
                "body": "This is a test for creating a post in postman",
                "date": 1447095365148,
                "__v": 0
              }
            ]
