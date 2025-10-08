import React from 'react';
import Image from 'next/image';

export interface ICategoryCardProps {
    image: string | null | undefined;
    title: string | null
}

const CategoryCard = ({ image, title }: ICategoryCardProps) => {
    return (
        <div>
            <Image src={image ?? ""} alt='img' height={73.387} width={73.387} />
            <p>{title}</p>
        </div>
    );
}

export default CategoryCard;
