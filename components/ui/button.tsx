import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Adjust the import path based on your library or file

export default function Button() {
    return (
        <div className="">
              <Link
                href="#get-started"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-[#0C49E7] shadow transition-colors hover:bg-[#022183] hover:text-white">
                    
                     Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
    );
    
}