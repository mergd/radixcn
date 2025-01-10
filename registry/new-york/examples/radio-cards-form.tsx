"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/registry/new-york/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form";
import { RadioCards } from "@/registry/new-york/ui/radio-cards";
import { toast } from "@/registry/new-york/hooks/use-toast";
import { RocketIcon, GearIcon, ReaderIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
  plan: z.enum(["hobby", "pro", "enterprise"], {
    required_error: "Please select a plan.",
  }),
});

export default function RadioCardsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select a plan</FormLabel>
              <FormControl>
                <RadioCards
                  items={[
                    {
                      value: "hobby",
                      children: (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <RocketIcon width={16} height={16} />
                            <div className="font-medium">Hobby</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Perfect for side projects
                          </div>
                        </div>
                      ),
                    },
                    {
                      value: "pro",
                      children: (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <GearIcon width={16} height={16} />
                            <div className="font-medium">Pro</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            For professional developers
                          </div>
                        </div>
                      ),
                    },
                    {
                      value: "enterprise",
                      children: (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <ReaderIcon width={16} height={16} />
                            <div className="font-medium">Enterprise</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            For large organizations
                          </div>
                        </div>
                      ),
                    },
                  ]}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
