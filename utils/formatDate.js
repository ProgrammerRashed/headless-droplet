function formatDate(dateString) {
    if(!dateString) return null;
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
}

export default formatDate