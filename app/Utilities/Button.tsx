'use client';

import Link from "next/link";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  style?: React.CSSProperties;
};

export default function Button({ text, icon, className = "", href, style }: ButtonProps) {
  const baseStyles = "flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`} style={style}>
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} style={style}>
      {text}
      {icon}
    </button>
  );
}















// 'use client';

// import Link from "next/link";

// type ButtonProps = {
//   text: string;
//   icon?: React.ReactNode;
//   className?: string;
//   href?: string; 
// };

// export default function Button({ text, icon, className = "", href ,style}: ButtonProps) {
//   const baseStyles =
//     "flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300";


//   if (href) {
//     return (
//       <Link href={href} className={`${baseStyles} ${className} `}style={style}>
//         {text}
//         {icon}
//       </Link>
//     );
//   }

//   return (
//     <button className={`${baseStyles} ${className} `}style={style}>
//       {text}
//       {icon}
//     </button>
//   );
// }




