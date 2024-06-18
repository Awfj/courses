async function fetchData() {
    let data = await fetchAndParse('https://jsonplaceholder.typicode.com/posts/1');
    data = await fetchAndParse(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
    return data;

    async function fetchAndParse(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
        }
        return await response.json();
    }
}

fetchData()
    .then(data => console.log(data))
    .catch(e => console.error(e));