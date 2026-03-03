"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeKeywords = analyzeKeywords;
function analyzeKeywords(content) {
    const lines = content.split('\n');
    const usage = {};
    lines.forEach(line => {
        const cleaned = line.split('#')[0].trim();
        if (!cleaned)
            return;
        const parts = cleaned.split(/\s{2,}|\t+/);
        const keyword = parts[0];
        if (keyword && !keyword.startsWith("***")) {
            usage[keyword] = (usage[keyword] || 0) + 1;
        }
    });
    return usage;
}
//# sourceMappingURL=robotParser.js.map