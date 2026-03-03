export interface Bottleneck {
    line: number;
    message: string;
}

export function detectBottlenecks(content: string): Bottleneck[] {
    const lines = content.split('\n');
    const issues: Bottleneck[] = [];

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
