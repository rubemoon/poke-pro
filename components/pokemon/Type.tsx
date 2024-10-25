import React from "react";
import { typeColors, TypeProps } from "@/lib/types";

const Type: React.FC<TypeProps> = ({ typeName }) => {
  const bgColor = typeColors[typeName] || "bg-gray-400";
  return (
    <div className={`inline-block px-3 dark:text-white rounded-md ${bgColor}`}>
      {typeName}
    </div>
  );
};

export default Type;