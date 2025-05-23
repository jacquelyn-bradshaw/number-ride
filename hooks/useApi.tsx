export const useApi = (url: string) => {
  const callApiCheckAnswer = async (options?: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  };

  return { callApiCheckAnswer };
};
