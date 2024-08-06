import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { Button } from "../ui/button";
type OfferData = {
  offer: string;
  check: boolean;
};
type CardData = {
  price: string;
  plan: string;
  desc: string;
  additional: string;
  offers: OfferData[];
};
type Props = {
  card: CardData;
  dark?: boolean;
};
export default function CardPlan({ card, dark = false }: Props) {
  return (
    <Card
      className={cn(
        "mx-auto flex h-fit w-full max-w-sm flex-col rounded-lg py-2 shadow-xl md:mx-0 md:h-full md:max-w-none lg:h-fit",
        {
          "bg-dark text-white": dark,
          "bg-white text-black": !dark,
        },
      )}
    >
      <CardHeader className="space-y-3">
        <h5 className="text-lg font-bold first-letter:uppercase">
          {card.plan}
        </h5>
        <h4 className="text-3xl font-bold">{card.price}</h4>
        <p
          className={cn("text-sm font-medium leading-relaxed", {
            "text-white/60": dark,
            "text-black/60": !dark,
          })}
        >
          {card.desc}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {card.offers.map((offer, index) => (
            <div className="flex items-center gap-3" key={index}>
              {offer.check ? (
                <div className="rounded-full border-2 border-lightBlue p-1">
                  <Check className="h-3 w-3 text-lightBlue" />
                </div>
              ) : (
                <div className="rounded-full border-2 border-error p-1">
                  <X className="h-3 w-3 text-error" />
                </div>
              )}
              <p
                className={cn("text-sm font-medium", {
                  "text-white/60": dark,
                  "text-black/60": !dark,
                })}
              >
                {offer.offer}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-6 flex flex-col md:h-full md:justify-end lg:justify-start">
        <div className="flex w-full flex-col gap-2">
          <p
            className={cn("text-sm font-medium", {
              "text-white/60": dark,
              "text-black/60": !dark,
            })}
          >
            Additional Feature:
          </p>
          <h5 className="text-sm font-medium">{card.additional}</h5>
        </div>
        <Button
          className={cn(
            "mt-8 w-full border border-lightBlue bg-lightBlue text-white transition hover:text-lightBlue",
            {
              "hover:bg-dark": dark,
              "hover:bg-white": !dark,
            },
          )}
        >
          Choose
        </Button>
      </CardFooter>
    </Card>
  );
}
