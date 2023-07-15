export default function Challenge() {
  const a = 10
  const b = 15
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={() => {
        alert(a + b)
      }}>Clique para somar!</button>
    </div>
  )
}
