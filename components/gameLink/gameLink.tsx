import Link from "next/link";

import Button from "@/components/button/button";

interface GameLinkProps {
  type: string;
  amount: number;
  text: string;
}

export default function GameLink({ type, amount, text }: GameLinkProps) {
  return (
    <Link
      href={{
        pathname: "/game",
        query: {
          type,
          amount,
        },
      }}
    >
      <Button text={text} />
    </Link>
  );
}
