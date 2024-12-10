function MapFooter({ labels }) {
  return (
    <div
      data-aos="fade-up"
      className="mt-5 flex w-full max-w-[400px] items-center gap-3 rounded-[10px] border border-gray-50 bg-surface p-2 sm:mt-10"
    >
      <div className="flex items-center justify-center gap-1">
        <div className="h-[18px] w-[18px] flex-shrink-0 rounded-full border-[2px] border-gray-50 bg-green-600"></div>
        <p className="w-fit text-xs font-normal leading-[18px] text-gray-600">
          {labels.first}
        </p>
      </div>
      <div className="h-4 w-0.5 rounded-full bg-gray-50"></div>
      <div className="flex items-center justify-center gap-1">
        <div className="h-[18px] w-[18px] flex-shrink-0 rounded-full border-[2px] border-gray-50 bg-green-400"></div>
        <p className="w-fit text-xs font-normal leading-[18px] text-gray-600">
          {labels.second}
        </p>
      </div>
    </div>
  );
}

export default MapFooter;
