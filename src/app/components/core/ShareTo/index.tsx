import React from 'react';

import FacebookIcon from '@/icons/SocialLinks/FacebookIcon';
import GithubIcon from '@/icons/SocialLinks/GithubIcon';
import LinkedinIcon from '@/icons/SocialLinks/LinkedinIcon';
import RedditIcon from '@/icons/SocialLinks/RedditIcon';
import TwitterIcon from '@/icons/SocialLinks/TwitterIcon';

export const TwitterShare = ({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) => {
  const ShareURL = `https://twitter.com/intent/tweet?text=${title}&url=https://www.obytes.com/blog/${slug}`;
  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  );
};

export const FacebookShare = ({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) => {
  const ShareURL = `https://www.facebook.com/sharer/sharer.php?u=https://www.obytes.com/blog/${slug}&quote=${title}`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <FacebookIcon />
    </a>
  );
};

export const LinkedinShare = ({ slug }: { slug: string }) => {
  const ShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://www.obytes.com/blog/${slug}`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
  );
};

export const RedditShare = ({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) => {
  const ShareURL = `http://www.reddit.com/submit?url=https://www.obytes.com/blog/${slug}&title=${title}`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <RedditIcon />
    </a>
  );
};

// Social Links

export const Linkedin = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
  );
};

export const Twitter = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  );
};

export const GitHub = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <GithubIcon />
    </a>
  );
};
