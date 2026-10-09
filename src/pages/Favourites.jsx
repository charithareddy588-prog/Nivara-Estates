
import { useEffect, useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PropertyCard from "../components/PropertyCard";

const STORAGE_KEY = "nivara-favourites";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const loadFavourites = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );

        setFavourites(Array.isArray(saved) ? saved : []);
      } catch {
        setFavourites([]);
      }
    };

    loadFavourites();

    // Update when a favourite is changed elsewhere in the app.
    window.addEventListener("nivara-favourites-updated", loadFavourites);
    window.addEventListener("storage", loadFavourites);

    return () => {
      window.removeEventListener(
        "nivara-favourites-updated",
        loadFavourites
      );
      window.removeEventListener("storage", loadFavourites);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container-custom">

        <div className="mb-10">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
            <Heart size={28} />
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            My Favourites
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Your favourite homes, all in one place.
          </p>

          <p className="mt-2 text-sm font-semibold text-brand-600">
            {favourites.length} saved{" "}
            {favourites.length === 1 ? "property" : "properties"}
          </p>
        </div>

        {favourites.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
              <Heart size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              No favourite properties yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              Browse properties and click the heart icon on
              any home you want to save.
            </p>

            <Link
              to="/properties"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Explore Properties
              <ArrowRight size={17} />
            </Link>

          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {favourites.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Favourites;