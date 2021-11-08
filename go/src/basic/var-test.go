package varTest
import "fmt"
import "testing" // 测试包
import "./variable.go" // 导入包有问题 local import ./variable.go in non-local package

func TestVar () {
	fmt.Println("VarA:", VarA)
	res := VarA
	if res != "a"
		t.Errorf("IntMin(2, -2) = %s; want -2", res)
}