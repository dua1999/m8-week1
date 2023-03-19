import React from 'react'



export default function page() {

    const getMovie =async ({}) => {
        const api = await fetch ('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
        const movies = await api.json()
        
        return movies
    }
 
}
