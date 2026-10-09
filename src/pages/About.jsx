import {
  Award,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Users
} from "lucide-react";

import { Link } from "react-router-dom";

function About() {
  return (
    <div>

      <section className="bg-slate-950 py-24 text-white">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
              About Nivara
            </p>

            <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
              Better spaces.
              <span className="block text-brand-300">
                Better living.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-300">
              Nivara Estates is a modern real estate
              platform created to make finding the right
              property simpler, clearer and more human.
            </p>

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="container-custom">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                Our story
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Property decisions deserve clarity.
              </h2>

              <p className="mt-6 leading-8 text-slate-500 dark:text-slate-400">
                Buying or renting a home is one of the
                biggest decisions people make. We believe
                the process should feel exciting instead
                of overwhelming.
              </p>

              <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
                Nivara brings together carefully selected
                properties, knowledgeable agents and
                intuitive technology to create a smoother
                experience from the first search to the
                final key handover.
              </p>

              <Link
                to="/properties"
                className="mt-7 inline-flex rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white"
              >
                Explore Properties
              </Link>

            </div>

            <div className="overflow-hidden rounded-[2rem]">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern interior"
                className="h-[500px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900/40">

        <div className="container-custom">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: HeartHandshake,
                title: "People First",
                text: "We put your goals, lifestyle and priorities at the heart of every conversation."
              },
              {
                icon: CheckCircle2,
                title: "Trust",
                text: "Transparent information and verified listings help you make confident decisions."
              },
              {
                icon: Award,
                title: "Quality",
                text: "We focus on properties and experiences that meet high standards."
              },
              {
                icon: Users,
                title: "Community",
                text: "We believe great homes are the foundation of strong communities."
              }
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-500/10">

                    <Icon size={22} />

                  </div>

                  <h3 className="mt-6 font-bold dark:text-white">
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

      <section className="py-24">

        <div className="container-custom">

          <div className="rounded-[2rem] bg-brand-600 p-10 text-center text-white sm:p-16">

            <Building2
              size={42}
              className="mx-auto"
            />

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Your next address could be closer than you think.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-brand-100">
              Start exploring our latest properties and
              discover a place that feels like yours.
            </p>

            <Link
              to="/properties"
              className="mt-7 inline-block rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700"
            >
              Browse Homes
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;