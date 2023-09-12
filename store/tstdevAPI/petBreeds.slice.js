import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_petbreed_list = createAsyncThunk(
  "petBreeds/api_v1_petbreed_list",
  async payload => {
    const response = await apiService.api_v1_petbreed_list(payload)
    return response.data
  }
)
export const api_v1_petbreed_create = createAsyncThunk(
  "petBreeds/api_v1_petbreed_create",
  async payload => {
    const response = await apiService.api_v1_petbreed_create(payload)
    return response.data
  }
)
export const api_v1_petbreed_retrieve = createAsyncThunk(
  "petBreeds/api_v1_petbreed_retrieve",
  async payload => {
    const response = await apiService.api_v1_petbreed_retrieve(payload)
    return response.data
  }
)
export const api_v1_petbreed_update = createAsyncThunk(
  "petBreeds/api_v1_petbreed_update",
  async payload => {
    const response = await apiService.api_v1_petbreed_update(payload)
    return response.data
  }
)
export const api_v1_petbreed_partial_update = createAsyncThunk(
  "petBreeds/api_v1_petbreed_partial_update",
  async payload => {
    const response = await apiService.api_v1_petbreed_partial_update(payload)
    return response.data
  }
)
export const api_v1_petbreed_destroy = createAsyncThunk(
  "petBreeds/api_v1_petbreed_destroy",
  async payload => {
    const response = await apiService.api_v1_petbreed_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petBreedsSlice = createSlice({
  name: "petBreeds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_petbreed_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petbreed_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petbreed_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_petbreed_list,
  api_v1_petbreed_create,
  api_v1_petbreed_retrieve,
  api_v1_petbreed_update,
  api_v1_petbreed_partial_update,
  api_v1_petbreed_destroy,
  slice: petBreedsSlice
}
