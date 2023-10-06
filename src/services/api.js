// movie APIs
export const getNowPlaying = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data = await response.json();
    //console.log('Now Playing Data:', data.results);
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; 
  }

}


export const getTopRatedMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  //https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await response.json();
    //console.log('Top Rated Data:', data.results[0]);
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; 
  }

}

export const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const data = await response.json();
    //console.log('Get popular data: ', data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export const getUpcoming = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const data = await response.json();
    //console.log('Get upcoming data: ', data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}


//TV Shows APIs 
export const getTopRatedTV = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  //https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1
  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    const data = await response.json();
    //console.log('Top Rated Data:', data.results[0]);
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; 
  }

}

export const getPopularTV = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
    const data = await response.json();
    //console.log('Get popular TV data: ', data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}


export const getAiringToday = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
    const data = await response.json();
    //console.log('Get airing today data: ', data);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export const getOnAir = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
    const data = await response.json();
    //console.log('On the air data API: ', data);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};


// searching APIs
export const searchMultiWithInput = async (name) => {
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'

    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`, options);
    const data = await response.json();
    
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export const searchMovieWithInput = async (name) => {
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
    const data = await response.json();
    
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export const getMovieWithId = async (id) => {

  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, options);
    const data = await response.json();
    
    return data;

  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it
  }
}

export const getTvWithID = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&page=1`, options);
    const data = await response.json();
    
    return data;

  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it
  }

}