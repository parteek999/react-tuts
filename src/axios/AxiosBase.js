import axios from 'axios'
const AxiosBase = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
// AxiosBase.interceptors.request.use(
//     async(config) => {
     
//        config.headers['authorization'] = await localStorage.getItem('accessToken');   
//     //    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//         return config;
//     },
//     error => {
//         Promise.reject(error);
//     }
// )

// AxiosBase.interceptors.response.use((response) => response, (error) => {
//     if (error && error.response && error.response.status === 401) {
     
//         localStorage.removeItem('authorization');
     
//         window.location = 'localhost:4000';
//     }
//     return error;
//   });
  
export default AxiosBase;
export const handleError = (error) => {
    alert('handle Error')
    console.log('HandleError : ',JSON.stringify(error))
    if(error.response.status === 404){
    //   showMessage(error.response.data.Message)
    }
}
