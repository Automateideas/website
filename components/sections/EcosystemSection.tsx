"use client";

import dynamic from "next/dynamic";

const Ecosystem = dynamic(() => import("@/components/Ecosystem"));

export default function EcosystemSection() {
  return <Ecosystem />;
}
