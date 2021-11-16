package pkg

// 大写字母开头的的变量和函数被导出
var A = "a" 
func Say () string {
	return A + "B"
}