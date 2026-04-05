import './App.css'


function App() {
  return (
    <div id="center">
      <h1>Counter</h1> 
      <div className='card'>count is 23</div>

      <div>
        <button onClick={() => {}} style={{ margin: "0 5px" }}>
          Increase
        </button>
        <button onClick={() => {}} style={{ margin: "0 5px" }}>
          Decrease
        </button> 
         <button onClick={() => {}} style={{ margin: "0 5px" }}>
          Reset
        </button>
      </div>
      <div style={{
        margin : "0px 20px"
      }}>
        <input type="text" />
      </div>
    </div>
  )
}
export default App;
