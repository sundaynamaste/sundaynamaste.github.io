// @flow strict
import React from 'react';
import styles from './Title.module.scss';
import Meta from '../Meta';

type Props = {
  title: string,
  date: string
};

const Title = ({ title, date, author }: Props) => (
  <div className={styles['title']}>
    <h1 className={styles['title__title']}>{title}</h1>
    <Meta date={date} author={author} />
  </div>
);

export default Title;
