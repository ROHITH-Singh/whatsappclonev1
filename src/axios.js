
import axios from "axios"
 
        
const instance = axios.create({
    baseURL: 'https://whatsappclone-rohit.herokuapp.com',
})       
 

export default instance;
