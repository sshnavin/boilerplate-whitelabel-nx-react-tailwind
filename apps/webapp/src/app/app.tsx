// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.css';

export function App() {
  return (
      <div className='h-screen bg-brand-500 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl bg-brand-200'>This works!</h1>
        <pre className="text-sm">font-bold text-5xl bg-brand-200</pre>
        <pre className="text-sm text-ceruleanBlue-200">I'm there in all configs</pre>
        <div className="absolute top-0 left-0"><p className="text-sm">bg-brand-500 flex flex-col justify-center items-center</p></div>
      </div>
  );
}

export default App;
