import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { Analytics } from '@vercel/analytics/react';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures/index';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/env">
            开始上手
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      {<main>
        <HomepageFeatures />
        <div style={{borderTop: "1px solid #333",marginBottom: "30pt"}} />
        <div className="container">
          <div className="row">
            <div className={clsx('col col--4')}>
              <CodeBlock language="ts" title="src/index.ts">{`
import { create } from 'zenweb';

create()
.start();
`.trim()             }</CodeBlock>
            </div>
            <div className={clsx('col col--4')}>
              <CodeBlock language="ts" title="src/service/hello.ts">{`
import { component } from 'zenweb';

@component
export class HelloService {
  constructor(
    private ctx: Context, // 依赖注入
  ) {}

  getIp() {
    return this.ctx.ip;
  }
}`.trim()
              }</CodeBlock>
            </div>
            <div className={clsx('col col--4')}>
              <CodeBlock language="ts" title="src/controller/hello.ts">{`
import { mapping } from 'zenweb';
import { HelloService } from '../service/hello';

export class HelloController {
  @mapping()
  index(service: HelloService) {
    const ip = service.getIp();
    return \`Hello ZenWeb! \${ip}\`;
  }
}`.trim()
              }</CodeBlock>
            </div>
          </div>
        </div>
      </main>}
      <Analytics />
    </Layout>
  );
}
