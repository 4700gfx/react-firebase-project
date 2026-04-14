import { useState, useReducer, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import Navbar from './components/Navbar';
import Card from './components/Card';

const photos = [
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
];

const intialState = {
  items: photos, 
  count: photos.length,
  inputs: { title: "", file: null, path: null },
  isCollapsed: false 
}

  const handleOnChange = (state, e) => {

    //Checks to See if The Target is The File 
    if (e.target.name === 'file') {

      //Set the State to Include the Previous Picture with New File 
      return {
        ...state.inputs, 
        file: e.target.files[0], 
        path: URL.createObjectURL(e.target.files[0])
      };
    } else {
      //Sets the Title to the Value 
      return { ...state.inputs, title: e.target.value };
    }
  };


function reducer(state, action){
  switch(action.type){
    case 'setItem':
      return{
        ...state,
        items: [state.inputs, ...state.items]
      }
    case "setInputs":
      return{
        ...state,
        inputs: handleOnChange(action.payload.value)
      }

    case 'collaspe':
      return{
        ...state, 
        isCollapsed :action.payload.bool
      }
    default : return state
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, intialState)
  const [count, setCount] = useState()
  const toggle = (bool) => dispatch({type: 'collapse', payload: {bool} })

  useEffect(() =>{
    console.log(state)
  }, [state])


  useEffect(() => {
    setCount(`You have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`)
  }, [state])

  const handleOnChange = (state, e) => dispatch({type: 'setInput', payload:{value: e}})


  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'setItem'})
    toggle(!state.isCollapsed)
  };



  return (
    <div className="container text-center">
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float" onClick={() => toggle(!state.isCollapsed)}>
          {state.isCollapsed ? "CLOSE" : "+ ADD AN IMAGE"}
        </button>
        <UploadForm 
          //Passing Handle Functions and State as Props 
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          value={state.inputs}
        />
        <h1 className="mt-5 mb-4">Gallery</h1>
        
        {/* Display the count */}
        <p className="mb-3 text-muted">{count}</p>
        
        <div className="row justify-content-center g-4">
          {state.items.map((photo, index) => (
            <Card key={`${photo}-${index}`} image={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;