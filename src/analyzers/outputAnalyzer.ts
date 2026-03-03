import { XMLParser } from "fast-xml-parser";

export function parseOutputXml(content: string) {

    const parser = new XMLParser({ ignoreAttributes: false });
    const json = parser.parse(content);

    const tests: any[] = [];
    const suites = json.robot.suite;

    function extractTests(suite: any) {
        if (suite.test) {
            const testArray = Array.isArray(suite.test)
                ? suite.test
                : [suite.test];

            testArray.forEach((t: any) => {
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
