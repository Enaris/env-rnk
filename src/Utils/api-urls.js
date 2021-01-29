export const baseUrl = 'https://localhost:5001';
export const apiUrl = `${baseUrl}/api`;

// ------------------- IMAGES -------------------
export const imageUrl = relativePath => relativePath ? `${baseUrl}/${relativePath}` : null;

// ------------------- AUTH -------------------
export const authUrl = `${apiUrl}/auth`;

export const registerUrl = `${authUrl}/register`;
export const loginUrl = `${authUrl}/login`;

// ------------------- ARTICLE -------------------
export const articleUrl = `${apiUrl}/article`;
export const articlePointUrl = (aspUserId, articleId, point) => 
  `${articleUrl}/u/${aspUserId}/a/${articleId}/${point}`;
export const articleRmvScore = (aspUserId, articleId) => 
  `${articleUrl}/u/${aspUserId}/a/${articleId}/rmvScore`;
export const articleDetailsUrl = (aspUserId, articleId) => 
  `${articleUrl}/u/${aspUserId}/a/${articleId}`;
  export const articleDeleteUrl = (aspUserId, articleId) => 
  `${articleUrl}/u/${aspUserId}/a/${articleId}`;