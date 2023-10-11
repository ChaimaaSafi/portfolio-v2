import React from "react";

import FacebookIcon from "@/icons/SocialLinks/FacebookIcon";
import GithubIcon from "@/icons/SocialLinks/GithubIcon";
import LinkedinIcon from "@/icons/SocialLinks/LinkedinIcon";
import RedditIcon from "@/icons/SocialLinks/RedditIcon";
import TwitterIcon from "@/icons/SocialLinks/TwitterIcon";

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
      <TwitterIcon className="fill-[#7D7D7D] hover:fill-[#1DA1F2]" />
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
      <FacebookIcon className="fill-[#7D7D7D] hover:fill-[#4267B2]" />
    </a>
  );
};

export const LinkedinShare = ({ slug }: { slug: string }) => {
  const ShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://www.obytes.com/blog/${slug}`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon className="fill-[#7D7D7D] hover:fill-[#0A66C2]" />
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
      <RedditIcon className="fill-[#7D7D7D] hover:fill-[#FF5700]" />
    </a>
  );
};

// Social Links

export const Linkedin = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon className="fill-[#fff] hover:shadow-md hover:shadow-gray-200 rounded-md transition duration-300 delay-100" />
    </a>
  );
};

export const Twitter = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <TwitterIcon className="fill-[#fff] hover:shadow-md hover:shadow-gray-200 rounded-md transition duration-300 delay-100" />
    </a>
  );
};

export const GitHub = ({ url }: { url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <GithubIcon  className="fill-[#fff] hover:shadow-md hover:shadow-gray-200 rounded-full transition duration-300 delay-100"/>
    </a>
  );
};
