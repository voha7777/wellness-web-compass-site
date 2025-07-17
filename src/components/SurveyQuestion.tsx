
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  text: string;
}

interface SurveyQuestionProps {
  id: string;
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  options: Option[];
  onAnswer: (questionId: string, answerId: string) => void;
  onNext: () => void;
  onBack?: () => void;
  isFirstQuestion?: boolean;
}

const SurveyQuestion = ({
  id,
  questionNumber,
  totalQuestions,
  questionText,
  options,
  onAnswer,
  onNext,
  onBack,
  isFirstQuestion = false,
}: SurveyQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (value: string) => {
    setSelectedOption(value);
    onAnswer(id, value);
  };

  return (
    <div className="animate-in bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="w-1/2 bg-gray-200 rounded-full h-2">
            <div
              className="bg-health-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
          {questionText}
        </h3>
      </div>

      <RadioGroup
        onValueChange={handleSelection}
        value={selectedOption || ""}
        className="space-y-3"
      >
        {options.map((option) => (
          <div
            key={option.id}
            className={cn(
              "flex items-center border rounded-lg p-4 cursor-pointer transition-all duration-200",
              selectedOption === option.id
                ? "border-health-600 bg-health-50"
                : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => handleSelection(option.id)}
          >
            <RadioGroupItem 
              value={option.id} 
              id={`option-${option.id}`} 
              className="text-health-600"
            />
            <Label
              htmlFor={`option-${option.id}`}
              className="flex-grow pl-3 cursor-pointer"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between mt-8">
        {!isFirstQuestion ? (
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="border-gray-200 hover:bg-gray-50"
          >
            Back
          </Button>
        ) : (
          <div></div>
        )}
        <Button
          type="button"
          onClick={onNext}
          disabled={!selectedOption}
          className={cn(
            "bg-health-600 hover:bg-health-700",
            !selectedOption && "opacity-50 cursor-not-allowed"
          )}
        >
          {questionNumber === totalQuestions ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
