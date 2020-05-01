import {Link} from "react-router-dom";
import React,{Component} from "react";




class AsideBar extends Component {


    render() {
        return (
            <aside className="personal-area__sidebar sidebar">
                <div className="sidebar__info">
                    <div className="sidebar__image">
                    </div>
                    <span className="sidebar__name">Никитюк Богдан</span>
                    <span className="sidebar__location">Odessa,Odessa region</span>
                </div>
                <nav className="sidebar__nav">
                    <Link to="/personal-info" className="sidebar__nav-item">Информация обо мне</Link>
                    <Link to="/companies" className="sidebar__nav-item">Мои кампании</Link>
                    <Link to="/company-info" className="sidebar__nav-item">История заказов</Link>
                </nav>
            </aside>
        );
    }
}

export default AsideBar;

