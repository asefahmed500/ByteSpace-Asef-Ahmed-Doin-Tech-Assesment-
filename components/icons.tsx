/**
 * Icons inlined from the exact SVG path data exported out of the Figma file
 * (public/assets/icon-rating.svg / icon-check.svg) so they can inherit the
 * current text color. Do not edit the path data by hand.
 */

export function RatingStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M14.4297 9.61158L12.9597 4.77158C12.6697 3.82158 11.3297 3.82158 11.0497 4.77158L9.56971 9.61158H5.11971C4.14971 9.61158 3.74971 10.8616 4.53971 11.4216L8.17972 14.0216L6.74971 18.6316C6.45971 19.5616 7.53972 20.3116 8.30972 19.7216L11.9997 16.9216L15.6897 19.7316C16.4597 20.3216 17.5397 19.5716 17.2497 18.6416L15.8197 14.0316L19.4597 11.4316C20.2497 10.8616 19.8497 9.62158 18.8797 9.62158H14.4297V9.61158Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="currentColor"
      />
    </svg>
  );
}
