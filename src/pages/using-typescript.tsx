// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { FC } from 'react';

const UsingTypescript: FC<PageProps> = ({}) => (
    <Layout>
        <Seo title="Using TypeScript" />

        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default UsingTypescript;
