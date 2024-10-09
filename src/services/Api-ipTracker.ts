import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://geo.ipify.org/api/v2/country?',
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
    getByDomain=async(parametro:string)=>{
        const res= await axiosInstance.get<T>(`${this.endpoint}`,{params:{domain:parametro}})
        return res.data
    }
}
export default ApiIpTracker