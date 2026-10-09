
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight
} from "lucide-react";

import { Link } from "react-router-dom";

import { useState } from "react";

const STORAGE_KEY = "nivara-favourites";

function formatPrice(price) {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }

  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  }

  return `₹${price.toLocaleString("en-IN")}`;
}

function getSavedFavourites() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(() =>
    getSavedFavourites().some(
      (item) => String(item.id) === String(property.id)
    )
  );

  const toggleFavourite = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const saved = getSavedFavourites();

    const alreadySaved = saved.some(
      (item) => String(item.id) === String(property.id)
    );

    const updated = alreadySaved
      ? saved.filter(
          (item) => String(item.id) !== String(property.id)
        )
      : [...saved, property];

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      setLiked(!alreadySaved);

      window.dispatchEvent(
        new Event("nivara-favourites-updated")
      );
    } catch (error) {
      console.error("Unable to update favourites:", error);
    }
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* PROPERTY IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">

          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
            {property.status}
          </span>

          {/* FAVOURITE BUTTON */}

          <button
            type="button"
            onClick={toggleFavourite}
            aria-label={
              liked
                ? "Remove from favourites"
                : "Add to favourites"
            }
            aria-pressed={liked}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 ${
              liked
                ? "text-red-500"
                : "text-slate-700 hover:text-red-500"
            }`}
          >
            <Heart
              size={18}
              fill={liked ? "currentColor" : "none"}
            />
          </button>

        </div>

        {/* PROPERTY PRICE */}

        <div className="absolute bottom-4 left-4 rounded-xl bg-slate-950/80 px-3 py-2 text-sm font-bold text-white backdrop-blur">
          {formatPrice(property.price)}

          {property.status === "For Rent" && (
            <span className="font-normal text-slate-300">
              {" "}
              / month
            </span>
          )}
        </div>

      </div>

      {/* PROPERTY DETAILS */}

      <div className="p-5">

        <div className="flex items-start justify-between gap-3">

          <div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {property.title}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} />
              {property.location}
            </div>

          </div>

          <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-600 dark:bg-brand-500/10">
            {property.type}
          </span>

        </div>

        {/* BEDS, BATHS AND AREA */}

        <div className="my-5 grid grid-cols-3 border-y border-slate-100 py-4 dark:border-slate-800">

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <BedDouble
              size={17}
              className="text-brand-600"
            />
            {property.bedrooms} Beds
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Bath
              size={17}
              className="text-brand-600"
            />
            {property.bathrooms} Baths
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Maximize
              size={17}
              className="text-brand-600"
            />
            {property.area} sqft
          </div>

        </div>

        {/* VIEW PROPERTY */}

        <Link
          to={`/properties/${property.id}`}
          className="flex items-center justify-between text-sm font-bold text-brand-600"
        >
          View Property

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10">
            <ArrowUpRight size={17} />
          </span>

        </Link>

      </div>

    </article>
  );
}

export default PropertyCard;