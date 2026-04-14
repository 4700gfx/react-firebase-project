import Navbar from './Navbar'
import UploadForm from './UploadForm'

const Layout = ({children, state, onChange, onSubmit, toggle}) => {
  return (
    <section>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float" onClick={() => toggle(!state.isCollapsed)}>
          {state.isCollapsed ? "CLOSE" : "+ ADD AN IMAGE"}
        </button>
        <UploadForm 
          //Passing Handle Functions and State as Props 
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          onChange={onChange}
          onSubmit={onSubmit}
          value={state.inputs}
        />
        {children}
      </div>
  </section>
  )
}

export default Layout