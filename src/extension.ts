import * as vscode from 'vscode';
import { buildWebview } from './webview';

export function activate(context: vscode.ExtensionContext): void {
  let panel: vscode.WebviewPanel | undefined;

  const disposable = vscode.commands.registerCommand('flatUiColors.open', () => {
    if (panel) {
      panel.reveal(vscode.ViewColumn.One);
      return;
    }

    panel = vscode.window.createWebviewPanel(
      'flatUiColors',
      'Flat UI Colors',
      vscode.ViewColumn.One,
      { enableScripts: true, retainContextWhenHidden: true }
    );

    panel.webview.html = buildWebview();

    panel.webview.onDidReceiveMessage(
      async (msg: { command: string; text: string }) => {
        if (msg.command === 'copy') {
          await vscode.env.clipboard.writeText(msg.text);
          panel?.webview.postMessage({ command: 'copied', text: msg.text });
        }
      },
      undefined,
      context.subscriptions
    );

    panel.onDidDispose(() => { panel = undefined; }, null, context.subscriptions);
  });

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
