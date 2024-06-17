import './App.css'

function App() {
  const folders = [
    { "key": "folder1", "label": "Folder 1", "open": false,
      "children": [
        { "key": "folder1.1", "label": "Folder 1.1", "open": false, "children": [] },
        { "key": "folder1.2", "label": "Folder 1.2", "open": false, "children": [] },
        { "key": "folder1.3", "label": "Folder 1.3", "open": false, "children": [] },
      ]
     },
    { "key": "folder2", "label": "Folder 2", "open": false, "children": [] },
    { "key": "folder3", "label": "Folder 3", "open": false, 
      "children": [
        { "key": "folder3.1", "label": "Folder 3.1", "open": false, 
          "children": [
            { "key": "folder3.1.1", "label": "Folder 3.1.1", "open": false, "children": [] },
            { "key": "folder3.1.2", "label": "Folder 3.1.2", "open": false, "children": [] },
            { "key": "folder3.1.3", "label": "Folder 3.1.3", "open": false, "children": [] },
          ] 
        },
      ] },
  ];

  function returnFolder(children: []) { 
    if (children?.length > 0) {
      return (
        <ul>
          { children.map((child, index) => {
            return <li key={index}>
              <span>{ child.label }</span>
              { returnFolder(child.children) }
            </li>
          }) }
        </ul>
      )
    }
  }
  
  return (
    <>
      {returnFolder(folders)}
    </>
  )
}

export default App
