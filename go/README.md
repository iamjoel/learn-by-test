# Go
## 环境变量
通过 `go env` 查看。一些变量示意:
* GOROOT: go 的安装路径。Mac 上一般是 `/usr/local/go`。
* GOPATH: 工作空间。保存 Go 项目代码和第三方依赖包。

## 把依赖装到当前项目目录下
version >= 1.13 时，使用下面的命令：
```
go env -w GO111MODULE=on
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

安装`go.mod`里已有的包：
```
go mod download
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

## 包
一个目录下，只能有一个包。
## import 包
文章: [仓库，模块和包](https://zhuanlan.zhihu.com/p/392958300)

### 内部包
内部包只可被直接父级包和同级的相邻包使用。通过定义包名为 internal 即可。


## 注意
1. 有变量没有使用会报错。
1. 一些代码风格不对也会报错。如 if 的 `{` 在新的一行。

## 工具
* [Ginkgo](https://onsi.github.io/ginkgo/) BDD 风格的测试框架。

## 问题