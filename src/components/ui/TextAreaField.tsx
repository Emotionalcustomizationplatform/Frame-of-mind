import { FormControl, FormLabel, Textarea, TextareaProps } from "@chakra-ui/react";

interface TextAreaFieldProps extends TextareaProps {
  label?: string;
}

export default function TextAreaField({ label, ...props }: TextAreaFieldProps) {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea borderRadius="md" {...props} />
    </FormControl>
  );
}
