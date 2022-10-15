import React, { useState } from "react";
import { Form } from "react-bootstrap";
const Colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState(Colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {Colors.map((thisColor: string) => (
                <Form.Check
                    key={thisColor}
                    inline
                    type="radio"
                    name="colors"
                    onChange={() => setColor(thisColor)}
                    id={"color-check-" + thisColor}
                    label={thisColor}
                    value={thisColor}
                    checked={color === thisColor}
                    style={{ backgroundColor: thisColor }}
                />
            ))}
            <div>
                You have chosen:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
