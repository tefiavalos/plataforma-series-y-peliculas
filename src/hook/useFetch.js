  import { useState, useEffect } from 'react';

// const useFetch = (type) => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const apiKey = "219be100a89ca386f6d06ac96e56548e"
//         fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
//             .then(res => res.json())
//             .then(data => setData(data));
//     }, [])
//     return data
// }

// export default useFetch;

const useFetch = (url) => {
    const [data, setData] = useState();
   
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
   
    return data;
   }
   export default useFetch;