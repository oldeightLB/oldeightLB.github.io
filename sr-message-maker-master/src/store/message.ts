import { nextTick, reactive, toRaw, watch } from 'vue'
import { setLoadingType } from '@/assets/scripts/setup'
import { setting } from './setting'

export const message = reactive<{
  list: MessageListItem[]
}>({
  list: []
})

export const addNewMessage = () => {
  const time = Date.now()
  message.list.unshift({
    id: time,
    time,
    list: []
  })
  setting.index = time
  setting.select = '未命名短信'
}

const setWatch = () => {
  setLoadingType('message')
  watch(message.list, () => {
    nextTick(() => {
      updateDB()
    })
  })
}

// https://github.com/blacktunes/sr-light-cone/blob/master/src/assets/scripts/indexedDB.ts
let hasDB = true
let db: IDBDatabase

export const updateDB = () => {
  db.transaction('data', 'readwrite')
    .objectStore('data')
    .put({
      id: 0,
      data: JSON.parse(JSON.stringify(toRaw(message.list)))
    })
}

export const getDB = () => {
  console.log('正在加载短信数据库...')
  const _db = window.indexedDB.open('sr-message')
  _db.onsuccess = (event) => {
    db = (event.target as IDBOpenDBRequest).result
    if (hasDB) {
      db.transaction('data', 'readonly').objectStore('data').get(0).onsuccess = (e) => {
        try {
          const data = (e.target as IDBRequest).result?.data
          if (typeof data === 'string') {
            message.list = JSON.parse(data)
          } else {
            message.list = data || {}
          }
        } finally {
          setWatch()
        }
      }
    } else {
      updateDB()
      setWatch()
    }
  }

  _db.onupgradeneeded = (event) => {
    db = (event.target as IDBOpenDBRequest).result
    if (!db.objectStoreNames.contains('data')) {
      hasDB = false
      db.createObjectStore('data', { keyPath: 'id' })
    }
  }
}

try {
  getDB()
} catch (err) {
  console.error(err)
  setLoadingType('message', true)
}
