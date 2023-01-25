import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

type Thread = {
    user: string
    title: string
    content: string
}

interface ThreadState {
    loading: boolean
    thread: Thread
    error: string
}

const initialState: ThreadState = {
    loading: false,
    thread: {
        user: "",
        title: "",
        content: "",
    },
    error: "",
}

const setData = {
    op: "",
    title: "",
    content: "",
}

export const fetchThread = createAsyncThunk('threads/fetchThread', (id: number) =>  {
    return axios.get(`http://localhost:8080/${id}`).then((response) => {
        setData.op = response.data.thread.users.username
        setData.title = response.data.thread.title
        setData.content = response.data.thread.content
        return response.data
    })
})

export const threadSlice = createSlice({
    name: 'threads',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchThread.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchThread.fulfilled, (state) => {
            state.loading = false
            state.thread = {
                user: setData.op,
                title: setData.title,
                content: setData.content,
            }
            state.error = ''
        })
        builder.addCase(fetchThread.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Something went wrong'
        })
    },
})

export const selectThread = (state: RootState) => state.threads

export default threadSlice.reducer