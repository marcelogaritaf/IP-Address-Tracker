import { useQuery } from "react-query"
import ApiIpTracker from "../services/Api-ipTracker"
import useTrackerStore from "../store"

export interface IpTracker{
    ip:string,
    location:{country:string, region:string,timezone:string}
    isp:string
}
const apitracker = new ApiIpTracker<IpTracker>('ipAddress')
const apitrackerByDomain= new ApiIpTracker<IpTracker>('/ipAddress/')
const useTrackers=()=>{
    const ipTracker= useTrackerStore(s=>s.ipTracker)
    return useQuery<IpTracker>({
        queryKey:['ipTracker', ipTracker],
        queryFn:()=>{
            if(ipTracker.searchText){
                return apitrackerByDomain.getByDomain(ipTracker.searchText)
            }else{
                return apitracker.getAll()
            }
        }
    })
}
export default useTrackers