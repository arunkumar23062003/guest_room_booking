import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Header from "./header";
import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<typeof Card> {
  headerLabel: string;
}

export function CardWrapper({ className, children, headerLabel }: CardProps) {
  return (
    <Card className={cn ("shadow-md", className)}>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
