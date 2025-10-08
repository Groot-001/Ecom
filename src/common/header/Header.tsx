import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex text-orange-500 justify-between px-20 py-6 items-center text-base border-b-[0.4px] border-[#FDE4B8] shadow-[0_4px_18px_0_rgba(248,168,28,0.1)]'>
            <Image src="/logo.png" alt='Website logo' width={119} height={0} />
            <div className='flex gap-0.5'>
                <button>Shop By Ingredients</button>
                <Image src="/chevron-down.svg" alt='down-arrow' width={22} height={22} />
            </div>
            <div className='flex gap-0.5'>
                <button>Shop by taste</button>
                <Image src="/chevron-down.svg" alt='down-arrow' width={22} height={22} />
            </div>
            <p>Our Story</p>
            <p>Blogs and Recipes</p>
            <p>Contact Us</p>
            <div className='flex gap-3 bg-orange-50 px-6 py-3 rounded-full text-gray-400 text-xs'>
                <Image src="/Search-icon.svg" alt='search-icon' height={24} width={24} />
                <button>Search for products, ...</button>
            </div>
            <div className='flex gap-2'>
                <Image src="/sign-in.svg" alt='sign-in' width={24} height={24} />
                <p>Sign in</p>
            </div>
            <Image src="/Favourite.svg" alt='favourite-icon' width={24} height={24} />
            <Image src="/cart.svg" alt='cart-icon' width={24} height={24} />
        </div>
    );
}

export default Header;
