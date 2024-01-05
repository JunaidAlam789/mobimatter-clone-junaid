import React from "react";

export default function EsimDetailsEsim({
  params,
}: {
  params: { esimDetails: string };
}) {
  return <div>{params.esimDetails}</div>;
}
