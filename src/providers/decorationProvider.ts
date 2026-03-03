import * as vscode from 'vscode';
import { Bottleneck } from '../analyzers/bottleneckDetector';

export function highlightBottlenecks(
    editor: vscode.TextEditor,
    issues: Bottleneck[]
) {
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
