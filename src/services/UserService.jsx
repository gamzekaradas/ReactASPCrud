//Rest isteği örneği
import axios from 'axios';


export const getUserData=()=>{

        axios.get('http://localhost:65065/home/getName').then(resp => {
        console.log(resp.data);
        return resp.data;
});

}



