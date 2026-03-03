export function analyzeKeywords(content: string) {
    const lines = content.split('\n');
    const usage: Record<string, number> = {};

    lines.forEach(line => {
        const cleaned = line.split('#')[0].trim();
        if (!cleaned) return;

        const parts = cleaned.split(/\s{2,}|\t+/);
        const keyword = parts[0];

        if (keyword && !keyword.startsWith("***")) {
            usage[keyword] = (usage[keyword] || 0) + 1;
        }
    });

    return usage;
}
