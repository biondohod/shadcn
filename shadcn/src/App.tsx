import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const App: FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="m-auto font-black font-sans text-indigo-900 text-7xl mx-auto text-center">
        Shadcn/ui test
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto mt-5">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>For real bro?</AccordionTrigger>
          <AccordionContent>
            absolutely. just install the lib and everything will be amazing brah
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I like.. stylize this stuff?</AccordionTrigger>
          <AccordionContent>
            Yep. Just open the file and change the styles. It's that easy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            For what reason should I specify the value?
          </AccordionTrigger>
          <AccordionContent>
            So that the accordion knows which item is open and which is closed.
            See what happens when you have 2 items with the same value?
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-6 block mx-auto">
            Destroy universe
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently like.. destroy
              the whole universe bro chill out.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>I changed my mind</AlertDialogCancel>
            <AlertDialogAction>yep. blow it up</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Alert className="mt-6 mb-6">
        <Terminal className="h-4 w-4" />
        <AlertTitle>This is insane!</AlertTitle>
        <AlertDescription>
          Look at the component below. It's a freaking functional calendar. It
          take like 1 minute to make.
        </AlertDescription>
      </Alert>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-fit bg-white"
      />

      <Card className="w-[350px] my-6">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>

      <div className="w-fit">
        <h2 className="text-indigo-900 text-xl font-bold mb-3 text-center">
          Average carousel with 5 elements.
        </h2>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-fit">
        <h2 className="text-indigo-900 text-xl font-bold mb-3 text-center">
          Carousel with multiple visible items. works properly only with odd
          numbers idk why
        </h2>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-fit">
        <h2 className="text-indigo-900 text-xl font-bold mb-3 text-center">
          Carousel with multiple visible items. This is how it works with even
          numbers
        </h2>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full mt-12">
      <h2 className="text-indigo-900 text-xl font-bold mb-12">
          vertical carousel
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default App;
