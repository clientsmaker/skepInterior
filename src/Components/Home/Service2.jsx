import React from 'react'
import ser1a from  '../../assets/Images/ser1a.jpg'
import ser1b from  '../../assets/Images/ser1b.webp'
import ser2a from  '../../assets/Images/ser2a.jpg'
import ser2b from  '../../assets/Images/ser2b.jpg'
import ser3a from  '../../assets/Images/ser3a.jpg'
import ser3b from  '../../assets/Images/ser3b.webp'
import ser4a from  '../../assets/Images/ser4a.jpg'
import ser4b from  '../../assets/Images/ser4b.jpg'

const Service2 = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 m-5 mt-36 ">
    <div className="h-64 rounded-lg bg-gray-200 group block mb-4">
        <div className="relative h-[150px] sm:h-[450px] ">
            <img
                // src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser1a}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-100 group-hover:opacity-0 "
            />
            <img
                // src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser1b}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-0 group-hover:opacity-100"
            />
        </div>
    </div>
    <div className="h-64 rounded-lg bg-gray-200 group block mb-4">
        <div className="relative h-[150px] sm:h-[450px]">
            <img
                // src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser2a}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-100 group-hover:opacity-0"
            />
            <img
                // src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser2b}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-0 group-hover:opacity-100"
            />
        </div>
    </div>
    <div className="h-64 rounded-lg bg-gray-200 group block mb-4">
        <div className="relative h-[150px] sm:h-[450px]">
            <img
                // src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser3a}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-100 group-hover:opacity-0"
            />
            <img
                // src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser3b}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-0 group-hover:opacity-100"
            />
        </div>
    </div>
    <div className="h-64 rounded-lg bg-gray-200 group block mb-4">
        <div className="relative h-[150px] sm:h-[450px]">
            <img
                // src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser4a}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-100 group-hover:opacity-0"
            />
            <img
                // src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={ser4b}
                alt=""
                className="absolute inset-0 h-72 w-full sm:h-96 object-cover opacity-0 group-hover:opacity-100"
            />
        </div>
    </div>
</div>
);
}

export default Service2