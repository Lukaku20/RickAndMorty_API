export const API_RM = {
    URL: "https://rickandmortyapi.com/api",
    
    CHARACTERS: () => {
      return `${API_RM.URL}/character`;
    },
  
    CHARACTERS_BY_ID: (id) => {
      return `${API_RM.URL}/character/${id}`;
    },
  };
  