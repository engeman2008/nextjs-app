import React from 'react';
import Link from "next/link";
import Router from 'next/router';

import User from './components/User';

const indexPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
      <button onClick={() => Router.push('/api/hello')}>Go to api</button>
      <User name='eman' age='34' />
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  );
};

export default indexPage;