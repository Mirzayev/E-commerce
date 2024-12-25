import {NavLink} from "react-router-dom";

export default function NotFound() {


    return (
        <div>
            <div className="alert alert-danger flex justify-center items-center h-[100vh]">
                <h1 className={"sm:text-[60px] text-[40px] font-semibold"}> 404 Not Found</h1>
            </div>
        </div>
    )
}