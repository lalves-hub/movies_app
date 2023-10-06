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
    throw error; // Re-throw the error to propagate it
  }

}

export const getMovieWithId = async (id) => {
  //console.log("mf",id);
  
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

export const getTopRated = async () => {
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
    console.log('Top Rated Data:', data.results[0]);
    return data.results;

  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it
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
    throw error; // Re-throw the error to propagate it
  }
}
//export const getTopRated = async () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDdmYWEyMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
//     }
//   };

//   try {
//     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
//     const data = await response.json();
//     //console.log('Get top rated data: ', data.results);
//     return data.results;
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw the error to propagate it
//   }
// }




//down from here is TV Shows APIs 
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
    throw error; // Re-throw the error to propagate it
  }
}


export const getAiringToday = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjUzNzVlYzVhODMwYTliYjI3MDZiMTFmMTViMTFlMSIsInN1YiI6IjY0YTYwZmUxMDfmMDExZTAyYzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOBLiHIxe7VSc6adBroHn9-xe12Ug3F4JiQVTrs27GI'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options);
    const data = await response.json();
    //console.log('Get airing today data: ', data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it
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
    const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options);
    const data = await response.json();
    console.log('ue !!! Get airing today data: ', data);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it
  }
};
