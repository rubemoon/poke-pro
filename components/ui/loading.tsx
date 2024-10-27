import Image from "next/image";
import { Logo } from "@/lib/data";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-transparent bg-gradient-to-r from-primary to-fuchsia-700">
          <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={Logo} alt="Logo" width={64} height={64} priority={true} />
        </div>
      </div>
    </div>
  );
};

export default Loading;