import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
// import { Spinner } from "@nextui-org/react";
import { EditIcon } from "../components/EditIcon";
import { DeleteIcon } from "../components/DeleteIcon";
import { columns } from "../utils/data";
import Additem from "../components/Additem";
import { deleteList } from "../state/ListSlice";
import { Link } from "react-router-dom";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const ListData = () => {
    const [Loading, setLoading] = useState(false)
    const list = useSelector((state) => state.listdata);
    const dispatch = useDispatch()
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-5">
                        <Tooltip content="Edit user">
                            <Link to={`/edit/${user.idList}`}>
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                            </Link>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span onClick={() => dispatch(deleteList(user.idList))} className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div className="mx-auto container max-w-6xl min-h-screen py-10">
            <Additem />
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>

                <TableBody >
                    {list.map((item) => (
                        <TableRow key={item.idList}>
                            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    ))}

                </TableBody>


            </Table>

        </div>
    );
}


export default ListData
