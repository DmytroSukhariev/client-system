import {Link} from "react-router-dom";
import React from "react";


interface IState {
    dropdownCompanies : boolean;
}
interface IProps {
    companies:string[]
}



class AsideBar extends React.Component<IProps,IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            dropdownCompanies:false
        }
    }

    onOpenDropdown = ():void => {
        this.setState(prevState => ({
            dropdownCompanies:!prevState.dropdownCompanies
        }));
    }


    render() {
        const { dropdownCompanies } = this.state;
        const style : object = {
            display: dropdownCompanies ? 'block' : 'none'
        }

        const arrayOfJSXMenuCompany = this.props.companies.map(company => {
            const url = `/companies/${company}`
            return (
                <Link
                    to={url}
                    className="sidebar__nav-item sidebar__nav-item_paddleft">{company}</Link>
            );
        })

        return (
            <aside className="sidebar">
                <div className="sidebar__info">
                    <div className="sidebar__image">
                    </div>
                    <span className="sidebar__name">Никитюк Богдан</span>
                    <span className="sidebar__location">Odessa,Odessa region</span>
                </div>
                <nav className="sidebar__nav">
                    <Link to="/personal-info" className="sidebar__nav-item">Информация обо мне</Link>
                    <div className="sidebar__dropdown">
                        <div className="sidebar__nav-item" onClick={this.onOpenDropdown} >Мои кампании</div>
                            <div className="sidebar__dropdown-content" style={style}>
                                {arrayOfJSXMenuCompany}
                                <Link to="/companies" className="sidebar__nav-item sidebar__nav-item_paddleft">Добавить кампанию</Link>
                            </div>
                    </div>
                    <Link to="/company-info" className="sidebar__nav-item">
                        История заказов
                    </Link>
                </nav>
            </aside>
        );
    }
}

export default AsideBar;

