import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";

const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    token: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.errorMessage = "";
            state.token = "";
        },
        logout(state) {
            state.token = null;
            state.user = null;
            localStorage.removeItem('authTokens');
          },
        setCredentials(state, action) {
            console.log(action.payload);
            state.user = action.payload;
            state.token = action.payload.token;
        }
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            });
    }
});

export const register = createAsyncThunk(
    "auth/register",
    async (data, thunkAPI) => {
        try {
            const response = await authServices.register(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const response = await authServices.login(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;