import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
interface BreadcrumbItem {
    label: string;
    to?: string; // optional, last item usually doesn't have a link
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-x-2">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="inline-flex items-center gap-x-2">
                            {!isLast && item.to ? (
                                <Link
                                    to={item.to}
                                    className="inline-flex items-center text-sm font-normal text-gray-700 hover:text-primary-600"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-sm font-normal text-gray-500">
                                    {item.label}
                                </span>
                            )}

                            {!isLast && <ChevronRight size={14} strokeWidth={1} />}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
