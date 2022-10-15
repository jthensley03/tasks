import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [boolStudent, setBoolStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditMode(editMode: boolean) {
        setEditMode(!editMode);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateBoolStudent() {
        setBoolStudent(!boolStudent);
    }

    function OutputString(name: string, boolStudent: boolean): string {
        let ret = "";
        if (boolStudent === true) {
            ret = "is a student";
        } else {
            ret = "is not a student";
        }
        return ret;
    }
    if (editMode) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Switch
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => updateEditMode(editMode)}
                />
                <div id="editStuff">
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="textbox"
                            value={name}
                            placeholder="Your Name"
                            onChange={updateName}
                            disabled={!editMode}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={boolStudent}
                        onChange={updateBoolStudent}
                    />
                </div>
                <div id="disp">
                    {name + " " + OutputString(name, boolStudent)}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Switch
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => updateEditMode(editMode)}
                />
                <div id="disp">
                    {name + " " + OutputString(name, boolStudent)}
                </div>
            </div>
        );
    }
}
