import React from 'react';
import { notFound } from 'next/navigation';
import { doctorData } from '../../../data/doctorData';
import ConditionDetailClient from './ConditionDetailClient';

export function generateStaticParams() {
  return (doctorData.doctor.conditions || []).map((condition) => ({
    slug: condition.slug,
  }));
}

export function generateMetadata({ params }) {
  const condition = (doctorData.doctor.conditions || []).find((c) => c.slug === params.slug);
  if (!condition) {
    return { title: 'Condition Guide | Dr. Sushant Kumar Sethi' };
  }
  return {
    title: `${condition.title} | Dr. Sushant Kumar Sethi`,
    description: condition.shortDescription,
  };
}

export default async function ConditionPage({ params }) {
  const unwrappedParams = await params;
  const { slug } = unwrappedParams;
  const condition = (doctorData.doctor.conditions || []).find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const relatedConditions = (doctorData.doctor.conditions || []).filter((c) =>
    condition.relatedSlugs?.includes(c.slug)
  );

  return <ConditionDetailClient condition={condition} relatedConditions={relatedConditions} />;
}
