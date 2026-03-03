"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightBottlenecks = highlightBottlenecks;
const vscode = require("vscode");
function highlightBottlenecks(editor, issues) {
    const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255,0,0,0.3)'
    });
    const decorations = issues.map(issue => {
        const line = editor.document.lineAt(issue.line);
        return {
            range: line.range,
            hoverMessage: issue.message
        };
    });
    editor.setDecorations(decorationType, decorations);
}
//# sourceMappingURL=decorationProvider.js.map