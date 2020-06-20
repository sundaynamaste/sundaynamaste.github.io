// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  author: string
};

const Meta = ({ date, author }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{moment(date).format('YYYY-MM-DD')}&nbsp;|&nbsp;{author}</p>
  </div>
);

export default Meta;
