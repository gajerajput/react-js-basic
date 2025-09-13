function Greeting({name, age}) {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>You are {age} year old</p>
      {age > 18 ? <p>You are ok to vote</p> : <p>You are too young to vote</p>}
    </div>
  );
}

function GreetingPage() {
  return(
    <div style={{ textAlign: 'center' }}>
      <h2>Greeting Component</h2>
      <p>This demonstrates props usage</p>
      <Greeting name="Jhon" age={23}/>
      <Greeting name="Jhenny" age={17}/>
    </div>
  );
}

export default GreetingPage;