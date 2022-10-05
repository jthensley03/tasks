import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeQuestionType(): void {
        type == "multiple_choice_question"
            ? setType("short_answer_question")
            : setType("multiple_choice_question");
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {type == "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
