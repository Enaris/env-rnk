export const formToAddArticleData = (formData, cover, aspUserId) => {
  return {
    ...formData, 
    cover, 
    aspAuthorId: aspUserId
  }
}