import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map(name => {
            return (
            <button
             type="button"
             onClick={() => onLeaveFeedback(name)}
             key={name}>
                {name}
            </button>)})}
    </div>
    )
}
