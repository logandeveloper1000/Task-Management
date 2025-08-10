// src/utils/validators.ts
export const validateTask = (title: string, dueDate: string): string | null => {
  if (!title.trim()) return "Title is required";
  if (!dueDate) return "Due date is required";
  return null;
};
