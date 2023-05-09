const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLTpJlrhLvT4j7TOIX6zche3rYIJihQFZp&part=snippet&maxResults=15'
const content = null || document.getElementById('playlist__container');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '309a1a0153msh737276e30761492p187f82jsn5e8702ec7d16',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.snippet.resourceId.videoId}" target="_blank">
            <div class="playlist__content">
                <div class="playlist__video">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="">
                </div>
                <div>
                    <h3>
                        <span></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        </a>
        `).slice(0, 8).join('')}`;

        content.innerHTML = view;
    } catch (error) {
        
    }
})();