import { ISidebar } from "../interfaces";
import {Icons} from '../icons/index'
export const sideBarArr : ISidebar[] = [
    {
        iconInactive:<Icons.profileInactive/>,
        icon:<Icons.profile/>,
        label:"Account Management",
        link:"/"
    },
    {
        iconInactive:<Icons.fileInactive/>,
        icon:<Icons.file/>,
        label:"Bidding Management",
        link:"/bidding-management"
    },
    {
        iconInactive:<Icons.analyticsInactive/>,
        icon:<Icons.analytics/>,
        label:"Reports & Analytics",
        link:"/reports"
    },
]

