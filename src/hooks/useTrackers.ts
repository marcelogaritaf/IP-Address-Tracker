import { useQuery } from "react-query"
import ApiIpTracker from "../services/Api-ipTracker"

export interface IpTracker{
    ip:string,
    location:{country:string, region:string,timezone:string}
    isp:string
}
const apitracker = new ApiIpTracker<IpTracker>('ipAddress')
const useTrackers=()=>{
    return useQuery<IpTracker>({
        queryKey:['ipTracker'],
        queryFn:()=>apitracker.getAll()
    })
}
export default useTrackers