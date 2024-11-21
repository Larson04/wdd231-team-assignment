baseURL = "https://api.thecatapi.com/v1/";
apiKey = "live_ZsuSFgHn00xI0Vvimbt9yeottf8IFJ6vT0XZKrVNTsufOmbvYPzvOYfkdbhGUzJu";

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
    console.log(data)
    return data;
  }

getJson("breeds")