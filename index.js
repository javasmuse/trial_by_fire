const axios = require("axios");

const GIPHY_API_KEY = "D01xedM2kFT2xSv3kMtRWMqAEMP6nxvI";
const GIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEYWORD = "kanye";

axios.get(`${GIPHY_API_BASE_URL}/search?api_key=${GIPHY_API_KEY}&q=${SEARCH_KEYWORD}`).then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
        console.log(gif.images.downsized.url);

    });

})