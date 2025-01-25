// fetch single post
export const getPosts = async () => {
    try {
      const response = await fetch('https://dev.to/api/articles');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return data.slice(0, 9); // Array of posts
    } catch (error) {
      console.error('Error fetching posts:', error);
      return []; // Return empty array on error
    }
  };


// fetch details page
export const getPostDetails = async (slug: number) => {
    try {
      const response = await fetch(`https://dev.to/api/articles/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching post details:', error);
      return null;
    }
  };
  
  