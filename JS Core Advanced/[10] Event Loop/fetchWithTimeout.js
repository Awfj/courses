function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error("Request Timeout"));
        }, timeout);
    });

    const fetchPromise = fetch(url, { signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
            }
            return response.json();
        });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000)
    .then(data => console.log(data))
    .catch(e => console.error(e));