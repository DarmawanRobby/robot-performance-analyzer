"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const robotParser_1 = require("./analyzers/robotParser");
const bottleneckDetector_1 = require("./analyzers/bottleneckDetector");
const decorationProvider_1 = require("./providers/decorationProvider");
const outputAnalyzer_1 = require("./analyzers/outputAnalyzer");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('robotAnalyzer.analyzeFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const content = editor.document.getText();
        const keywords = (0, robotParser_1.analyzeKeywords)(content);
        const bottlenecks = (0, bottleneckDetector_1.detectBottlenecks)(content);
        (0, decorationProvider_1.highlightBottlenecks)(editor, bottlenecks);
        vscode.window.showInformationMessage(`Found ${bottlenecks.length} bottlenecks`);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('robotAnalyzer.openOutput', async () => {
        const uri = await vscode.window.showOpenDialog({
            filters: { XML: ['xml'] }
        });
        if (!uri)
            return;
        const content = await vscode.workspace.fs.readFile(uri[0]);
        const text = Buffer.from(content).toString('utf8');
        const results = (0, outputAnalyzer_1.parseOutputXml)(text);
        vscode.window.showInformationMessage(`Parsed ${results.length} test results`);
    }));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map