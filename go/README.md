# Go
## 环境变量
通过 `go env` 查看。一些变量示意:
* GOROOT: go 的安装路径。Mac 上一般是 `/usr/local/go`。
* GOPATH: 工作空间。保存 Go 项目代码和第三方依赖包。

## 运行 Go 文件
```
go 路径/文件名.go
```

可运行的 Go 文件的 package 必须是 main。并且有 main 方法。
```go
package main

func main() {
}
```

## 生成可运行的二进制文件
```
go 路径/文件名.go
```

## 测试
```
go test -v ./...
```
