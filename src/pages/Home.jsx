import {
  ArrowRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Building2,
  KeyRound
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

import properties from "../data/properties";

import PropertyCard from "../components/PropertyCard";

import SearchBox from "../components/SearchBox";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (type !== "All") {
      params.set("type", type);
    }

    if (status !== "All") {
      params.set("status", status);
    }

    navigate(`/properties?${params.toString()}`);
  };

  const featuredProperties = properties.slice(0, 3);

  return (
    <div>

      {/* HERO */}

      <section className="relative min-h-[720px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury home"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="hero-overlay absolute inset-0" />

        <div className="container-custom relative z-10 flex min-h-[720px] items-center">

          <div className="max-w-3xl animate-fadeUp">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">

              <Sparkles
                size={16}
                className="text-brand-300"
              />

              Find a place you'll love to call home

            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Your next chapter
              <span className="block text-brand-300">
                starts here.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Discover thoughtfully selected homes,
              premium apartments and exceptional
              properties in the places that matter most.
            </p>

            <div className="mt-10">

              <SearchBox
                search={search}
                setSearch={setSearch}
                type={type}
                setType={setType}
                status={status}
                setStatus={setStatus}
              />

            </div>

            <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-200">

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-brand-300"
                />
                Verified Properties
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-brand-300"
                />
                Trusted Agents
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-brand-300"
                />
                Expert Guidance
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

        <div className="container-custom">

          <div className="grid grid-cols-2 divide-x divide-slate-200 py-8 dark:divide-slate-800 lg:grid-cols-4">

            <div className="px-5 text-center">

              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                1,200+
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Properties Listed
              </p>

            </div>

            <div className="px-5 text-center">

              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                85+
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Trusted Agents
              </p>

            </div>

            <div className="px-5 text-center">

              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                4.9/5
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Client Rating
              </p>

            </div>

            <div className="px-5 text-center">

              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                12+
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Cities Covered
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED */}

      <section className="bg-slate-50 py-24 dark:bg-slate-900/40">

        <div className="container-custom">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                Featured collection
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Homes worth coming home to
              </h2>

              <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
                Explore some of our most desirable properties,
                carefully selected for quality, location and lifestyle.
              </p>

            </div>

            <Link
              to="/properties"
              className="flex items-center gap-2 text-sm font-bold text-brand-600"
            >
              View all properties
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="bg-white py-24 dark:bg-slate-950">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
              Why Nivara
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Real estate, made refreshingly simple.
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              We combine local expertise, technology and
              genuine human support to make your property
              journey easier.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Verified Listings",
                text: "Every property is carefully reviewed before appearing on our platform."
              },
              {
                icon: Users,
                title: "Expert Agents",
                text: "Connect with experienced property professionals who understand your needs."
              },
              {
                icon: Building2,
                title: "Quality Homes",
                text: "Discover properties selected for design, location and long-term value."
              },
              {
                icon: KeyRound,
                title: "Easy Decisions",
                text: "Clear information and personal guidance from search to move-in day."
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-500/10">

                    <Icon size={22} />

                  </div>

                  <h3 className="mt-6 font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-brand-600 py-20">

        <div className="container-custom">

          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-brand-700 p-8 text-white md:flex-row md:items-center md:p-12">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-200">
                Ready when you are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Let's find your perfect place.
              </h2>

              <p className="mt-4 max-w-xl text-brand-100">
                Tell us what you're looking for and we'll
                help you take the next step.
              </p>

            </div>

            <Link
              to="/contact"
              className="shrink-0 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
            >
              Talk to an Expert
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;