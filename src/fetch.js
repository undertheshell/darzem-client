const makeRequest = async (url, method, body) => {
    const response = await fetch(url, {
        method,
        body: method === "GET" ? null : JSON.stringify(body),
        headers: {'Content-Type': 'application/json'} 
    });

    const data = await response.json();
    const status = response.status;
    return { data, status };
}

module.exports = makeRequest;