import React from 'react';
import Link from 'next/link';
import './home.css';
import {fetchBlogs} from "../../../server/blogs/blogs";
import Image from "next/image";
import {ImageBasePath} from "../../../lib/form.utils";


export default async function HomeSecFive() {

  const blogsData = await getBlogs();

  return (
    <div className="containerfive">
      <h2 className="title">Latest Insights</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1  gap-5 w-11/12 mx-auto">
        {blogsData.map((insight, index) => (
          <div style={{maxWidth:"380px"}}  className="mx-auto" key={index}>
          <Link href={`blogs/${insight.slug}`}>
          <Image src={ImageBasePath + insight.heroImage} width={300} height={300} className={'w-full h-[300px] object-cover'} alt=""  />
            <div style={{padding:"15px"}} className="info bg-white">
              <div className="user-date">
                <span style={{display: "flex", alignItems: "center", gap: "20px"}}>
                    <span>

                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4040_1070)">
                    <path
                        d="M10.2427 7.75734C9.58915 7.10386 8.81131 6.62009 7.96263 6.32723C8.87159 5.7012 9.46875 4.65347 9.46875 3.46875C9.46875 1.55609 7.91266 0 6 0C4.08734 0 2.53125 1.55609 2.53125 3.46875C2.53125 4.65347 3.12841 5.7012 4.03739 6.32723C3.18872 6.62009 2.41088 7.10386 1.75737 7.75734C0.624117 8.89062 0 10.3973 0 12H0.9375C0.9375 9.20852 3.20852 6.9375 6 6.9375C8.79148 6.9375 11.0625 9.20852 11.0625 12H12C12 10.3973 11.3759 8.89062 10.2427 7.75734ZM6 6C4.60427 6 3.46875 4.8645 3.46875 3.46875C3.46875 2.073 4.60427 0.9375 6 0.9375C7.39573 0.9375 8.53125 2.073 8.53125 3.46875C8.53125 4.8645 7.39573 6 6 6Z"
                        fill="#373938"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4040_1070">
                    <rect width="12" height="12" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    </span>
                    <span>
                    Admin
                    </span>
                    </span>
                <span>{insight.createdAt.toLocaleDateString()}</span>
              </div>
              <div>{insight.content.slice(0, 100)} <span className='font-bold underline'>Read More</span></div>
            </div>
          </Link>
          </div>
        ))}
        </div>
    </div>
  );
};

async function getBlogs() {
  return fetchBlogs();
}
