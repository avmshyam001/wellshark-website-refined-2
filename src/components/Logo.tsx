import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
  onDark?: boolean;
}

export default function Logo({
  variant = 'compact',
  className = '',
  onDark = false,
}: LogoProps) {
  const blueLogo =
    variant === 'compact'
      ? '/Wellshark_Blue_SubLogo.png'
      : '/Wellshark_Latest_logo_4_WBG.png';
  const whiteLogo =
    variant === 'compact'
      ? '/Wellshark_White_SubLogo.png'
      : '/Wellshark_Latest_logo_4_WBG_Whitte.png';

  const imageClassName =
    variant === 'compact'
      ? 'h-auto w-[150px] flex-shrink-0 lg:w-[200px]'
      : 'h-12 w-auto flex-shrink-0';

  return (
    <Link
      to="/"
      aria-label="Wellshark Pharmaceuticals — Home"
      className={`relative inline-flex items-center ${className}`}
    >
      <img
        src={blueLogo}
        alt="Wellshark Pharmaceuticals"
        className={`${imageClassName} transition-opacity duration-300 ease-in-out ${
          onDark ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={whiteLogo}
        alt=""
        aria-hidden="true"
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${imageClassName} transition-opacity duration-300 ease-in-out ${
          onDark ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </Link>
  );
}
