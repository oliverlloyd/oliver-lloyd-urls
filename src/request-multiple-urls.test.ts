import { requestMultipleUrls } from "./request-multiple-urls";

describe("When requesting multiple urls", () => {
  it("accepts an array of urls and returns an array of responses", async () => {
    expect(
      await requestMultipleUrls([
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
      ])
    ).toEqual([{}, {}]);
  });
  it.todo("handles when an empty array is passed");
  it.todo("will also accept a single url as a string");
  it.todo("will populate the responses array with any errors");
  it.todo("includes the orginal url in the error response");
});
