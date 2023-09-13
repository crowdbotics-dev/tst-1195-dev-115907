import axios from "axios"
import {
  TESTING_CONNECTOR_123_USERNAME,
  TESTING_CONNECTOR_123_PASSWORD
} from "react-native-dotenv"
const testingConnector = axios.create({
  baseURL: "https://botics.com",
  auth: {
    username: TESTING_CONNECTOR_123_USERNAME,
    password: TESTING_CONNECTOR_123_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
