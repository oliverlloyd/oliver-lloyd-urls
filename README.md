## Fetch Multiple Urls

A very simple library to accept an array of todo urls and return a promise containing all todo responses.

### Usage

#### Request

```javascript
await requestMultipleUrls([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
]);
```

#### Expected response

Responses are an array of either todos or errors, in the format `(TodoType | FetchErrorType)[]` where:

```typescript
type TodoType = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
};

type FetchErrorType = {
  statusCode: number;
  message: string;
  url: string;
};
```

### What is a todo?

It's an object taken from the placeholder service: https://jsonplaceholder.typicode.com/

### Next steps?

- We could mock the api call to remove the dependency on an external service from our tests and generally speed things up. I generally prefer end to end tests but sometimes this can cause annoying false negatives and slow things down.
- Make the lib a class. It's nice to abstract configuration like versions and base url and a class lets you do this in a clean manner. It's also easier to mock fetch if you can pass an instance of it into a constructor.
- Validate the request urls. Obviously deciding if a string is a valid url is not easy but if choices were made on what is acceptable then these could be validated for.
- Add the ability to pass in partial urls and build them up in the lib. Maybe we can just accept todo ids and construct the urls from these.
- When building urls consider if we want to use a lib like url-join to guard against double slashes or if we are happy to write this code ourselves to reduce code bloat
- Prefer native apis like URL to work with urls
