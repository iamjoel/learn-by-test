package pkg_test
import "testing"
import (
  // pkg "github/iamjoel/learn-go/src/basic/pgk" // 兄弟的加载不到
  basic "github/iamjoel/learn-go/src/basic" // 父级的可以加载到
  // sub "sub" // 子级 也加载不到。。。 sub/sub 也不行
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
)

func TestPkg(t *testing.T) {
  RegisterFailHandler(Fail)
  RunSpecs(t, "导出")
}

var _ = Describe("导出", func() {
  It("导出", func() {
    Expect(basic.B).To(Equal("B"))
    // Expect(sub.Sub).To(Equal("Sub"))
    // Expect(pkg.A).To(Equal("a1"))
    // Expect(pkg.Say()).To(Equal("a"))
  })
})
