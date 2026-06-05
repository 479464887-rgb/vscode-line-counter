const vscode = require('vscode');
function activate(context) {
  console.log('vscode-line-counter activated');
  let disposable = vscode.commands.registerCommand('vscode-line-counter.hello', () => {
    vscode.window.showInformationMessage('vscode-line-counter is ready!');
  });
  context.subscriptions.push(disposable);
}
function deactivate() {}
module.exports = { activate, deactivate };
