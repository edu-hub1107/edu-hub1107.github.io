import React from 'react';
import axios from 'axios';

class Songs extends React.Component {
    componentDidMount() {
        axios.get('https://api.musixmatch.com/ws/1.1/', {apikey: '040272d6445998f0a5869084fcc590ea'})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('There is an error with the API.')
        })
    }
    render() {
        return(
            <div>
                Songs
            </div>
        )
    }
}
export default Songs