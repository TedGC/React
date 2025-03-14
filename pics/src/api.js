import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID -l11Np-Nk-yoFZd0NWkqRKkVe_yfqScBIMq6x7d6gKc'
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImages; 