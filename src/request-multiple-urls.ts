import fetch from "node-fetch";

const fetchUrl = (url: string): Promise<unknown> => {
  return fetch(url).then((response) => response.json());
};

export const requestMultipleUrls = (urls: string[]): Promise<unknown[]> => {
  if (typeof urls === "string") urls = [urls];

  const results = urls.map(fetchUrl);

  return Promise.all(results);
};
