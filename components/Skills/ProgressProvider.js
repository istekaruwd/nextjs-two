'use client';
import { useEffect, useState } from 'react';

export default function ProgressProvider({
    skillStart,
    valueStart,
    valueEnd,
    children,
}) {
    const [value, setValue] = useState(valueStart);

    useEffect(() => {
        skillStart && setValue(valueEnd);
    }, [skillStart, valueEnd]);

    return children(value);
}
