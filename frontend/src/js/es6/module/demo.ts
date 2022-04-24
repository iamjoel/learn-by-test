export const a = 'a'
export function hello () {
  return 'hello'
}

export default 'b'

// 导入其他模块，再导出。 aa，bb 在当前模块不可用。
export {
  aa,
  default as bb
} from './other'
