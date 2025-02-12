function extractYouTubeEmbedURL(url) {
    const regex = /(?:youtube\.com\/(?:.*[?&]v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&controls=1` : null;
}

export default extractYouTubeEmbedURL;