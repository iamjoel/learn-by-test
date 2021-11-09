package var_test
import "testing" // 测试包
import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
)

func TestVar(t *testing.T) {
  RegisterFailHandler(Fail)
  RunSpecs(t, "变量")
}

var _ = Describe("变量", func() {
  It("变量", func() {
    var a = "a"
    Expect(a).To(Equal("a"))
    a = "b"
    Expect(a).To(Equal("b"))
  })

  It("常量", func() {
    const b = "b"
    Expect(b).To(Equal("b"))
  })
})
