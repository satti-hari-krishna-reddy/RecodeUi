import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <div
      style={{
        width: '60%',
        maxHeight: '700px', // Fixed height for demo purposes
        height: 'fit-content', // Fixed height for demo purposes
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#1E1E1E',
        padding: '15px',
        margin: '20px auto',
      }}
    >
      <MonacoEditor
        height="100%"
        defaultLanguage="javascript"
        defaultValue={`// Start coding here\nfunction helloWorld() {\n    console.log("Hello, World!");\n}`}
        theme="vs-dark"
        options={{
          fontSize: 16,
          
          fontFamily: 'Fira Code, monospace',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        //   smoothScrolling: true,
          automaticLayout: true,
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor;
