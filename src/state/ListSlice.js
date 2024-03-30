import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    listdata: [
        {
            idList: "1",
            name:"Wasim",
            role: "CEO",
            team: "Management",
            status: "active",
            email: "tony.reichert@example.com",
        },
        {
            idList: "2",
            name:"hello",
            role: "CEO",
            team: "Management",
            status: "active",
            email: "tony.reichert@example.com",
        },
    ],
    logged: false,
}


export const ListSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        login: (state, action) => {
            state.logged = action.payload
        },
        addList: (state, action) => {
            const { email, name, role, status, team } = action.payload;
            const storedata = {
                idList: nanoid(),
                name: name,
                role: role,
                team: team,
                status: status,
                email: email
            }
            state.listdata.push(storedata);
        },
        updateList: (state, action) => {
            const { idList, name, role, team, email, status } = action.payload
            const index = state.listdata.find((item) => item.idList === idList);
            if (index !== -1) {
                index.name = name;
                index.role = role;
                index.team = team;
                index.email = email;
                index.status = status;
            }

        },
        deleteList: (state, action) => {
            state.listdata = state.listdata.filter((item) => item.idList !== action.payload);
        },

    }
})


export const { addList, deleteList, login, updateList } = ListSlice.actions

export const listReducer = ListSlice.reducer