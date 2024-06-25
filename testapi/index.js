const axios = require('axios');

const fetchData = async () => {
  const headers = {
    "Accept": "application/json, text/plain, */*",
    "Referer": "http://localhost:3000/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
  };

  const data = {
    firstname: "Muhammad",
    lastname: "Sheraz",
    email: "muammadshiraz492@gmail.com",
    professional: "Programmer",
    password: "Hacker@1Hacker@1"
  };

  try {
    const response = await axios.post("http://127.0.0.1:8000/seller/register/", data, {
      headers: headers,
      // You can also add other Axios config here, like `timeout` or `maxRedirects`
    });

    console.log(response.data);
    // Handle success or further processing of result
  } catch (error) {
    console.error('Error:', error.message);
    // Handle error state or display error to user
  }
};

// Call fetchData function
fetchData();
