export default function SponsorCloud() {
  return (
    <>
      {/* Bottom cloud positioned outside container, pointing downwards */}
      <img 
        src="/hero/bottom-cloud.svg" 
        alt="Bottom cloud" 
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-0 w-screen rotate-180" 
      />
    </>
  );
}