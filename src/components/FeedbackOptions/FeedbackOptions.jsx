import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map(key => {
            return (
            <button
             type="button"
             onClick={() => onLeaveFeedback(key)}
             key={key}>
                {key}
            </button>)})}
    </div>
    )
}
