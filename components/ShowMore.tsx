"use client";
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';


interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', newLimit.toString());
        router.push(newPathName);
    };
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    type="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore