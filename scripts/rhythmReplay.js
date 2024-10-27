// const API_KEY = ; 
// once I figure out the whole .env file I can put the real API Key in here and github won't get mad at me
const searchQuery = 'music';
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}%20official%20music%20video&type=video&videoCategoryId=10&videoDuration=medium&safeSearch=strict&regionCode=US&relevanceLanguage=en&maxResults=50&key=${API_KEY}`;

console.log("Script is working")
fetch(url)
  .then(response => response.json())
  .then(data => {
    const items = data.items;
    items.forEach(item => {
      console.log(item.snippet.title); // Print out the video titles
    });
  })
  .catch(error => {
    console.error('Error fetching data from YouTube API:', error);
  });
