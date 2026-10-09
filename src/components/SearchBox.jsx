import {
  Search,
  MapPin,
  Home,
  IndianRupee
} from "lucide-react";

function SearchBox({
  search,
  setSearch,
  type,
  setType,
  status,
  setStatus
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800">

          <Search
            size={19}
            className="text-brand-600"
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search location..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:text-white"
          />

        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800">

          <Home
            size={19}
            className="text-brand-600"
          />

          <select
            value={type}
            onChange={(event) =>
              setType(event.target.value)
            }
            className="w-full bg-transparent text-sm outline-none dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All Property Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>

        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800">

          <MapPin
            size={19}
            className="text-brand-600"
          />

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            className="w-full bg-transparent text-sm outline-none dark:bg-slate-800 dark:text-white"
          >
            <option value="All">Any Status</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>

        </div>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700">

          <IndianRupee size={18} />

          Search Homes

        </button>

      </div>

    </div>
  );
}

export default SearchBox;