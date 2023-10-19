import React from "react";

const Header=()=>{
    return(<div>
        <div className="d-row d-flex border border-secondary">
            <div className="border border-info rounded mr-2">
                <a href="/home">Home</a>
            </div>
            <div className="border border-info rounded mr-2">
                <a href="parks">Parks</a>
            </div>
            <div className="mr-2">
                <button className="btn btn-info"></button>
            </div>
        </div>
    </div>)
}
export default Header