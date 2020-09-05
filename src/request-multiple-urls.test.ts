import { requestMultipleUrls } from "./request-multiple-urls";

describe("When requesting multiple urls", () => {
  it("accepts an array of urls and returns an array of responses", async () => {
    expect(
      await requestMultipleUrls([
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
      ])
    ).toEqual([
      {
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      },
      {
        completed: false,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        userId: 1,
      },
    ]);
  });
  it("handles when an empty array is passed", async () => {
    expect(await requestMultipleUrls([])).toEqual([]);
  });
  it("will also accept a single url as a string", async () => {
    expect(
      await requestMultipleUrls([
        "https://jsonplaceholder.typicode.com/todos/1",
      ])
    ).toEqual([
      {
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      },
    ]);
  });
  it.todo("will populate the responses array with any errors");
  it.todo("includes the orginal url in the error response");
});
