import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Minh social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />

                    <input type="text" placeholder='Search for friend post and video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarsIcon">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
