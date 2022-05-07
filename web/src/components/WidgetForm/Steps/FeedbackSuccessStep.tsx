import { CloseButtom } from "../../CloseButtom";
import successIcon from "../../../images/success.svg";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButtom/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successIcon} alt="Bottom checked" />

                <span className="text-xl mt-2">Grateful for feedback!</span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-avocado-300"
                >
                    New feedback
                </button>
            </div>
        </>
    )
}