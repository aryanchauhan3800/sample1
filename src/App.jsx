import './App.css'

function App() {
  return (
    <div className="iframe-container">
      <iframe
        src="https://www.sbs.com.au/theboat/"
        title="The Boat - SBS"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
      />
    </div>
  )
}

export default App
