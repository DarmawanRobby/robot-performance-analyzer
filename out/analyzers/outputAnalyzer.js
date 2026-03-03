"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOutputXml = parseOutputXml;
const fast_xml_parser_1 = require("fast-xml-parser");
function parseOutputXml(content) {
    const parser = new fast_xml_parser_1.XMLParser({ ignoreAttributes: false });
    const json = parser.parse(content);
    const tests = [];
    const suites = json.robot.suite;
    function extractTests(suite) {
        if (suite.test) {
            const testArray = Array.isArray(suite.test)
                ? suite.test
                : [suite.test];
            testArray.forEach((t) => {
                tests.push({
                    name: t["@_name"],
                    status: t.status["@_status"]
                });
            });
        }
        if (suite.suite) {
            const childSuites = Array.isArray(suite.suite)
                ? suite.suite
                : [suite.suite];
            childSuites.forEach(extractTests);
        }
    }
    extractTests(suites);
    return tests;
}
//# sourceMappingURL=outputAnalyzer.js.map