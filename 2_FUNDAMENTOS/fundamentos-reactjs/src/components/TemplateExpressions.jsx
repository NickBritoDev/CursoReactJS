export default function TemplateExpressions() {

    const name = 'Nicolas'
    const data = {
        age: 22,
        job: 'Developer'
    }

    return (
        <div>
            <h2>Olá {name}</h2>
            <p>Sua idade é ? {data.age}</p>
            <p>Sua profissão é ? {data.job}</p>
        </div>
    )
}
