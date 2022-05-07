import { Camera } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from './Loading';

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({onScreenshotTook}: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakeScreenshot] = useState(false);
    async function handleTakeScreenshot() {
        setIsTakeScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);

        setIsTakeScreenshot(false);
    }

    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-avocado-300"
            onClick={handleTakeScreenshot}
        >
            { isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" /> }
        </button>
    )
}