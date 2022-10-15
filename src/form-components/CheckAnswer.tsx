import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function checkAnswer(answer: string, expectedAnswer: string): string {
        let ret = "";
        if (answer === expectedAnswer) {
            ret = "✔️";
        } else {
            ret = "❌";
        }
        return ret;
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {checkAnswer(answer, expectedAnswer)}
        </div>
    );
}
