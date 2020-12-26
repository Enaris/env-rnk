export const baseUrl = 'https://localhost:5001';
export const apiUrl = `${baseUrl}/api`;

// ------------------- IMAGES -------------------
export const imageUrl = relativePath => relativePath ? `${baseUrl}/${relativePath}` : null;

// ------------------- AUTH -------------------
export const authUrl = `${apiUrl}/auth`;

export const registerUrl = `${authUrl}/register`;
export const loginUrl = `${authUrl}/login`;

// ------------------- AUTH -------------------
export const articleUrl = `${apiUrl}/article`;