import * as vscode from 'vscode';
import { analyzeKeywords } from './analyzers/robotParser';
import { detectBottlenecks } from './analyzers/bottleneckDetector';
import { highlightBottlenecks } from './providers/decorationProvider';
import { parseOutputXml } from './analyzers/outputAnalyzer';

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        vscode.commands.registerCommand('robotAnalyzer.analyzeFile', () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const content = editor.document.getText();
            const keywords = analyzeKeywords(content);
            const bottlenecks = detectBottlenecks(content);

            highlightBottlenecks(editor, bottlenecks);

            vscode.window.showInformationMessage(
                `Found ${bottlenecks.length} bottlenecks`
            );
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('robotAnalyzer.openOutput', async () => {
            const uri = await vscode.window.showOpenDialog({
                filters: { XML: ['xml'] }
            });
            if (!uri) return;

            const content = await vscode.workspace.fs.readFile(uri[0]);
            const text = Buffer.from(content).toString('utf8');

            const results = parseOutputXml(text);

            vscode.window.showInformationMessage(
                `Parsed ${results.length} test results`
            );
        })
    );
}

export function deactivate() {}
