function fetchUrls(urls) {
  const promises = urls
    .map(url => fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}`);
        }
        return response.json();
      }));
  return Promise.allSettled(promises);
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

fetchUrls(urls).then(contents => {
  contents.forEach(content => {
    if (content.status === 'fulfilled') {
      console.log(content.value);
    } else {
      console.error(content.reason);
    }
  });
});