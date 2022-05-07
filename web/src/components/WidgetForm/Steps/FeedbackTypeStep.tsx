import { FeedbackType, typesFeedback } from ".."
import { CloseButtom } from "../../CloseButtom";

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Leave your feedback!</span>
                <CloseButtom />
            </header>
            <div className="flex py-8 gap-2 w-full">
            { Object.entries(typesFeedback).map(([key, value]) => {
                return (
                <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-avocado-300 focus:border-avocado-300 focus:outline-none"
                    onClick={() => props.onFeedbackTypeChange(key as FeedbackType)}
                    type="button"
                >
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                </button>
                )
            }) }
            </div>
        </>
    )
}