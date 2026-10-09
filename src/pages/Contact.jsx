import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send
} from "lucide-react";

import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950">

      <section className="bg-white py-20 dark:bg-slate-950">

        <div className="container-custom">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Contact us
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Let's talk about your next move.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Looking to buy, rent, sell or simply explore?
            Our team is ready to help.
          </p>

        </div>

      </section>

      <section className="pb-24">

        <div className="container-custom">

          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-9"
            >

              <h2 className="text-2xl font-bold dark:text-white">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details and our team will get
                back to you.
              </p>

              {submitted && (
                <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  Thank you! Your message has been received.
                </div>
              )}

              <div className="mt-7 grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Full Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Phone
                  </label>

                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    I'm interested in
                  </label>

                  <select
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Buying a property</option>
                    <option>Renting a property</option>
                    <option>Selling a property</option>
                    <option>General enquiry</option>
                  </select>

                </div>

                <div className="sm:col-span-2">

                  <label className="mb-2 block text-sm font-semibold dark:text-white">
                    Message
                  </label>

                  <textarea
                    required
                    rows="6"
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
              >

                <Send size={17} />

                Send Message

              </button>

            </form>

            <div className="space-y-5">

              <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">

                <h2 className="text-xl font-bold dark:text-white">
                  Get in touch
                </h2>

                <div className="mt-7 space-y-6">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Phone
                      </p>

                      <p className="mt-1 font-semibold dark:text-white">
                        +91 98765 43210
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="mt-1 font-semibold dark:text-white">
                        hello@nivaraestates.com
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Office
                      </p>

                      <p className="mt-1 font-semibold dark:text-white">
                        Nivara Towers, Hyderabad
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                      <Clock size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Working Hours
                      </p>

                      <p className="mt-1 font-semibold dark:text-white">
                        Mon - Sat, 9:00 AM - 7:00 PM
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              <div className="overflow-hidden rounded-3xl">

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
                  alt="Nivara office"
                  className="h-64 w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;