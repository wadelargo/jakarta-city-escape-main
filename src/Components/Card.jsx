export default function Card({ nama, deskripsi, image }) {
  return (
    <div className="flex justify-center h-[660px]">
      <div className="max-w-sm text-stone-800 bg-white border border-gray-200 rounded-lg shadow group-hover:shadow-md ease-in-out duration-300 transition-shadow">
        <a href={`/jelajahi/${nama.replace(/\s+/g, "-").toLowerCase()}`}>
          <img className="rounded-t-lg h-64" src={`${image}`} alt={`${nama}`} />
        </a>
        <div className="p-5">
          <a
            href={`/jelajahi/${nama.replace(/\s+/g, "-").toLowerCase()}`}
            className="block h-20"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              {nama}
            </h5>
          </a>
          <p className="mb-6 h-[210px] font-normal tracking-wide text-gray-700 dark:text-gray-100">{`${deskripsi}...`}</p>
          <a
            href={`/jelajahi/${nama.replace(/\s+/g, "-").toLowerCase()}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg btn-primary"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
