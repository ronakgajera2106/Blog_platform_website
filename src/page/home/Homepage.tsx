import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="px-72">
        <section className=" py-14">
          <div className=" flex justify-center items-center">
            <h1 className="text-6xl">
              <span className="font-semibold">This is Micca.</span> A blog that
              covers productivity, tips, inspiration, and strategies for massive
              profits.
            </h1>
          </div>
        </section>
        <br />
        <section className="container">
          <div>
            <h1 className="text-3xl">FEATURED POSTS</h1>
            <br />
          </div>
          <div className="flex ">
            <div className="flex flex-wrap xl:flex-nowrap gap-10">
              <div className="xl:[flex-basis:65%]  shrink-0">
                <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5">
                  <img
                    src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Felise-wilcox-b7GNy1-pgCM-unsplash.jpg&w=1080&q=75"
                    alt="Post thumbnail"
                    sizes="(max-width: 1279px) 95vw, 950px"
                    className="absolute h-full w-full inset-0 object-cover text-transparent"
                    decoding="async"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-wrap gap-3 items-center mt-8">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                      href="/category/inspirational"
                    >
                      inspirational
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">Jul 8, 2022</span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">5 min read</span>
                  </div>
                </div>

                <h2 className="font-bold leading-snug mt-4 text-2xl sm:text-4xl">
                  <a href="/blog/the-only-limit-to-our-realization-of-tomorrow-will-be-our-doubts-of-today">
                    The only limit to our realization of tomorrow will be our
                    doubts of today
                  </a>
                </h2>

                <p className="mt-4 sm:text-lg">
                  Nostrud proident cupidatat quis commodo aliquip aliqua dolor
                  exercitation mollit aliquip aliquip exercitation anim enim
                  laboris reprehenderit excepteur anim. Et ea sunt laboris
                  ullamco duis sit sit eu qui ut duis consectetur fugiat ullamco
                  ex incididunt.
                </p>
                <div className="flex gap-2 items-center mt-6">
                  <div className="flex">
                    <a
                      className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 "
                      href="/author/main"
                    >
                      <div
                        className="rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 inline-block leading-[0] !border-2"
                        style={{ width: "30px", height: "30px" }}
                      >
                        <div className="pt-[100%] relative">
                          <img
                            alt="author avatar"
                            sizes="30px"
                            src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Favatars%2Fian-dooley-d1UPkiFd04A-unsplash.jpg&w=32&q=75"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              objectFit: "cover",
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className="text-sm font-medium heading-color"
                      href="/author/main"
                    >
                      Keith Brandie
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row xl:flex-col gap-10 ">
              <div className="flex-1">
                <a
                  className="block "
                  href="/blog/chinese-art-in-the-modern-world"
                >
                  <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 ">
                    <img
                      alt="Post thumbnail"
                      sizes="(max-width: 767px) 95vw, (max-width: 1279px) 40vw, 450px"
                      src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Frustem-baltiyev-MxHLEjV2Kgs-unsplash.jpg&w=450&q=75"
                      decoding="async"
                      data-nimg="fill"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </div>
                </a>
                <div className="flex flex-wrap gap-3 items-center mt-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                      href="/category/life%20lessons"
                    >
                      life lessons
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">Apr 29, 2022</span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">4 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <a href="/blog/chinese-art-in-the-modern-world">
                    Chinese art in the modern world
                  </a>
                </h2>
                <p className="mt-3">
                  Enim eu laborum ex reprehenderit quis sit velit consectetur
                  quis ipsum nisi laboris magna irure in.
                </p>
              </div>
              <div className="flex-1">
                <a
                  className="block "
                  href="/blog/imagination-governs-the-world"
                >
                  <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 ">
                    <img
                      alt="Post thumbnail"
                      sizes="(max-width: 767px) 95vw, (max-width: 1279px) 40vw, 450px"
                      src="https://micca-blog-template.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fnextjs23%2Fmicca%2Fdaniil-silantev-eaBA4z9RYfw-unsplash.jpg&w=450&q=75"
                      decoding="async"
                      data-nimg="fill"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                  </div>
                </a>

                <div className="flex flex-wrap gap-3 items-center mt-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                      href="/category/productivity"
                    >
                      productivity
                    </a>
                  </div>
                  <div className="text-sm data-color flex items-center ">
                    <span className="whitespace-nowrap ">Apr 21, 2022</span>
                    <span className="px-2.5">⋅</span>
                    <span className="whitespace-nowrap">3 min read</span>
                  </div>
                </div>
                <h2 className="font-bold leading-snug mt-3 text-2xl">
                  <a href="/blog/imagination-governs-the-world">
                    Imagination governs the world
                  </a>
                </h2>
                <p className="mt-3">
                  Ipsum est deserunt excepteur ad adipisicing anim mollit
                  deserunt veniam aliqua duis Lorem irure enim labore et
                  excepteur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
