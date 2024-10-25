const API_KEY = process.env.API_KEY; 
const searchQuery = 'music';
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoCategoryId=10&regionCode=US&relevanceLanguage=en&key=${API_KEY}`;

console.log("Script is working")
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Optionally, filter for videos with titles that contain only English characters
    const englishResults = data.items.filter(item => /^[a-zA-Z0-9\s.,'!?]+$/.test(item.snippet.title));
    
    // Print out the filtered video titles
    englishResults.forEach(item => {
      console.log(item.snippet.title);
    });
  })
  .catch(error => {
    console.error('Error fetching data from YouTube API:', error);
  });
