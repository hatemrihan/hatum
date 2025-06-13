"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

export function SubmitButton({ children, isLoading, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isSubmitting = pending || isLoading;

  return (
    <button 
      type="submit" 
      disabled={isSubmitting}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 ${
        isSubmitting 
          ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' 
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      } ${className || ''}`}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        children || "Submit"
      )}
    </button>
  );
}

// "use client";

// import { useFormStatus } from "react-dom";
// import { Button } from "./ui/button";
// import { Loader2 } from "lucide-react";

// export function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button type="submit" disabled={pending} className="w-full">
//       {pending ? (
//         <>
//           <Loader2 className="size-4 mr-2 animate-spin" /> 
//           Submitting...
//         </>
//       ) : (
//         "Submit"
//       )}
//     </Button>
//   );
// }