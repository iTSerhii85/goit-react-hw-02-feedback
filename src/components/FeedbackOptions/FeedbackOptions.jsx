import React from "react";
import { Button, ButtonBlock } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <ButtonBlock>
        {options.map(name => {
            return (
            <Button
             type="button"
             onClick={() => onLeaveFeedback(name)}
             key={name}>
                {name}
            </Button>)})}
    </ButtonBlock>
    )
}
