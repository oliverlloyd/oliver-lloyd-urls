const fetchUrl = (url: string): Promise<unknown> => {
  return Promise.resolve({});
};

export const requestMultipleUrls = (urls: string[]): Promise<unknown[]> => {
  if (typeof urls === "string") urls = [urls];

  const results = urls.map(fetchUrl);

  return Promise.all(results);
};
