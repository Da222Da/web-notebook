在 JavaScript 设计模式中，工厂模式是一种创建型设计模式，它提供一种创建对象的方法，而无需指定具体的类。工厂模式通过定义一个共同的接口来创建对象，使得客户端代码可以通过工厂方法来创建对象，而无需关心具体的实现细节。主要用于以下场景：

- 当需要根据不同条件创建不同类型的对象时，可以通过工厂模式统一管理对象的创建过程：

```js
class PDFReport {
	generateReport(data) {
		// 生成PDF报告
		return `PDF报告：${data}`;
	}
}

class ExcelReport {
	generateReport(data) {
		// 生成Excel报告
		return `Excel报告：${data}`;
	}
}

class ReportFactory {
	createReport(type) {
		if (type === "pdf") {
			return new PDFReport();
		} else if (type === "excel") {
			return new ExcelReport();
		}
	}
}

const reportFactory = new ReportFactory();
const pdfReport = reportFactory.createReport("pdf");
const excelReport = reportFactory.createReport("excel");

console.log(pdfReport.generateReport("示例数据")); // 输出：PDF报告：示例数据
console.log(excelReport.generateReport("示例数据")); // 输出：Excel报告：示例数据
```
