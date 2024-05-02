'use client'
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.back()}>Back</Button>
    </div>
  );
};

export default BackButton;
