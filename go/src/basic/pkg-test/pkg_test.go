package pkg_test

import (
	parent "github/iamjoel/learn-go/src/basic"          // 父package
	"github/iamjoel/learn-go/src/basic/pkg-test/sub"    // 子 package。路径/包名
	pkg "github/iamjoel/learn-go/src/basic/sibling-pkg" // 兄弟节点。这里不一样
	"testing"

	. "github.com/onsi/ginkgo"

	. "github.com/onsi/gomega"
)

func TestPkg(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "导出")
}

var _ = Describe("导出", func() {
	It("导出", func() {
		Expect(parent.B).To(Equal("B"))
		Expect(sub.Sub).To(Equal("Sub"))
		Expect(pkg.A).To(Equal("a"))
		Expect(pkg.Say()).To(Equal("aB"))
	})
})
