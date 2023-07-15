export default function Events() {

  const handleMyEvent = () => {
    alert('clicou')
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>X é true</h1>
    } else {
      return <h1>X é false</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      {renderSomething(false)}
      {renderSomething(true)}
      <div>
        <button onClick={() => {
          alert('clicou denovo')
        }}>Clique Aqui
        </button>
      </div>
    </div>
  )
}
