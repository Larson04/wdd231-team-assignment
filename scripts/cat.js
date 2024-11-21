async function getJson(url) {
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey
      }
    };
    let data = {};
    const response = await fetch(baseURL + url, options);
    if (response.ok) {
      data = await response.json();
    } else throw new Error("response not ok");
    return data;
  }
  