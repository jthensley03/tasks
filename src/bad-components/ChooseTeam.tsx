import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface memberProps {
    setTeam: (newTeam: string[]) => void;
    team: string[];
    option: string;
}

interface clearProps {
    setTeam: (newTeam: string[]) => void;
}

function setTeamOption({ setTeam, team, option }: memberProps) {
    if (!team.includes(option)) {
        setTeam([...team, option]);
    }
}

function ChooseMember({ setTeam, team, option }: memberProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                setTeamOption({
                    setTeam,
                    team,
                    option
                })
            }
            size="sm"
        >
            {option}
        </Button>
    );
}

function ClearTeam({ setTeam }: clearProps): JSX.Element {
    return <Button onClick={() => setTeam([])}>Clear Team</Button>;
}

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <ChooseMember
                                setTeam={setTeam}
                                team={team}
                                option={option}
                            ></ChooseMember>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <ClearTeam setTeam={setTeam}></ClearTeam>
                </Col>
            </Row>
        </div>
    );
}
