'use client'

import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();

  return (
    <ul>
<li>Very nice 1st blog but it is params: {params.slug}</li>
<li>Very nice 2nd blog but it is params: {params.slug}</li>
    </ul>
  )
}

