import { create } from "zustand";
interface IpTrackerAddress{
    searchText?:string
}
interface IpTrackerStore{
    ipTracker: IpTrackerAddress,
    setSearchText: (searchText:string)=>void
}
const useTrackerStore = create<IpTrackerStore>(set=>({
    ipTracker:{},
    setSearchText:(searchText)=>set(()=>({ipTracker:{searchText}}))
}))
export default useTrackerStore;