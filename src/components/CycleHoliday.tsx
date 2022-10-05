import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Valentine's Day"
    | "Jason's Birthday"
    | "Halloween"
    | "Thanksgiving"
    | "Christmas";

type Emoji = "❤️" | "🎂" | "🎃" | "🦃" | "🎄";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    const [emoji, setEmoji] = useState<Emoji>("🎄");
    function alphabetical(): void {
        if (holiday == "Valentine's Day") {
            setHoliday("Christmas");
            setEmoji("🎄");
        } else if (holiday == "Jason's Birthday") {
            setHoliday("Thanksgiving");
            setEmoji("🦃");
        } else if (holiday == "Halloween") {
            setHoliday("Jason's Birthday");
            setEmoji("🎂");
        } else if (holiday == "Thanksgiving") {
            setHoliday("Valentine's Day");
            setEmoji("❤️");
        } else if (holiday == "Christmas") {
            setHoliday("Halloween");
            setEmoji("🎃");
        }
    }
    function byDate(): void {
        if (holiday == "Valentine's Day") {
            setHoliday("Jason's Birthday");
            setEmoji("🎂");
        } else if (holiday == "Jason's Birthday") {
            setHoliday("Halloween");
            setEmoji("🎃");
        } else if (holiday == "Halloween") {
            setHoliday("Thanksgiving");
            setEmoji("🦃");
        } else if (holiday == "Thanksgiving") {
            setHoliday("Christmas");
            setEmoji("🎄");
        } else if (holiday == "Christmas") {
            setHoliday("Valentine's Day");
            setEmoji("❤️");
        }
    }
    return (
        <div>
            <Button onClick={alphabetical}>Advance by Alphabet</Button>
            <Button onClick={byDate}>Advance by Year</Button>
            <span>Holiday: {emoji}</span>
        </div>
    );
}
