# Go
## 环境变量
通过 `go env` 查看。一些变量示意:
* GOROOT: go 的安装路径。Mac 上一般是 `/usr/local/go`。
* GOPATH: 工作空间。保存 Go 项目代码和第三方依赖包。

## 把依赖装到当前项目目录下
```
go env GO111MODULE=on
```

查看 是否设置成功
```
go env GO111MODULE
```

默认会装到 `GO_PATH` 下。

## 安装包
```
go get xxx
```
或
```
go install xxxx
```


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

## 注意
1. 有变量没有使用会报错。
1. 一些代码风格不对也会报错。如 if 的 `{` 在新的一行。

## 工具
* [Ginkgo](https://onsi.github.io/ginkgo/) BDD 风格的测试框架。

## 问题
包含多个 package 不会跑测试。。。一个目录下不能有多个package 吗？