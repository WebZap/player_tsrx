import React, {FC, useEffect, useRef} from "react";

type callback = (status : boolean) => void

export let useClickOutside = (callback: callback) => {
    let domNode = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let maybeClicked = (event: MouseEvent) => {
            if (domNode.current && !domNode.current.contains(event.target as Node)) {
                callback(false)
            }
        }
        document.addEventListener('mousedown', maybeClicked);
        return () => {
            document.removeEventListener('mousedown', maybeClicked)
        }
    }, [callback]);
    return domNode;
}

