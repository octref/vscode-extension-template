import * as vscode from 'vscode'

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.helloWorld', () => {
      vscode.window.showInformationMessage('Hello World!')
    })
  )
}
