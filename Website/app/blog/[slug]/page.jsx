import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogData';
import { doctorData } from '../../../data/doctorData';
import BlogArticleClient from './BlogArticleClient';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Article Not Found | Dr. Sushant Kumar Sethi' };
  }
  return {
    title: `${post.title} | Dr. Sushant Kumar Sethi`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || true))
    .slice(0, 2);

  return <BlogArticleClient post={post} relatedPosts={relatedPosts} doctor={doctorData.doctor} />;
}
