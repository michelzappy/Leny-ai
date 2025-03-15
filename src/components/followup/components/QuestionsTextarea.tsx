
import React from "react";
import { Loader2 } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "../types/scheduleTypes";

interface QuestionsTextareaProps {
  form: UseFormReturn<ScheduleFormValues>;
  isGeneratingQuestions: boolean;
}

const QuestionsTextarea: React.FC<QuestionsTextareaProps> = ({ 
  form, 
  isGeneratingQuestions 
}) => {
  return (
    <FormField
      control={form.control}
      name="questions"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>Follow-up Questions</FormLabel>
            {isGeneratingQuestions && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating questions...
              </div>
            )}
          </div>
          <FormControl>
            <Textarea
              placeholder="Questions will be auto-generated when you enter a condition, or you can type custom questions here"
              className="min-h-[180px]"
              {...field}
            />
          </FormControl>
          <FormDescription>
            Questions are automatically generated based on the condition, but you can edit or add your own
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QuestionsTextarea;
