package basic
import "testing" // 测试包
// import "github/iamjoel/learn-go/src/basic" 不需引入。直接同一个包导出的。

func TestVar (t *testing.T) {
	res := VarA
	if res != "a" {
		t.Errorf("IntMin(2, -2) = %s; want -2", res)
	}
}