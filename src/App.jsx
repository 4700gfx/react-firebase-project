import { useEffect, useState } from "react";
import UploadForm from "./components/UploadForm";
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
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

  const [count, setCount] = useState("");
  const [inputs, setInputs] = useState({ title: "", file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const toggle = () => collapse(!isCollapsed);

  const handleOnChange = (e) => {
    if (e.target.name === 'file') {
      setInputs({
        ...inputs, 
        file: e.target.files[0], 
        path: URL.createObjectURL(e.target.files[0])
      });
    } else {
      setInputs({ ...inputs, title: e.target.value });
    }
  };

  const handleOnSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (inputs.path) {
      setItems([inputs.path, ...items]);
      setInputs({ title: "", file: null, path: null });
      collapse(false);
    }
  };

  useEffect(() => {
    // Use parentheses, not backticks!
    setCount(`You Have ${items.length} Image${items.length > 1 ? 's' : ''}`);
  }, [items]);

  return (
    <div className="container text-center">
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float" onClick={toggle}>
          {isCollapsed ? "CLOSE" : "+ ADD AN IMAGE"}
        </button>
        <UploadForm 
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          value={inputs}
        />
        <h1 className="mt-5 mb-4">Gallery</h1>
        
        {/* Display the count */}
        <p className="mb-3 text-muted">{count}</p>
        
        <div className="row justify-content-center g-4">
          {items.map((photo, index) => (
            <Card key={`${photo}-${index}`} image={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;