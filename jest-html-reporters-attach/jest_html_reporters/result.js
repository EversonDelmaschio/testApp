window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":5,"numPassedTests":12,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":6,"numTotalTests":13,"startTime":1651429297809,"success":false,"testResults":[{"leaks":false,"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429301369,"runtime":2983,"slow":false,"start":1651429298386},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/Transacao.test.js","testResults":[{"ancestorTitles":["Component de Transacao do extrato"],"duration":265,"failureDetails":[],"failureMessages":[],"fullName":"Component de Transacao do extrato Deve renderizar igual ao snapshot","location":null,"numPassingAsserts":0,"status":"passed","title":"Deve renderizar igual ao snapshot"}],"failureMessage":null},{"leaks":false,"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429301481,"runtime":3102,"slow":false,"start":1651429298379},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/Transacoes.test.js","testResults":[{"ancestorTitles":["Component de Transações do component principal"],"duration":325,"failureDetails":[],"failureMessages":[],"fullName":"Component de Transações do component principal Deve renderizar uma lista de transaçoes","location":null,"numPassingAsserts":0,"status":"passed","title":"Deve renderizar uma lista de transaçoes"},{"ancestorTitles":["Component de Transações do component principal"],"duration":10,"failureDetails":[],"failureMessages":[],"fullName":"Component de Transações do component principal Deve renderizar igual ao snapshot","location":null,"numPassingAsserts":0,"status":"passed","title":"Deve renderizar igual ao snapshot"}],"failureMessage":null},{"leaks":false,"numFailingTests":1,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429302307,"runtime":3924,"slow":false,"start":1651429298383},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/Conta.test.js","testResults":[{"ancestorTitles":["Component Conta do component prinicpal"],"duration":1172,"failureDetails":[],"failureMessages":[],"fullName":"Component Conta do component prinicpal Deve renderizar o saldo","location":null,"numPassingAsserts":0,"status":"passed","title":"Deve renderizar o saldo"},{"ancestorTitles":["Component Conta do component prinicpal"],"duration":31,"failureDetails":[{"actual":"","error":{},"expected":"","matcherName":"","message":"Error: Unable to find an element with text: Realizar transacao","passed":false,"stack":"Error: Unable to find an element with text: Realizar transacao\n    at Object.<anonymous> (/Users/eversondelmaschio/projetos/testApp/__tests__/Conta.test.js:13:12)\n    at Object.asyncJestTest (/Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)\n    at /Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:45:12\n    at new Promise (<anonymous>)\n    at mapper (/Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:28:19)\n    at /Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:75:41"}],"failureMessages":["Error: Unable to find an element with text: Realizar transacao\n    at Object.<anonymous> (/Users/eversondelmaschio/projetos/testApp/__tests__/Conta.test.js:13:12)\n    at Object.asyncJestTest (/Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)\n    at /Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:45:12\n    at new Promise (<anonymous>)\n    at mapper (/Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:28:19)\n    at /Users/eversondelmaschio/projetos/testApp/node_modules/jest-jasmine2/build/queueRunner.js:75:41"],"fullName":"Component Conta do component prinicpal Deve renderizar o botão de realizar transaçao","location":null,"numPassingAsserts":0,"status":"failed","title":"Deve renderizar o botão de realizar transaçao"},{"ancestorTitles":["Component Conta do component prinicpal"],"duration":25,"failureDetails":[],"failureMessages":[],"fullName":"Component Conta do component prinicpal Deve renderizar o input de valor","location":null,"numPassingAsserts":0,"status":"passed","title":"Deve renderizar o input de valor"}],"failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mComponent Conta do component prinicpal › Deve renderizar o botão de realizar transaçao\u001b[39m\u001b[22m\n\n    Unable to find an element with text: Realizar transacao\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 11 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mConta\u001b[39m saldo\u001b[33m=\u001b[39m{\u001b[32m''\u001b[39m} realizarTransacao\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m {}} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 12 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 13 |\u001b[39m     expect(getByText(\u001b[32m'Realizar transacao'\u001b[39m))\u001b[33m.\u001b[39mtoBeTruthy()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 14 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 15 |\u001b[39m   it(\u001b[32m'Deve renderizar o input de valor'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 16 |\u001b[39m     \u001b[36mconst\u001b[39m {getByTestId} \u001b[33m=\u001b[39m render(\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36m__tests__/Conta.test.js\u001b[39m\u001b[0m\u001b[2m:13:12)\u001b[22m\u001b[2m\u001b[22m\n"},{"leaks":false,"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429302463,"runtime":4111,"slow":false,"start":1651429298352},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/ApiIntegracoes.test.js","testResults":[{"ancestorTitles":["Requisições para API"],"duration":1151,"failureDetails":[],"failureMessages":[],"fullName":"Requisições para API Exibir saldo através da API","location":null,"numPassingAsserts":0,"status":"passed","title":"Exibir saldo através da API"},{"ancestorTitles":["Requisições para API"],"duration":59,"failureDetails":[],"failureMessages":[],"fullName":"Requisições para API Exibir lista de transações através da API","location":null,"numPassingAsserts":0,"status":"passed","title":"Exibir lista de transações através da API"}],"failureMessage":null},{"leaks":false,"numFailingTests":0,"numPassingTests":4,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429302538,"runtime":4162,"slow":false,"start":1651429298376},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/App-test.js","testResults":[{"ancestorTitles":["Component Principal","Quando realizo um tipo de transação"],"duration":3,"failureDetails":[],"failureMessages":[],"fullName":"Component Principal Quando realizo um tipo de transação saque, o valor deve ser subtraido","location":null,"numPassingAsserts":0,"status":"passed","title":"saque, o valor deve ser subtraido"},{"ancestorTitles":["Component Principal","Quando realizo um tipo de transação"],"duration":1,"failureDetails":[],"failureMessages":[],"fullName":"Component Principal Quando realizo um tipo de transação depóstio, o valor deve ser adicionado","location":null,"numPassingAsserts":0,"status":"passed","title":"depóstio, o valor deve ser adicionado"},{"ancestorTitles":["Component Principal","Quando realizo uma transação através do app"],"duration":1259,"failureDetails":[],"failureMessages":[],"fullName":"Component Principal Quando realizo uma transação através do app deve subtrair o saldo quando uma Saque for realizado.","location":null,"numPassingAsserts":0,"status":"passed","title":"deve subtrair o saldo quando uma Saque for realizado."},{"ancestorTitles":["Component Principal","Quando realizo uma transação através do app"],"duration":83,"failureDetails":[],"failureMessages":[],"fullName":"Component Principal Quando realizo uma transação através do app deve aumentar o saldo quando uma Deposito for realizado.","location":null,"numPassingAsserts":0,"status":"passed","title":"deve aumentar o saldo quando uma Deposito for realizado."}],"failureMessage":null},{"leaks":false,"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1651429312442,"runtime":14090,"slow":true,"start":1651429298352},"skipped":false,"testFilePath":"/Users/eversondelmaschio/projetos/testApp/__tests__/appium.test.js","testResults":[{"ancestorTitles":[],"duration":1178,"failureDetails":[],"failureMessages":[],"fullName":"appium renders","location":null,"numPassingAsserts":0,"status":"passed","title":"appium renders"}],"failureMessage":null}],"wasInterrupted":false,"config":{"bail":0,"changedFilesWithAncestor":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/Users/eversondelmaschio/projetos/testApp/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/Users/eversondelmaschio/projetos/testApp/node_modules/jest-html-reporters/index.js",{}]],"rootDir":"/Users/eversondelmaschio/projetos/testApp","runTestsByPath":false,"skipFilter":false,"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/Users/eversondelmaschio/projetos/testApp/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true},"endTime":1651429312630,"_reporterOptions":{"publicPath":"/Users/eversondelmaschio/projetos/testApp","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"npx jest","openReport":false,"failureMessageOnly":false,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false},"attachInfos":{}})