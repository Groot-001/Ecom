import React from 'react';
import CategoryCard, { ICategoryCardProps } from './components/CategoryCard';
import Breadcrumb from './components/BreadCrum';

const page: React.FC = () => {

  const data: ICategoryCardProps[] = [
    {
      image: "/Mango.png", title: "mango",
    },
    {
      image: "/Mixed Pickle.png", title: "Mixed Pickle"
    },
    {
      image: "/Spicy Pickle.png", title: "Spicy Pickle"
    },
    {
      image: "/Sweet Pickle.png", title: "Sweet Pickle"
    },
    {
      image: "/All Product.png", title: "All Product Pickle"
    },
  ]

  return (
    <div>
      <Breadcrumb items={[
        {
          label: "Home", to: "/"
        }
      ]} />
      <div className='flex gap-8 px-[4.839px] py-[12.093px]'>
        {
          data?.map((item, index) => (
            <CategoryCard image={item?.image} title={item?.title} key={item?.title ?? "" + index} />
          ))
        }
      </div>
    </div>
  );
}

export default page;
