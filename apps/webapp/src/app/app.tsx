// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.css';

export function App() {
  return (
      <div className='h-screen bg-yellow-500 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl'>This works!</h1>
        <pre className="text-sm">font-bold text-5xl</pre>

        <p>Delete this component and start playing!</p>
        <div className="absolute top-0 left-0"><p className="text-sm">bg-yellow-500 flex flex-col justify-center items-center</p></div>
      </div>
  );
}

export default App;
