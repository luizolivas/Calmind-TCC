import axios from "axios";

function filterVideos(videos) {
    const filteredVideos = [];
  
    for (const video of videos) {
        const title = video.snippet.title.toLowerCase();

        const hasKeyword = title.includes("cura") ||
            title.includes("curar") ||
            title.includes("curou") ||
            title.includes("curando") ||
            title.includes("combate") ||
            title.includes("combater") ||
            title.includes("combateu") ||
            title.includes("combatendo") ||
            title.includes("bater") ||
            title.includes("bate") ||
            title.includes("bateu") ||
            title.includes("batendo") ||
            title.includes("luta") ||
            title.includes("lutar") ||
            title.includes("lute") ||
            title.includes("lutei") ||
            title.includes("lutando") ||
            title.includes("vencer") ||
            title.includes("venceu") ||
            title.includes("venci") ||
            title.includes("vencendo") ||
            title.includes("perder") ||
            title.includes("perdeu") ||
            title.includes("perdi") ||
            title.includes("perdendo") ||
            title.includes("disputa") ||
            title.includes("disputar") ||
            title.includes("disputando") ||
            title.includes("disputei");
  
        if (!hasKeyword) {
            filteredVideos.push(video);
        }
    }
  
    return filteredVideos;
}

export async function fetchVideos(searchQuery, quantity) {
    try {
        const apiKey = 'AIzaSyBrsWY3n5sCkIXqI8h4JF8Ea29axOHw2cw';
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=${quantity}&key=${apiKey}`);

        return filterVideos(response.data.items);
    } catch (error) {
        console.error('Error fetching videos:', error);
        return;
    }
}