package pkg_test
import "testing"
import (
  pkg "github/iamjoel/learn-go/src/basic"
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
)

func TestPkg(t *testing.T) {
  RegisterFailHandler(Fail)
  RunSpecs(t, "导出")
}

var _ = Describe("导出", func() {
  It("导出", func() {
    Expect(pkg.A).To(Equal("a"))
    Expect(pkg.Say()).To(Equal("a"))
  })
})
