// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Comments from './Comments';
import Content from './Content';
import Title from './Title';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
    post: Node
};

const Post = ({post}: Props) => {
    const {html} = post;
    const {tagSlugs, slug} = post.fields;
    const {
        tags, title, date, author
    } = post.frontmatter;

    return (
        <div className={styles['post']}>
            <Link className={styles['post__home-button']} to="/">목록</Link>

            <div className={styles['post__title']}>
                {(typeof author !== 'undefined' && author !== '') && <Title title={title} date={date} author={author}/>}
            </div>

            <div className={styles['post__content']}>
                <Content body={html}/>
                <div className={styles['post__tags']}>
                    {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}
                </div>
            </div>

            <div className={styles['post__footer']}>
                <Link className={styles['post__button']} to="/">목록</Link>
                <a href={'https://www.sundaynamaste.com'} target="_blank">sundaynamaste</a> All rights
                reserved.
            </div>

            <div className={styles['post__comments']}>
                <Comments postSlug={slug} postTitle={title}/>
            </div>
        </div>
    );
};

export default Post;
