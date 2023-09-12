import axios from "axios"
const tstdevAPI = axios.create({
  baseURL: "https://tst-1195-dev-115907.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return tstdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_pet_list(payload) {
  return tstdevAPI.get(`/api/v1/pet/`)
}
function api_v1_pet_create(payload) {
  return tstdevAPI.post(`/api/v1/pet/`, payload)
}
function api_v1_pet_retrieve(payload) {
  return tstdevAPI.get(`/api/v1/pet/${payload.id}/`)
}
function api_v1_pet_update(payload) {
  return tstdevAPI.put(`/api/v1/pet/${payload.id}/`, payload)
}
function api_v1_pet_partial_update(payload) {
  return tstdevAPI.patch(`/api/v1/pet/${payload.id}/`, payload)
}
function api_v1_pet_destroy(payload) {
  return tstdevAPI.delete(`/api/v1/pet/${payload.id}/`)
}
function api_v1_petbreed_list(payload) {
  return tstdevAPI.get(`/api/v1/petbreed/`)
}
function api_v1_petbreed_create(payload) {
  return tstdevAPI.post(`/api/v1/petbreed/`, payload)
}
function api_v1_petbreed_retrieve(payload) {
  return tstdevAPI.get(`/api/v1/petbreed/${payload.id}/`)
}
function api_v1_petbreed_update(payload) {
  return tstdevAPI.put(`/api/v1/petbreed/${payload.id}/`, payload)
}
function api_v1_petbreed_partial_update(payload) {
  return tstdevAPI.patch(`/api/v1/petbreed/${payload.id}/`, payload)
}
function api_v1_petbreed_destroy(payload) {
  return tstdevAPI.delete(`/api/v1/petbreed/${payload.id}/`)
}
function api_v1_pettype_list(payload) {
  return tstdevAPI.get(`/api/v1/pettype/`)
}
function api_v1_pettype_create(payload) {
  return tstdevAPI.post(`/api/v1/pettype/`, payload)
}
function api_v1_pettype_retrieve(payload) {
  return tstdevAPI.get(`/api/v1/pettype/${payload.id}/`)
}
function api_v1_pettype_update(payload) {
  return tstdevAPI.put(`/api/v1/pettype/${payload.id}/`, payload)
}
function api_v1_pettype_partial_update(payload) {
  return tstdevAPI.patch(`/api/v1/pettype/${payload.id}/`, payload)
}
function api_v1_pettype_destroy(payload) {
  return tstdevAPI.delete(`/api/v1/pettype/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return tstdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tstdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_pet_retrieve,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_destroy,
  api_v1_petbreed_list,
  api_v1_petbreed_create,
  api_v1_petbreed_retrieve,
  api_v1_petbreed_update,
  api_v1_petbreed_partial_update,
  api_v1_petbreed_destroy,
  api_v1_pettype_list,
  api_v1_pettype_create,
  api_v1_pettype_retrieve,
  api_v1_pettype_update,
  api_v1_pettype_partial_update,
  api_v1_pettype_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
