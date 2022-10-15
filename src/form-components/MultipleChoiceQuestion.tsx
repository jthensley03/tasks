import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceDropdown">
                <Form.Label></Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((thisOption: string) => (
                        <option key={thisOption} value={thisOption}>
                            {thisOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
