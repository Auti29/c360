import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const steps = ["Basic Details", "Eligibility", "Rounds & Order", "Test Type", "Review & Publish"];
const roundTypes = ["Technical Round", "Aptitude Round", "Communication Round", "Psychometric Round", "HR Interview Round", "Real-World Simulation Round", "Coding Round"];

function SortableItem({ id, round, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-2 border rounded mb-2">
      {round}
    </div>
  );
}

export default function HRTestCreation() {
  const [step, setStep] = useState(0);
  const [testDetails, setTestDetails] = useState({
    companyName: "",
    testName: "",
    date: null,
    degree: "",
    branches: "",
    percentageCriteria: "",
    experience: "",
    backlogs: "No",
    passoutYear: "",
    testType: "",
    difficulty: "",
    rounds: roundTypes,
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTestDetails((prev) => {
        const oldIndex = prev.rounds.indexOf(active.id);
        const newIndex = prev.rounds.indexOf(over.id);
        return { ...prev, rounds: arrayMove(prev.rounds, oldIndex, newIndex) };
      });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">HR Test Creation</h2>
      <Progress value={(step / (steps.length - 1)) * 100} className="mb-6" />
      <div className="mb-6">
        {steps.map((s, index) => (
          <span key={s} className={`mr-4 ${step === index ? "font-bold" : "text-gray-500"}`}>{s}</span>
        ))}
      </div>

      {step === 0 && (
        <div>
          <Input placeholder="Company Name" value={testDetails.companyName} onChange={(e) => setTestDetails({ ...testDetails, companyName: e.target.value })} />
          <Input placeholder="Test Name" value={testDetails.testName} onChange={(e) => setTestDetails({ ...testDetails, testName: e.target.value })} />
          <Calendar onSelect={(date) => setTestDetails({ ...testDetails, date })} />
        </div>
      )}

      {step === 1 && (
        <div>
          <Select onValueChange={(value) => setTestDetails({ ...testDetails, degree: value })}>
            <SelectTrigger><SelectValue placeholder="Select Degree" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Bachelors">Bachelor's</SelectItem>
              <SelectItem value="Masters">Master's</SelectItem>
              <SelectItem value="Diploma">Diploma</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Branches" value={testDetails.branches} onChange={(e) => setTestDetails({ ...testDetails, branches: e.target.value })} />
          <Input placeholder="Minimum Percentage Criteria" type="number" value={testDetails.percentageCriteria} onChange={(e) => setTestDetails({ ...testDetails, percentageCriteria: e.target.value })} />
          <Select onValueChange={(value) => setTestDetails({ ...testDetails, experience: value })}>
            <SelectTrigger><SelectValue placeholder="Select Experience" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Fresher">Fresher</SelectItem>
              <SelectItem value="Experienced">Experienced</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setTestDetails({ ...testDetails, backlogs: value })}>
            <SelectTrigger><SelectValue placeholder="Select Backlogs" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="No">No</SelectItem>
              <SelectItem value="Yes">Yes</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Passout Year" type="number" value={testDetails.passoutYear} onChange={(e) => setTestDetails({ ...testDetails, passoutYear: e.target.value })} />
        </div>
      )}

      {step === 2 && (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={testDetails.rounds} strategy={verticalListSortingStrategy}>
            {testDetails.rounds.map((round, index) => (
              <SortableItem key={round} id={round} round={round} index={index} />
            ))}
          </SortableContext>
        </DndContext>
      )}

      {step === 3 && (
        <div>
          <Select onValueChange={(value) => setTestDetails({ ...testDetails, testType: value })}>
            <SelectTrigger><SelectValue placeholder="Select Test Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Custom Test">Custom Test</SelectItem>
              <SelectItem value="AI-Powered Adaptive Test">AI-Powered Adaptive Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button onClick={handleBack} disabled={step === 0}>Back</Button>
        <Button onClick={handleNext} disabled={step === steps.length - 1}>Next</Button>
      </div>
    </div>
  );
}