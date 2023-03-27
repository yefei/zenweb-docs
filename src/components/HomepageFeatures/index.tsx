import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '企业级',
    description: (
      <>
        项目框架全部采用 TypeScript 开发，强类型检查，拥有企业级的开发与维护能力
      </>
    ),
  },
  {
    title: '代码解偶',
    description: (
      <>
        使用依赖注入技术，代码解偶易于开发维护
      </>
    ),
  },
  {
    title: '模块化',
    description: (
      <>
        项目功能全部模块化，不臃肿，可根据项目按需配置使用
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
