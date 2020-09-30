import React from 'react';
import Link from "next/link";

const _error = () => {
    return (
        <div>
            <h1>oops, something went wrong</h1>
            <p>Go to <Link href="/"><a>Home</a></Link></p>

        </div>
    );
};

export default _error;