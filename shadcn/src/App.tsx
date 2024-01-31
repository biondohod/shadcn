import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const App: FC = () => {
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
          <AccordionTrigger>For what reason should I specify the value?</AccordionTrigger>
          <AccordionContent>
            So that the accordion knows which item is open and which is closed. See what happens when you have 2 items with the same value?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default App;
