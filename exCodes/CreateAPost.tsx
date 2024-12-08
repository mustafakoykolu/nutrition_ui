// import nutritionist from "../../assets/Images/nutritionist.png";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import { DocumentIcon } from "@heroicons/react/24/outline";
// import { PhotoIcon } from "@heroicons/react/24/outline";
// import { VideoCameraIcon } from "@heroicons/react/24/outline";
// import clsx from "clsx";
// import { useState } from "react";

// export default function CreateAPost() {
//     const [isActive,setIsActive]= useState("add-text-button")
//   return (
//     <div id="create-page-container">
//       <div className="p-20 bg-white m-10 shadow-xl rounded-2xl">
//         <div id="header" className="flex justify-between">
//           <div className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
//             <input
//               type="text"
//               id="header"
//               className="text-gray-900 text-4xl font-bold font-manrope leading-normaldark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Başlık Giriniz"
//               required
//             />
//           </div>
//           <div className="flex items-center">
//             <img
//               className="w-20 h-20 rounded-full mr-4"
//               src={nutritionist}
//               alt="Avatar of Jonathan Reinink"
//             />
//             <div className="text-xl">
//               <p className="text-gray-900 leading-none">Mustafa Emre Köykolu</p>
//               <p className="text-gray-600">Ankara Lokantası Şefi</p>
//               <p className="text-gray-600">7 Aralık 2024</p>
//             </div>
//           </div>
//         </div>
//         <div id="body" className="mt-5">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
//           adipisci sint nemo maxime magni, iste quia, minus modi provident
//           accusamus illum nulla aliquam, laudantium facilis. Id aperiam
//           molestias minus in. Recusandae provident voluptate eligendi
//           consequuntur rerum eum quis beatae blanditiis eos, molestiae ab sunt
//           placeat veritatis harum laboriosam quae id. Omnis, veritatis eligendi
//           aut quo nostrum sunt ratione. Placeat, esse?
//         </div>
//       </div>
//       <div id="add">
//         <div className="p-20 bg-white m-10 shadow-xl rounded-2xl">
//           <div className="flex justify-between">
//             <Bars3Icon aria-hidden="true" className="size-6 text-gray-800" />
//             <div className="inline-flex rounded-md shadow-sm" role="group">
//               <button
//                 type="button"
//                 className={clsx("inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white",{
//                     "dark:bg-blue-500 dark:active:bg-blue-500":(isActive ==="add-text-button")
//                 })}
//                 onClick={()=>{
//                     setIsActive("add-text-button")
//                 }}
//               >
//                 <DocumentIcon className="w-3 h-3 me-2" />
//                 Metin
//               </button>
//               <button
//                 type="button"
//                 className={
//                     clsx("inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white",
//                         {
//                             "dark:bg-blue-500 dark:active:bg-blue-500":(isActive ==="add-image-button")
//                         }
//                     )
//                 }
//                 onClick={()=>{
//                     setIsActive("add-image-button")
//                 }}
//               >
//                 <PhotoIcon className="w-3 h-3 me-2" />
//                 Resim
//               </button>
//               <button
//                 type="button"
//                 className={clsx(
//                     "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white",
//                     {
//                         "dark:bg-blue-500 dark:active:bg-blue-500":(isActive ==="add-video-button")
//                     }
//                 )}
//                 onClick={()=>{
//                     setIsActive("add-video-button")
//                 }}
//               >
//                 <VideoCameraIcon className="w-3 h-3 me-2" />
//                 Video
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
