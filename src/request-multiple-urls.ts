import fetch, { Response } from "node-fetch";

type FetchErrorType = {
  statusCode: number;
  message: string;
  url: string;
};

const buildFetchError = (response: Response): FetchErrorType => ({
  statusCode: response.status || 500,
  message: response.statusText || "Something went wrong",
  url: response.url,
});

const fetchUrl = (url: string): Promise<unknown | FetchErrorType> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        return buildFetchError(response);
      }
      return response.json();
    })
    .catch((error) => ({
      statusCode: error.status || 500,
      message: error.message || "Something went wrong",
      url,
    }));
};

export const requestMultipleUrls = (urls: string[]): Promise<unknown[]> => {
  if (typeof urls === "string") urls = [urls];

  const results = urls.map(fetchUrl);

  return Promise.all(results);
};
