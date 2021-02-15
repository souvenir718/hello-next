import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => {
    return (
        <Layout>
            <h1>!Next.js</h1>
            <h2>
                <Link href="/about">
                    <div style={{ background: 'black', color: 'white' }}>소개</div>
                </Link>
            </h2>
        </Layout>
    );
};

export default Index;
