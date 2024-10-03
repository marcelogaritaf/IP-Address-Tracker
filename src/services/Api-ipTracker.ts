import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://geo.ipify.org/api/v2/country?apiKey=',
    params:{
        apiKey:'at_iiZDytHumX2jCN2P2gqQMQzplvdtn'
    }
})
class ApiIpTracker<T>{
    endpoint:string
    constructor(endpoint:string){
        this.endpoint=endpoint
    }
    getAll=async()=>{
        const res= await axiosInstance.get<T>(this.endpoint)
        return res.data
    }
    getByDomain=async(ip:string)=>{
        const res= await axiosInstance.get<T>(this.endpoint+ip)
        return res.data
    }
}
export default ApiIpTracker