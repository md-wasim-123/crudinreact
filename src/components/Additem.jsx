import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { addList } from "../state/ListSlice";
import { useDispatch } from "react-redux";


const Additem = () => {
    const dispatch = useDispatch()
    const sta = ["active","paused","vacation"]
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [team, setTeam] = useState("");
    const { isOpen, onOpen,onClose, onOpenChange } = useDisclosure();

    const submit = (e) => {
        e.preventDefault();
        if (name === "" || role === "" || email === "" || status === "" || team === "") return alert("Enter please feild");
        console.log(name, role, team, status, email)
        dispatch(addList({ email, name , role , status , team }));
        onClose();
    }


    return (
        <>
            <Button onPress={onOpen} className="my-10" color="primary" variant="bordered">Add Employee</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Data</ModalHeader>
                            <form method="post">
                                <ModalBody>
                                    <Input
                                        autoFocus
                                        label="Name"
                                        placeholder="Enter your Name"
                                        variant="bordered"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <Input
                                        label="Role"
                                        placeholder="Enter your Role"
                                        type="text"
                                        variant="bordered"
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                    <Input
                                        label="Team"
                                        placeholder="Enter your Team"
                                        type="text"
                                        variant="bordered"
                                        onChange={(e) => setTeam(e.target.value)}
                                    />
                                    <Input
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

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onClick={submit} >
                                        Add
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}

export default Additem