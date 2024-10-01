import { useQuery } from "react-query"
import ApiIpTracker from "../services/Api-ipTracker"

interface IpTracker{
    ip:string,
    isp:string
}
const apitracker = new ApiIpTracker<IpTracker>('&ipAddress=')
const useTrackers=()=>{
    return useQuery<IpTracker>({
        queryKey:['ipTracker'],
        queryFn:()=>apitracker.getAll()
    })
}
export default useTrackers