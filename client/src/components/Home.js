import react, { useState } from 'react'
import { Button, Card, CardBody } from "react-bootstrap"

const Home = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter+2)
    }
    function decrement() {
        setCounter(counter-2)
    }
    return (
        <div style={{ margin: '10%' }}>
            <Button variant="primary" onClick={decrement}>-</Button>
            <p>{counter}</p>
            <Button variant="primary" onClick={increment}>+</Button>

            <Card style={{ background: 'pink' }}>
                <Card.Body>
                    hello
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home
