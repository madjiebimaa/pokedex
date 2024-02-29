"use client";

import React from "react";

import { useIsClient } from "@uidotdev/usehooks";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return children;
}
