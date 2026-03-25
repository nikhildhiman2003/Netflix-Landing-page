import React, { useRef } from "react";
const movies = [
  {
    id: 1,
    img: "https://cdn.district.in/movies-assets/images/cinema/DD-1be608f0-1d22-11f1-96c9-4539b6d27dc7.jpg",
  },
  {
    id: 2,
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/border-2-et00401449-1768546422.jpg",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-LvSEqrg3dnn4gemhp3LgK0-xmhDEu19HA&s",
  },
  {
    id: 4,
    img: "https://substackcdn.com/image/fetch/$s_!QNsE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1876d157-4a02-4794-8cd0-89d510a7d6f6_740x925.jpeg",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMmEzMzM1OGMtMDVkYS00NGMwLTgyNzAtZjgyNWU4NTlhZDc4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/War_Machine_poster.jpeg/250px-War_Machine_poster.jpeg",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmRy8J5WIL60iRHG4lsXc-nPtGmVzOcmOog&s",
  },
  {
    id: 8,
    img: "https://qqcdnpictest.mxplay.com/pic/80722c41396ac19fdfa73a451a44e645/en/2x3/312x468/test_pic1712051899402.webp",
  },
  {
    id: 9,
    img: "https://static.dc.com/2023-12/Movies_Thumb_AquamanTheLostKingdom_1222.jpg?w=1000",
  },
  {
    id: 10,
    img: "https://assets.gadgets360cdn.com/pricee/assets/product/202501/How_to_Train_Your_Dragon_Poster_1_1737458279.jpg",
  },
];

function feature() {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (dir === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-black text-white py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 px-3 py-6 rounded-md"
        >
          ‹
        </button>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="relative group w-[180px] h-[270px] md:w-[220px] md:h-[320px] flex-shrink-0"
              >
                <span
                  className="absolute left-[-4px] bottom-0 text-[120px] font-extrabold z-20 
                    text-black
                    transition-all duration-300 group-hover:scale-110"
                  style={{
                    WebkitTextStroke: "3px white",
                  }}
                >
                  {index + 1}
                </span>

                <img
                  src={movie.img}
                  alt="movie"
                  className="w-full h-full object-cover rounded-lg relative z-10 
                    transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 px-3 py-6 rounded-md"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default feature;
