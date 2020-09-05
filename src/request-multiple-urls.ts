import fetch, { Response } from "node-fetch";

type FetchErrorType = {
  statusCode: number;
  message: string;
  url: string;
};

type TodoType = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
};

const buildFetchError = (response: Response): FetchErrorType => ({
  statusCode: response.status || 500,
  message: response.statusText || "Something went wrong",
  url: response.url,
});

const checkForErrors = (response: Response): Response => {
  if (!response.ok) {
    throw buildFetchError(response);
  }
  return response;
};

const fetchUrl = (url: string): Promise<TodoType | FetchErrorType> => {
  return fetch(url)
    .then(checkForErrors)
    .then((response) => response.json())
    .catch((error) => ({
      statusCode: error.statusCode || error.status || 500,
      message: error.message || "Something went wrong",
      url,
    }));
};

export const requestMultipleUrls = (
  urls: string[]
): Promise<(TodoType | FetchErrorType)[]> => {
  if (typeof urls === "string") urls = [urls];

  const results = urls.map(fetchUrl);

  return Promise.all(results);
};
