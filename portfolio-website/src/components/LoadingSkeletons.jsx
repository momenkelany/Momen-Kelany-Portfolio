
import React from 'react';
import { Skeleton } from './ui/skeleton';

export const ProjectCardSkeleton = () => (
  <div className="bg-card rounded-lg p-6 space-y-4">
    <Skeleton className="h-48 w-full rounded-md" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-14 rounded-full" />
    </div>
    <div className="flex gap-2 pt-2">
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-10 w-20" />
    </div>
  </div>
);

export const SkillCardSkeleton = () => (
  <div className="bg-card rounded-lg p-6 space-y-4">
    <div className="flex items-center gap-3 mb-4">
      <Skeleton className="h-8 w-8 rounded-md" />
      <Skeleton className="h-6 w-32" />
    </div>
    <div className="space-y-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

export const ExperienceCardSkeleton = () => (
  <div className="bg-card rounded-lg p-6 space-y-4">
    <div className="flex justify-between items-start mb-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-4 w-24" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <div className="flex gap-2 pt-2">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-6 w-16 rounded-full" />
      ))}
    </div>
  </div>
);
