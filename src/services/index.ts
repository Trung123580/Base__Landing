import {createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance from '@/services/baseAxios'
import axios from 'axios'

const BASE_API = process.env.NEXT_PUBLIC_API_BASE_URL
const BASE_API_HUB = process.env.NEXT_PUBLIC_HUB
const GAME_ID = process.env.NEXT_PUBLIC_GAME_ID
// import axiosInstance from './baseAxios'

// export const postJoinGuild = async ({ guildId, vplayId, vplayName }: { guildId: number; vplayId: number; vplayName: string }) => {
//   try {
//     const response = await axiosInstance.post("/landing/JoinGuild", {
//       guildId,
//       vplayId,
//       vplayName,
//     })
//     if (response.status === 200) {
//       return { status: true }
//     } else {
//       throw new Error("data not found!")
//     }
//   } catch (error: any) {
//     return { status: false, message: error?.response?.data }
//   }
// }
export const getVplayUserInfo = async (token?: string) => {
  // return 2686090951
  const payload = {
    headers: {
      Accept: 'application/json',
      'X-Core-Api-Version': 'v1',
      Authorization: `Bearer ${token}`,
    },
  }
  const api = process.env.NEXT_PUBLIC_LOGIN_DOMAIN + '/api-core/v2/oidc-service/oauth2/me'
  return await axios.get(api, payload).then((res) => {
    if (res.data.code == '0') {
      return res.data.data
    }
    return null
  })
}
// export const getSiteConfig = async () => {
//   try {
//     const response = await axios.get(`${BASE_API_HUB}/api/frontend/config`, {
//       headers: {
//         Accept: "application/json", // định dạng dữ liệu trả về
//       },
//       params: {
//         game_id: GAME_ID,
//       },
//     })
//     if (response.status === 200) {
//       return response.data.data
//     } else {
//       throw new Error("data not found!")
//     }
//   } catch (error) {
//     return null
//   }
// }
export const getRegisterQuantity = createAsyncThunk('quantity', async () => {
  try {
    const response = await axiosInstance.get('GetRegisterQuantity')
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('data not found!')
    }
  } catch (error) {
    return null
  }
})
export const getListConfig = createAsyncThunk('listConfig', async () => {
  try {
    const response = await axiosInstance.get('GetListConfig')
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('data not found!')
    }
  } catch (error) {
    return null
  }
})
export const postDoAction = createAsyncThunk('doAction', async ({vplayName,vplayId, action }: {vplayName:string,vplayId: number , action: string}) => {
  const body = {
    vplayId: vplayId,
    vplayName: vplayName,
    action: action,
  }
  try {
    const response = await axiosInstance.post('DoAction', {...body})
    if (response.status === 200) {
      if (action === 'register'){
        return true
      }else{
        return response.data
      }
    } else {
      throw new Error('data not found!')
    }
  } catch (error) {
    return false
  }
})
export const getSiteConfigServer = async () => {
  try {
    const response = await axios.get(`${BASE_API_HUB}/api/frontend/config`, {
      headers: {
        Accept: 'application/json', // định dạng dữ liệu trả về
      },
      params: {
        game_id: GAME_ID,
      },
    })
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('data not found!')
    }
  } catch (error) {
    return null
  }
}
export const getSiteConfig = createAsyncThunk('siteConfig', async () => {
  try {
    const response = await axios.get(`${BASE_API_HUB}/api/frontend/config`, {
      headers: {
        Accept: 'application/json', // định dạng dữ liệu trả về
      },
      params: {
        game_id: GAME_ID,
      },
    })
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('data not found!')
    }
  } catch (error) {
    return null
  }
})
export const getCallBack = async ({searchParams, callBackUrl}: { searchParams?: any, callBackUrl: string }) => {
  let data: any
  const code = await searchParams?.code
  try {
    const clientId = process.env.NEXT_PUBLIC_APP_CLIENT_ID
    const body = {
      code: code,
      client_id: clientId,
      client_secret: process.env.NEXT_PUBLIC_APP_CLIENT_SECRET,
      grant_type: 'authorization_code',
      response_type: 'code',
      redirect_uri: process.env.NEXT_PUBLIC_DOMAIN + callBackUrl,
    }
    const apiUrl = process.env.NEXT_PUBLIC_LOGIN_DOMAIN + '/api-core/v2/oidc-service/oauth2/token'
    data = await axios.post(apiUrl, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    return data
  } catch (e) {
    return null
  }
}
// export const postSignUp = createAsyncThunk('signUp', async (page: number) => {
//   try {
//     const response = await axiosInstance.get(`${BASE_API}/danh-sach/phim-moi-cap-nhat`, {
//       params: {
//         page: page,
//       },
//     })
//     if (response.status === 200) {
//       return response.data
//     } else {
//       throw new Error('Data not found!')
//     }
//   } catch (error) {
//     return false
//   }
// })
