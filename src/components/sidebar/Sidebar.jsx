import React, { useContext } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import GroupIcon from '@mui/icons-material/Group';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanIcon from '@mui/icons-material/Lan';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People';
import CableIcon from '@mui/icons-material/Cable';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import GroupsIcon from '@mui/icons-material/Groups';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PasswordIcon from '@mui/icons-material/Password';
import PolicyIcon from '@mui/icons-material/Policy';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import "./sidebar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
    const{dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">AdminPortal</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Home</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    <li><AssignmentTurnedInIcon className="icon"/><span>Request</span></li>
                    <li><TaskAltIcon className="icon"/><span>Task</span></li>
                    <li><TransferWithinAStationIcon className="icon"/><span>Delegation</span></li>
                    <li><PostAddOutlinedIcon className="icon"/><span>New Access Request</span></li>
                    <p className="title">Administration</p>
                    <li><CableIcon className="icon"/><span>Endpoint</span></li>
                    <li><LanIcon className="icon"/><span>Workflow</span></li>
                    <li><PermIdentityIcon className="icon"/><span>Roles</span></li>
                    <li><GroupsIcon className="icon"/><span>Groups</span></li>
                    <li><ScheduleIcon className="icon"/><span>Jobs</span></li>
                    <li><AdminPanelSettingsIcon className="icon"/><span>Identity Manager</span></li>
                    <li><VerifiedUserIcon className="icon"/><span>Audit</span></li>
                    <li><MailOutlineIcon className="icon"/><span>Mail</span></li>
                    <p className="title">Password Management</p>
                    <li><PolicyIcon className="icon"/><span>Policy</span></li>
                    <li><PasswordIcon className="icon"/><span>Reset Password</span></li>
                    <p className="title">User</p>
                    <li><RecentActorsIcon className="icon"/><span>Employee</span></li>
                    <li><RecentActorsIcon className="icon"/><span>Non-Employee</span></li>
                    <li><PeopleIcon className="icon"/><span>Accounts</span></li>
                    <p className="title">Reports</p>
                    <li><AssessmentIcon className="icon"/><span>All Reports</span></li>
                    <li><AssessmentIcon className="icon"/><span>User Reports</span></li>
                    <p className="title">Settings</p>
                    <li><ManageAccountsIcon className="icon"/><span>Profile</span></li>
                    <li><ExitToAppIcon className="icon"/><span>Signout</span></li>
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}> </div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}> </div>
            </div>
        </div>
    )
}
export default Sidebar