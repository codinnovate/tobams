// fetch single post
export const getPosts = async (filters = {}) => {
  try {
    // Build the query string from filters
    const { tag, searchQuery } = filters;
    let queryString = '';

    if (tag) {
      queryString += `&tag=${tag}`;
    }
    if (searchQuery) {
      queryString += `&search=${searchQuery}`;
    }

    // Ensure the query string starts with a '?' if it's not empty
    queryString = queryString ? '?' + queryString.slice(1) : '';

    const response = await fetch(`https://dev.to/api/articles${queryString}`);
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
  
  