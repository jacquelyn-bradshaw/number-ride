import Image from "next/image";

import profileImage from "@/public/jacquelyn.jpg";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <Image
        src={profileImage}
        width={300}
        height={300}
        alt="Image of Jacquelyn"
      />
    </main>
  );
}
