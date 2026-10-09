import {
  ArrowLeft,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Heart,
  Mail,
  MapPin,
  Maximize,
  MessageCircle,
  Phone,
  ShieldCheck,
  Car
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import { useState } from "react";

import properties from "../data/properties";

function formatPrice(price) {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }

  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  }

  return `₹${price.toLocaleString("en-IN")}`;
}

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!property) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-bold dark:text-white">
            Property not found
          </h1>

          <Link
            to="/properties"
            className="mt-5 inline-block rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white"
          >
            Browse Properties
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950">

      <div className="container-custom py-8">

        <Link
          to="/properties"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600"
        >
          <ArrowLeft size={17} />
          Back to Properties
        </Link>

        <div className="grid gap-3 lg:grid-cols-3">

          <div className="relative h-[420px] overflow-hidden rounded-3xl lg:col-span-2 lg:h-[550px]">

            <img
              src={property.gallery[activeImage]}
              alt={property.title}
              className="h-full w-full object-cover"
            />

            <button
              onClick={() => setLiked(!liked)}
              className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ${
                liked
                  ? "text-red-500"
                  : "text-slate-700"
              }`}
            >
              <Heart
                size={21}
                fill={liked ? "currentColor" : "none"}
              />
            </button>

            <div className="absolute bottom-5 left-5 rounded-xl bg-slate-950/80 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              {property.status}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3">

            {property.gallery.slice(1).map(
              (image, index) => (
                <button
                  key={image}
                  onClick={() =>
                    setActiveImage(index + 1)
                  }
                  className="overflow-hidden rounded-3xl"
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full min-h-[200px] w-full object-cover transition hover:scale-105"
                  />
                </button>
              )
            )}

          </div>

        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">

          <div>

            <div className="flex flex-col justify-between gap-5 sm:flex-row">

              <div>

                <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
                  {property.type}
                </p>

                <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                  {property.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <MapPin size={17} />
                  {property.location}
                </div>

              </div>

              <div className="sm:text-right">

                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {formatPrice(property.price)}
                </p>

                {property.status === "For Rent" && (
                  <p className="text-sm text-slate-500">
                    per month
                  </p>
                )}

              </div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <BedDouble
                  size={21}
                  className="text-brand-600"
                />

                <p className="mt-3 text-xl font-bold dark:text-white">
                  {property.bedrooms}
                </p>

                <p className="text-xs text-slate-500">
                  Bedrooms
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <Bath
                  size={21}
                  className="text-brand-600"
                />

                <p className="mt-3 text-xl font-bold dark:text-white">
                  {property.bathrooms}
                </p>

                <p className="text-xs text-slate-500">
                  Bathrooms
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <Maximize
                  size={21}
                  className="text-brand-600"
                />

                <p className="mt-3 text-xl font-bold dark:text-white">
                  {property.area}
                </p>

                <p className="text-xs text-slate-500">
                  Sq Ft
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <Car
                  size={21}
                  className="text-brand-600"
                />

                <p className="mt-3 text-xl font-bold dark:text-white">
                  {property.parking}
                </p>

                <p className="text-xs text-slate-500">
                  Parking
                </p>

              </div>

            </div>

            <div className="mt-12">

              <h2 className="text-2xl font-bold dark:text-white">
                About this property
              </h2>

              <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
                {property.description}
              </p>

            </div>

            <div className="mt-12">

              <h2 className="text-2xl font-bold dark:text-white">
                Property features
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-slate-900"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                      <Check size={16} />
                    </div>

                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <CalendarDays
                  size={20}
                  className="text-brand-600"
                />

                <p className="mt-3 text-sm text-slate-500">
                  Built in
                </p>

                <p className="font-bold dark:text-white">
                  {property.year}
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-slate-900">

                <ShieldCheck
                  size={20}
                  className="text-brand-600"
                />

                <p className="mt-3 text-sm text-slate-500">
                  Listing status
                </p>

                <p className="font-bold dark:text-white">
                  Verified Property
                </p>

              </div>

            </div>

          </div>

          {/* AGENT CARD */}

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-28">

            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Listed by
            </p>

            <div className="mt-5 flex items-center gap-4">

              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="h-16 w-16 rounded-2xl object-cover"
              />

              <div>

                <h3 className="font-bold dark:text-white">
                  {property.agent.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {property.agent.role}
                </p>

              </div>

            </div>

            <div className="mt-6 space-y-3">

              <a
                href={`tel:${property.agent.phone}`}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold dark:bg-slate-800 dark:text-white"
              >
                <Phone
                  size={17}
                  className="text-brand-600"
                />
                {property.agent.phone}
              </a>

              <a
                href={`mailto:${property.agent.email}`}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold dark:bg-slate-800 dark:text-white"
              >
                <Mail
                  size={17}
                  className="text-brand-600"
                />
                Email Agent
              </a>

            </div>

            <div className="mt-6 space-y-3">

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700">

                <MessageCircle size={18} />

                Contact Agent

              </button>

              <Link
                to="/contact"
                className="block w-full rounded-xl border border-slate-200 px-5 py-3.5 text-center text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Schedule a Visit
              </Link>

            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              Your information is safe with Nivara Estates.
              We never share your details without permission.
            </p>

          </aside>

        </div>

      </div>

    </div>
  );
}

export default PropertyDetails;