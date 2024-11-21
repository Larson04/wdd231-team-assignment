baseURL = "https://api.thedogapi.com/v1/";
apiKey = "live_N0KX4HDQfvOZye7XUtK79dhez98YS7mPyJxC3vGRQLH56NBFovhNx8qbvx9Lcuab";
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
