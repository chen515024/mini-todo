function App() {
  const list = [
    { label: '重要且紧急', type: '' },
    { label: '重要不紧急', type: '' },
    { label: '不重要且紧急', type: '' },
    { label: '不重要不紧急', type: '' },
  ]
  return (
    <>
      <div className='grid cols-2 rows-2 relative'>
        {list.map(i => (<div className='w-50vw h-50vh flex items-center justify-center text-13 border border-b-cyan border-solid'>{i.label}</div>))}
      </div>
    </>
  )
}

export default App
