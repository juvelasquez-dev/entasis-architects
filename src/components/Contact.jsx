import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./animations/Reveal";

function Contact() {
  return (
    <Reveal>
    <section id="contact" className="bg-zinc-900 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
          Contact Us
        </p>

        <h2 className="max-w-2xl text-5xl font-bold">
          Let's build something remarkable together.
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-8">

            <div className="flex items-start gap-5">
              <MapPin size={26} />
              <div>
                <h3 className="font-semibold text-xl">Office</h3>
                <p className="text-gray-400">
                  Legazpi City, Albay, Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Phone size={26} />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">
                  +63 912 345 6789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Mail size={26} />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">
                  info@entasisarchitects.com
                </p>
              </div>
            </div>

          </div>

          {/* Right */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 outline-none focus:border-white"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 outline-none focus:border-white"
            ></textarea>

            <button
              className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-300"
            >
              Send Inquiry
            </button>

          </form>

        </div>

      </div>
    </section>
    </Reveal>
  );
}

export default Contact;