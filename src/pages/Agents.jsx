import {
  ArrowRight,
  Mail,
  Phone,
  Star
} from "lucide-react";

import { Link } from "react-router-dom";

import properties from "../data/properties";

function Agents() {
  const agents = properties.map(
    (property) => property.agent
  );

  const uniqueAgents = Array.from(
    new Map(
      agents.map((agent) => [agent.email, agent])
    ).values()
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      <section className="bg-white py-20 dark:bg-slate-950">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
              Our people
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Meet the experts behind your next move.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-400">
              Local knowledge, honest advice and years of
              experience — our agents are here to make
              your property journey easier.
            </p>

          </div>

        </div>

      </section>

      <section className="pb-24">

        <div className="container-custom">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {uniqueAgents.map((agent) => (

              <article
                key={agent.email}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="h-72 overflow-hidden">

                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h2 className="text-xl font-bold dark:text-white">
                        {agent.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        {agent.role}
                      </p>

                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-bold text-amber-600">
                      <Star
                        size={13}
                        fill="currentColor"
                      />
                      4.9
                    </div>

                  </div>

                  <div className="mt-6 space-y-3">

                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-3 text-sm text-slate-500 hover:text-brand-600"
                    >
                      <Phone
                        size={16}
                        className="text-brand-600"
                      />
                      {agent.phone}
                    </a>

                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-3 text-sm text-slate-500 hover:text-brand-600"
                    >
                      <Mail
                        size={16}
                        className="text-brand-600"
                      />
                      {agent.email}
                    </a>

                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-slate-200"
                  >
                    Contact Agent

                    <ArrowRight size={17} />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Agents;