import axios from 'axios';
import path from 'path-browserify'

const switchGetFunction = 'AXIOS'
export async function getInfo(infoPath) {
  if (switchGetFunction === 'AXIOS') {
    console.log('AXIOS')
    return await getInfoByAxios(infoPath)
  } else {
    console.log('FETCH')
    return await getInfoByFetch(infoPath)
  }
}

export async function getInfoByFetch(infoPath) {
  try {
    const response = await fetch(infoPath)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export async function getInfoByAxios(infoPath) {
  try {
    const info = await axios.get(infoPath)
    return await info.data
  } catch (error) {
    console.error(error);
  }
}

// user, 1, commit
export function getPath(...info) {
  const dbPath = getDataPath()
  const fullPath = getHttpHeader() + path.join(dbPath, ...info) // http://localhost:12345/user/commit
  console.log("fullPath:", fullPath);
  return fullPath
}


export function getHttpHeader() {
  if (getWebSiteRunningMode() === 'development' || getWebSiteRunningMode() === 'dev') {
    return 'http://'
  } else {
    return 'http://'
  }
}

export function getWebSiteRunningMode() {
  return import.meta.env.MODE
}

export function getDataPath() {
  return import.meta.env.VITE_DB_PATH
} 