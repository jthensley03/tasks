import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface useProps {
    setAttemptsLeft: (newTeam: number) => void;
    attemptsLeft: number;
}

interface gainProps {
    setAttemptsLeft: (newTeam: number) => void;
    attemptsLeft: number;
    setAttemptsReq: (newTeam: number) => void;
    attemptsReq: number;
}

function UseButton({ setAttemptsLeft, attemptsLeft }: useProps): JSX.Element {
    let dis = false;
    if (attemptsLeft < 1) {
        dis = true;
    }
    return (
        <Button
            onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            disabled={dis}
        >
            Use
        </Button>
    );
}

function GainCallback({
    setAttemptsLeft,
    attemptsLeft,
    setAttemptsReq,
    attemptsReq
}: gainProps) {
    setAttemptsLeft(attemptsLeft + attemptsReq);
    setAttemptsReq(0);
}

function GainButton({
    setAttemptsLeft,
    attemptsLeft,
    setAttemptsReq,
    attemptsReq
}: gainProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                GainCallback({
                    setAttemptsLeft,
                    attemptsLeft,
                    setAttemptsReq,
                    attemptsReq
                })
            }
        >
            Gain
        </Button>
    );
}

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<number>(0);

    function parseAttemptsReq(reqStr: string) {
        let ret = parseInt(reqStr) || 0;
        if (ret < 0) {
            ret = 0;
        }
        setAttemptsReq(ret);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Attempt Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        parseAttemptsReq(event.target.value)
                    }
                />
            </Form.Group>
            <div>Attempts Left: {attemptsLeft}</div>
            <UseButton
                setAttemptsLeft={setAttemptsLeft}
                attemptsLeft={attemptsLeft}
            ></UseButton>
            <GainButton
                setAttemptsLeft={setAttemptsLeft}
                attemptsLeft={attemptsLeft}
                setAttemptsReq={setAttemptsReq}
                attemptsReq={attemptsReq}
            ></GainButton>
        </div>
    );
}
