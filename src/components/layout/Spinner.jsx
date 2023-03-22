import spinner from './assets/spinner2.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img 
        width={180}
        className="text-color mt-auto"
        src={spinner}
        alt="Loading..." 
      />
    </div>
  )
}

export default Spinner
