// "use client";
// import { notFound } from 'next/navigation';
// import { PROJECTS } from '@/app/constants/index';
// import Image from 'next/image';
// import { use } from 'react';


// const page = ({ params }: { params: Promise<{ id: string }> }) => {
//     // Unwrap params using React's use hook (this is required for async params)
//     const unwrappedParams = use(params);
  
//     // Find the project based on the unwrapped id
//     const project = PROJECTS.find((p) => p.id === unwrappedParams.id);
  
//     if (!project) {
//       notFound(); // Trigger a 404 page if the project is not found
//     }
  
//     return (
//       <div className="h-fit w-full">
//         <div className="relative w-full h-screen">
//           {/* Display project image with a gradient overlay */}
//           <Image
//             src={project.image}
//             alt={`Project ${project.id}`}
//             width={1920} 
//             height={1080} 
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
          
//           {/* Project title and basic details over the image */}
//           <div className="absolute bottom-10 left-10 text-white text-3xl font-bold px-4 md:px-8 py-2 md:py-4">
//             <h1 className="text-2xl md:text-4xl">{project.title}</h1>
//           </div>
//         </div>
  
//         {/* Project detailed information in a full-screen section */}
//         <div className="h-screen p-6 md:p-10 bg-gray-100 flex items-center justify-center">
//           <div className="max-w-3xl text-center space-y-4 md:space-y-6">
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{project.title}</h2>
//             <p className="text-base md:text-lg text-gray-700">{project.description}</p>
//             <p className="text-sm md:text-base text-gray-600 italic">
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default page;
  

//   "use client";

// import { notFound } from 'next/navigation';
// import { PROJECTS } from '@/app/constants/index';
// import Image from 'next/image';
// import Link from 'next/link';

// const page = ({ params }: { params: Promise<{ id: string }> }) => {
//   if (!PROJECTS || PROJECTS.length === 0) {
//     notFound(); // Trigger a 404 page if no projects are available
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Projects Gallery</h1>
      
//       {/* Project Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {PROJECTS.map((project) => (
//           <Link key={project.id} href={`/projects/${project.id}`} className="group relative">
//             <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
//               {/* Project Image */}
//               <Image
//                 src={project.image}
//                 alt={`Project ${project.id}`}
//                 width={400}
//                 height={300}
//                 className="object-cover w-full h-full"
//               />
//               {/* Overlay with Title */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
//                 <h2 className="text-white text-xl font-semibold">{project.title}</h2>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
// "use client";

// import { notFound } from 'next/navigation';
// import { PROJECTS } from '@/app/constants/index';
// import Image from 'next/image';
// import { use } from 'react';

// const ProjectPage = ({ params }: { params: Promise<{ id: string }> }) => {
//     // Unwrap params using React's use hook (this is required for async params)
//     const { id } = use(params);
  
//     // Find the project based on the unwrapped id
//     const project = PROJECTS.find((p) => p.id === id);
  
//     if (!project) {
//         notFound(); // Trigger a 404 page if the project is not found
//     }
  
//     return (
//         <div className="min-h-screen  bg-gray-50 dark:bg-slate-800">
//             {/* Project Header Image Section */}
//             <div className="relative w-full h-96 md:h-screen">
//                 <Image
//                     src={project.image}
//                     alt={`Project ${project.id}`}
//                     layout="fill"
//                     objectFit=" cover"
//                     className="rounded-lg shadow-md"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
//                 <div className="absolute bottom-5 left-5 text-white px-4">
//                     <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
//                 </div>
//             </div>
  
//             {/* Project Details Section */}
//             <div className="px-6 py-10 md:py-16 bg-white shadow-lg rounded-lg mx-auto mt-8 max-w-2xl">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h2>
//                 {/* <p className="text-sm text-gray-500 mt-2 mb-6">{project.date}</p> */}
//                 <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
//             </div>
//         </div>
//     );
// };

// export default ProjectPage;

"use client";

import { notFound } from 'next/navigation';
import { PROJECTS } from '@/app/constants/index';
import Image from 'next/image';
import { use } from 'react';

const ProjectPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
            {/* Header Image Section */}
            <div className="relative w-full h-[75vh] md:h-screen overflow-hidden">
                <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75" />
                <div className="absolute bottom-8 left-8 text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">{project.title}</h1>
                    <p className="text-lg font-light mt-4 opacity-80">An immersive journey into {project.title}</p>
                </div>
            </div>

            {/* Project Details Section */}
            <div className="px-6 py-12 md:py-20 bg-white dark:bg-slate-800 shadow-xl rounded-lg mx-auto mt-12 max-w-3xl transform transition duration-500 ease-in-out hover:shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-6">{project.title}</h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center md:mt-4">
                    {project.description}
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic mt-8 text-center">
                    Presented with passion and precision.
                </p>
            </div>
        </div>
    );
};

export default ProjectPage;
