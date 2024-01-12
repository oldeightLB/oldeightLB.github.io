import { reactive } from 'vue'

export const setting = reactive<{
  loading: boolean
  name: string
  avatar: string | number
  index?: number
  preview?: boolean
  select?: string
  bubbles: number
  transition: boolean
}>({
  loading: true,
  name: '开拓者',
  avatar: DEFAULT_AVATAR,
  index: undefined,
  preview: false,
  select: '',
  bubbles: 0,
  transition: true
})

export const setName = (name: string) => {
  if (name.length < 1) {
    setting.name = '开拓者'
  } else {
    setting.name = name
  }
  localStorage.setItem('sr-message-name', setting.name)
}

export const setAvatar = (key: string | number = DEFAULT_AVATAR) => {
  setting.avatar = key
  localStorage.setItem('sr-message-avatar', JSON.stringify(setting.avatar))
}

setting.name = localStorage.getItem('sr-message-name') || '开拓者'
try {
  setting.avatar = JSON.parse(localStorage.getItem('sr-message-avatar') || '')
} catch {
  setting.avatar = DEFAULT_AVATAR
}
setting.bubbles = Number(localStorage.getItem('sr-message-bubbles')) || 0

export const autoPlaySetting = reactive<{
  flag: boolean
  list: Message[]
  option: Message[]
}>({
  flag: false,
  list: [],
  option: []
})
