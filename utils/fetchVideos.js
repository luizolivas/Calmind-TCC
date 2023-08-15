import axios from "axios";

export async function fetchVideos(searchQuery) {
    try {
        const apiKey = 'AIzaSyBrsWY3n5sCkIXqI8h4JF8Ea29axOHw2cw';
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}`);

        return response.data.items;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return;
    }
}