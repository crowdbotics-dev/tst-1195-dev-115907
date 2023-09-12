import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_pettype_list = createAsyncThunk(
  "petTypes/api_v1_pettype_list",
  async payload => {
    const response = await apiService.api_v1_pettype_list(payload)
    return response.data
  }
)
export const api_v1_pettype_create = createAsyncThunk(
  "petTypes/api_v1_pettype_create",
  async payload => {
    const response = await apiService.api_v1_pettype_create(payload)
    return response.data
  }
)
export const api_v1_pettype_retrieve = createAsyncThunk(
  "petTypes/api_v1_pettype_retrieve",
  async payload => {
    const response = await apiService.api_v1_pettype_retrieve(payload)
    return response.data
  }
)
export const api_v1_pettype_update = createAsyncThunk(
  "petTypes/api_v1_pettype_update",
  async payload => {
    const response = await apiService.api_v1_pettype_update(payload)
    return response.data
  }
)
export const api_v1_pettype_partial_update = createAsyncThunk(
  "petTypes/api_v1_pettype_partial_update",
  async payload => {
    const response = await apiService.api_v1_pettype_partial_update(payload)
    return response.data
  }
)
export const api_v1_pettype_destroy = createAsyncThunk(
  "petTypes/api_v1_pettype_destroy",
  async payload => {
    const response = await apiService.api_v1_pettype_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petTypesSlice = createSlice({
  name: "petTypes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_pettype_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_pettype_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_pettype_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_pettype_list,
  api_v1_pettype_create,
  api_v1_pettype_retrieve,
  api_v1_pettype_update,
  api_v1_pettype_partial_update,
  api_v1_pettype_destroy,
  slice: petTypesSlice
}
