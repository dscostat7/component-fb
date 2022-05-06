import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Hello Word!</Popover.Panel>

            <Popover.Button className="bg-avocado-300 rounded-full px-3 h-12 flex items-center group">
                <ChatTeardropDots className="w-6 h-6 text-white" />
                
                <span className="text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}