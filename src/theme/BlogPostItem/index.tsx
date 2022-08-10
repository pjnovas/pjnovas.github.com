import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { BlogPostContextValue } from '@docusaurus/theme-common/src/internal';
import { DiscussionEmbed } from 'disqus-react';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { metadata: { frontMatter }, isBlogPostPage } = useBlogPost() as BlogPostContextValue
  const { comments = true, slug, title } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && comments &&
        <DiscussionEmbed
          shortname="pjnovas"
          config={
            {
              url: `https://pjnovas.xyz/${slug}`,
              identifier: slug,
              title,
              language: 'es_AR'
            }
          }
        />
      }
    </>
  );
}
