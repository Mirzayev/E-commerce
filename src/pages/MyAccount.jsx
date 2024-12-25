import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "antd";


export default function MyAccount(){

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAdress] =useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPasword, setNewPassword] = useState('')

    return(
        <div className="mt-24 px-5 max-w-[1440px] mx-auto">
            <div className="flex justify-end items-center my-5">
               <h2 className={"flex gap-3 font-medium"}><p> Welcome! </p><p className={"text-[#DB4444]"}>{name}</p></h2>

            </div>

            <div className="sm:flex  flex-wrap  my-5">
                <div className={"basis-1/3"}>
                    <h6 className={"font-medium"}> Manage My Account</h6>
                    <div className="my-2 ml-[20px] text-slate-600 ">
                        <NavLink className={"block my-1 text-[#DB4444]"} to={""}>My Profile</NavLink>
                        <NavLink className={"block my-1"} to={""}>Address Book</NavLink>
                        <NavLink className={"block my-1"} to={""}>My Payment Options</NavLink>
                    </div>
                    <div >
                        <h6 className={"mt-4 font-medium"}>My Orders</h6>
                        <div className="my-2 ml-[20px] text-slate-600 ">
                            <NavLink className={"block my-1"} to={""}>My Returns</NavLink>
                            <NavLink className={"block my-1"} to={""}>My Cancellations</NavLink>
                        </div>
                        <h6 className={"mt-4 font-medium"}>My WishList</h6>

                    </div>
                </div>

                <div className={"sm:px-20 px-4 py-4 mt-5 sm:py-10 shadow-md w-full basis-2/3"}>
                    <h4 className={"text-[#DB4444] text-[20px] font-medium mb-4"}>Edit Your Profile</h4>
                    <div className={"grid grid-cols-2 gap-5 w-full"}>
                        <div>
                            <p className={"mb-2"}>First Name</p>
                            <input onChange={(e) => setName(e.target.value)}
                                   className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                                   placeholder={"First Name"}/>
                        </div>
                        <div>
                            <p className={"mb-2"}>Last Name</p>
                            <input onChange={(e) => setLastName(e.target.value)}
                                   className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                                   placeholder={"Last Name"}/>
                        </div>
                        <div>
                            <p className={"mb-2"}>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)}
                                   className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                                   placeholder={"Email"}/>
                        </div>
                        <div>
                            <p className={"mb-2"}>Adress</p>
                            <input onChange={(e) => setAdress(e.target.value)}
                                   className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                                   placeholder={"Adress"}/>
                        </div>




                    </div>

                    <div className={"flex flex-col gap-3 mt-10"}>
                        <p>Password Changes</p>
                        <input onChange={(e) => setCurrentPassword(e.target.value)}
                               className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                               placeholder={"Current Passwod"}/>
                        <input onChange={(e) => setNewPassword(e.target.value)}
                               className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                               placeholder={"New Passwod"}/>
                        <input onChange={(e) => setNewPassword(e.target.value)}
                               className={"bg-[#F5F5F5] outline-none px-2 py-[10px] rounded-md w-full"} type="text"
                               placeholder={"Confirm New Passwod"}/>
                    </div>

                    <div className={"flex justify-end gap-4 mt-8"}>
                        <Button className={"border-none py-2 h-full"}>Cancel</Button>
                        <Button className={"bg-[#DB4444] text-white py-2 h-full"}>Save Changes</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}