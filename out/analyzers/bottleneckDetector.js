"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectBottlenecks = detectBottlenecks;
function detectBottlenecks(content) {
    const lines = content.split('\n');
    const issues = [];
    lines.forEach((line, index) => {
        if (/Sleep\s+([5-9]|\d{2,})/i.test(line)) {
            issues.push({
                line: index,
                message: "High sleep duration detected"
            });
        }
        if (/Wait Until Keyword Succeeds/i.test(line)) {
            issues.push({
                line: index,
                message: "Retry loop detected"
            });
        }
    });
    return issues;
}
//# sourceMappingURL=bottleneckDetector.js.map