import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}` + '/' + `${import.meta.env.VITE_APP_GAME_NAME}`,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  },
})

export default axiosInstance
