import {
  Filter,
  SlidersHorizontal,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

const PROPERTIES_PER_PAGE = 6;

function Properties() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [type, setType] = useState(
    searchParams.get("type") || "All"
  );

  const [status, setStatus] = useState(
    searchParams.get("status") || "All"
  );

  const [bedrooms, setBedrooms] = useState("All");
  const [sort, setSort] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // FILTER AND SORT PROPERTIES
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (search.trim()) {
      result = result.filter((property) =>
        `${property.title} ${property.location}`
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      );
    }

    if (type !== "All") {
      result = result.filter(
        (property) => property.type === type
      );
    }

    if (status !== "All") {
      result = result.filter(
        (property) => property.status === status
      );
    }

    if (bedrooms !== "All") {
      result = result.filter(
        (property) =>
          property.bedrooms >= Number(bedrooms)
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "area") {
      result.sort((a, b) => b.area - a.area);
    }

    return result;
  }, [search, type, status, bedrooms, sort]);

  // RESET TO PAGE 1 WHEN FILTERS OR SORTING CHANGE
  useEffect(() => {
    setCurrentPage(1);
  }, [search, type, status, bedrooms, sort]);

  // CALCULATE PAGINATION
  const totalPages = Math.ceil(
    filteredProperties.length / PROPERTIES_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PROPERTIES_PER_PAGE;

  const endIndex = Math.min(
    startIndex + PROPERTIES_PER_PAGE,
    filteredProperties.length
  );

  const currentProperties = filteredProperties.slice(
    startIndex,
    endIndex
  );

  // SCROLL UP WHEN CHANGING PAGES
  const changePage = (page) => {
    const nextPage = Math.min(
      Math.max(page, 1),
      totalPages
    );

    setCurrentPage(nextPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // PAGE NUMBERS
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );

    let endPage = Math.min(
      totalPages,
      startPage + maxVisiblePages - 1
    );

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(
        1,
        endPage - maxVisiblePages + 1
      );
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    return pages;
  };

  // CLEAR ALL FILTERS
  const clearFilters = () => {
    setSearch("");
    setType("All");
    setStatus("All");
    setBedrooms("All");
    setSort("featured");
    setCurrentPage(1);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* PAGE HEADER */}
      <section className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Property collection
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Find a property that feels right.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
            Browse our curated collection of homes,
            apartments and villas.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            {/* FILTER SIDEBAR */}
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal
                    size={19}
                    className="text-brand-600"
                  />

                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Filters
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  Reset
                </button>
              </div>

              <div className="mt-7 space-y-6">

                {/* SEARCH */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Search
                  </label>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 dark:bg-slate-800">
                    <Search
                      size={17}
                      className="shrink-0 text-slate-400"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Location or name"
                      className="w-full bg-transparent text-sm outline-none dark:text-white"
                    />
                  </div>
                </div>

                {/* PROPERTY TYPE */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Property Type
                  </label>

                  <select
                    value={type}
                    onChange={(event) =>
                      setType(event.target.value)
                    }
                    className="w-full rounded-xl bg-slate-50 px-3 py-3 text-sm outline-none dark:bg-slate-800 dark:text-white"
                  >
                    <option value="All">All Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="House">House</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>

                {/* STATUS */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Status
                  </label>

                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(event.target.value)
                    }
                    className="w-full rounded-xl bg-slate-50 px-3 py-3 text-sm outline-none dark:bg-slate-800 dark:text-white"
                  >
                    <option value="All">Any Status</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>

                {/* BEDROOMS */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Bedrooms
                  </label>

                  <select
                    value={bedrooms}
                    onChange={(event) =>
                      setBedrooms(event.target.value)
                    }
                    className="w-full rounded-xl bg-slate-50 px-3 py-3 text-sm outline-none dark:bg-slate-800 dark:text-white"
                  >
                    <option value="All">Any Number</option>
                    <option value="1">1+ Bedroom</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                  </select>
                </div>

              </div>
            </aside>

            {/* PROPERTY RESULTS */}
            <main>
              {/* RESULTS HEADER */}
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Showing{" "}
                    <span className="font-bold text-slate-900 dark:text-white">
                      {filteredProperties.length === 0
                        ? 0
                        : startIndex + 1}
                      {filteredProperties.length > 0 &&
                        `–${endIndex}`}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-slate-900 dark:text-white">
                      {filteredProperties.length}
                    </span>{" "}
                    properties
                  </p>

                  {filteredProperties.length > 0 && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Page {currentPage} of {totalPages}
                    </p>
                  )}
                </div>

                {/* SORTING */}
                <select
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value)
                  }
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                >
                  <option value="featured">
                    Sort: Featured
                  </option>
                  <option value="low">
                    Price: Low to High
                  </option>
                  <option value="high">
                    Price: High to Low
                  </option>
                  <option value="area">
                    Largest Area
                  </option>
                </select>
              </div>

              {/* PROPERTY GRID OR EMPTY STATE */}
              {filteredProperties.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center dark:border-slate-700 dark:bg-slate-900">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
                    <Filter
                      size={23}
                      className="text-slate-400"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    No properties found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Try changing your search filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    <X size={16} />
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 md:grid-cols-2">
                    {currentProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                      />
                    ))}
                  </div>

                  {/* PAGINATION */}
                  {totalPages > 1 && (
                    <nav
                      className="mt-10 flex flex-wrap items-center justify-center gap-2"
                      aria-label="Property pagination"
                    >
                      {/* PREVIOUS */}
                      <button
                        type="button"
                        onClick={() =>
                          changePage(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-600 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        <ChevronLeft size={18} />
                        <span className="hidden sm:inline">
                          Previous
                        </span>
                      </button>

                      {/* FIRST PAGE AND ELLIPSIS */}
                      {pageNumbers[0] > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => changePage(1)}
                            className="h-10 min-w-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-brand-600 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                          >
                            1
                          </button>

                          {pageNumbers[0] > 2 && (
                            <span className="px-1 text-slate-400">
                              ...
                            </span>
                          )}
                        </>
                      )}

                      {/* PAGE NUMBERS */}
                      {pageNumbers.map((page) => (
                        <button
                          key={page}
                          type="button"
                          onClick={() => changePage(page)}
                          aria-current={
                            currentPage === page
                              ? "page"
                              : undefined
                          }
                          className={`h-10 min-w-10 rounded-xl border px-3 text-sm font-semibold transition ${
                            currentPage === page
                              ? "border-brand-600 bg-brand-600 text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-brand-600 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      {/* LAST PAGE AND ELLIPSIS */}
                      {pageNumbers[pageNumbers.length - 1] <
                        totalPages && (
                        <>
                          {pageNumbers[
                            pageNumbers.length - 1
                          ] <
                            totalPages - 1 && (
                            <span className="px-1 text-slate-400">
                              ...
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              changePage(totalPages)
                            }
                            className="h-10 min-w-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-brand-600 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                          >
                            {totalPages}
                          </button>
                        </>
                      )}

                      {/* NEXT */}
                      <button
                        type="button"
                        onClick={() =>
                          changePage(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-600 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        <span className="hidden sm:inline">
                          Next
                        </span>
                        <ChevronRight size={18} />
                      </button>
                    </nav>
                  )}
                </>
              )}
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Properties;