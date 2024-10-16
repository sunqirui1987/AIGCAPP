
// const defaultConfig = {
//   host: window.location.host,
//   protocol: window.location.protocol,
// }
export const comfyuiApiConfig = {
  host: 'd404812291456946-8188.cn-northwest-2.gpu-instance.ppinfra.com',
  protocol: 'http:',
}

const config = {
  host: 'localhost:3333',
  protocol: 'http:',
}

export function getBackendUrl(endpoint: string): string {
  return `${config.protocol}//${config.host}${endpoint}`
}

export function getComfyUIBackendUrl(endpoint: string): string {
  return `${comfyuiApiConfig.protocol}//${comfyuiApiConfig.host}${endpoint}`
}

export default config
