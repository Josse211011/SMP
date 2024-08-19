document.getElementById('google-login').addEventListener('click', function() {
    window.location.href = getGoogleAuthUrl();
});

function getGoogleAuthUrl() {
    const clientId = 'YOUR_CLIENT_ID_HERE'; // Ganti dengan Client ID dari Google API Console
    const redirectUri = 'http://localhost:8000'; // Ganti dengan URI pengalihan yang sesuai
    const responseType = 'token';
    const scope = 'profile email';
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&include_granted_scopes=true`;
    
    return authUrl;
}
