import { CloseButtom } from '../CloseButtom';
import { useState } from 'react';

import bugImage from '../../images/bug.svg';
import ideaImage from '../../images/idea.svg';
import otherImage from "../../images/other.svg";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const typesFeedback = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImage,
      alt: "Problem image",
    },
  },
  IDEA: {
    title: "Suggestion",
    image: {
      source: ideaImage,
      alt: "Idea image",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImage,
      alt: "Other image",
    },
  },
};

export type FeedbackType = keyof typeof typesFeedback;

export function WidgetForm() {
  const [typeFeedback, setTypeFeedback] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setTypeFeedback(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
          <>
            {!typeFeedback ? (
              <FeedbackTypeStep onFeedbackTypeChange={setTypeFeedback} />
            ) : (
                <FeedbackContentStep
                  feedbackType={typeFeedback}
                  onFeedbackRestartRequested={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
          </>
      ) }

      <footer className="text-xs text-neutral-400">
        Development by <a className="underline underline-offset-2" target="_blank" href="https://beacons.ai/dscostat7">Diego Souza</a>
      </footer>
    </div>
  );
}