import * as t from './index'

declare module 'telegraf/telegram' {
  export = t.Telegram
}
