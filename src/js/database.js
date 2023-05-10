import { getInfo, getPath } from "./utils"

export async function getCards() {
  const path = getPath('cards')
  const data = await getInfo(path)
  console.log(data);
  return data
}

export async function getHighline() {
  const path = getPath('highline')
  const data = await getInfo(path)
  console.log(data);
  return data
}

export async function getProfile() {
  const path = getPath('profile')
  const data = await getInfo(path)
  console.log(data);
  return data
}

export async function getMessage() {
  const path = getPath('message')
  const data = await getInfo(path)
  console.log(data);
  return data
}

export async function getRequest() {
  const path = getPath('request')
  const data = await getInfo(path)
  console.log(data);
  return data
}

export const cards = await getCards()
export const highline = await getHighline()
export const profile = await getProfile()
export const message = await getMessage()
export const request = await getRequest()
