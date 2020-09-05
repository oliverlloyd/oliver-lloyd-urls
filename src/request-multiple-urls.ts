import fetch from "node-fetch";

type FetchErrorType = {
  error: Error;
  url: string;
};

const fetchUrl = (url: string): Promise<unknown | FetchErrorType> => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      return {
        error: error.message || error,
        url,
      };
    });
};

export const requestMultipleUrls = (urls: string[]): Promise<unknown[]> => {
  if (typeof urls === "string") urls = [urls];

  const results = urls.map(fetchUrl);

  return Promise.all(results);
};
