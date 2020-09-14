
import axios from "axios"
 
        
const instance = axios.create({
    baseURL: 'https://whatsappbackend.herokuapp.com/',
})       
 

export default instance;
