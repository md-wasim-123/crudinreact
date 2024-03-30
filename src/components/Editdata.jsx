import React, { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { updateList } from '../state/ListSlice';

const Editdata = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    const data = useSelector((state) => state.listdata);
    console.log(data)
    const filteredData = data.filter((item) => item.idList === id);

    const { idList, name, role, status, team, email } = filteredData[0]


    const [uname, setName] = useState(name);
    const [urole, setRole] = useState(role);
    const [uteam, setTeam] = useState(team);
    const [uemail, setEmail] = useState(email);
    const [ustatus, setStatus] = useState(status);
    const sta = ["active", "paused", "vacation"];


    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateList({ idList: idList, name: uname, role: urole, team: uteam, email: uemail, status: ustatus }));
        navigate('/list')
    };


    return (

        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-10">
                <div className="w-full bg-slate-950 rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-black font-semibold">
                        <h1 className="text-xl text-center py-10 font-bold leading-tight tracking-tight text-white  md:text-2xl ">
                            Edit Data
                        </h1>
                        <form className="space-y-4 md:space-y-6" method='post'>
                            <Input
                                value={uname}
                                className='bg-white rounded-2xl'
                                autoFocus
                                label="Name"
                                placeholder="Enter your Name"
                                variant="bordered"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                value={urole}
                                className='bg-white rounded-2xl'
                                label="Role"
                                placeholder="Enter your Role"
                                type="text"
                                variant="bordered"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <Input
                                value={uteam}
                                className='bg-white rounded-2xl'
                                label="Team"
                                placeholder="Enter your Team"
                                type="text"
                                variant="bordered"
                                onChange={(e) => setTeam(e.target.value)}
                            />
                            <Input
                                value={uemail}
                                className='bg-white rounded-2xl'
                                label="Enter Your Email"
                                placeholder="Email"
                                type="email"
                                variant="bordered"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Select

                                label="Show Status"
                                className="w-full"
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                {sta.map((val) => (
                                    <SelectItem key={val} value={val}>
                                        {val}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Button color="primary" onClick={handleEdit}>
                                Add
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Editdata
