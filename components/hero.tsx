import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/glow-bottom.svg";
import { contentfulClient } from "@/lib/contentful";

// Enforces Server-Side Rendering on every single request
export const dynamic = 'force-dynamic';

type CtaButtonsFields = {
  button1text: string;
  button1url: string;
  button2text: string;
  button2url: string;
};

type CtaEntry = {
  fields?: CtaButtonsFields;
};

type HeroFields = {
  badge: string;
  title: string;
  subtitle: string;
  callToActions: CtaEntry[];
};

function getResolvedCta(
  callToActions: CtaEntry[]
): CtaButtonsFields | null {
  for (const entry of callToActions) {
    if (entry.fields) {
      return entry.fields;
    }
  }
  return null;
}

async function getHeroData(): Promise<HeroFields | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "hero",
      include: 2,
    });
    return (response.items[0]?.fields as HeroFields) ?? null;
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
    return null;
  }
}

export default async function Hero() {
  const fields = await getHeroData();
  const cta = fields ? getResolvedCta(fields.callToActions) : null;

  return (
    <section>
      <div className="relative mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Particles animation */}
        <Particles className="-z-10 absolute inset-0" />

        {/* Illustration */}
        <div
          className="-z-10 absolute inset-0 -mx-28 rounded-b-[3rem] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="bottom-0 left-1/2 -z-10 absolute -translate-x-1/2">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-32 md:pt-52 pb-16 md:pb-32">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            {fields?.badge && (
              <div className="mb-6" data-aos="fade-down">
                <div className="inline-flex before:absolute relative before:inset-0 before:bg-purple-500 before:blur-md">
                  <span className="group before:absolute relative before:inset-0 before:bg-slate-800/50 shadow py-0.5 before:rounded-full text-slate-300 btn-sm [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box]">
                    <span className="inline-flex relative items-center">
                      {fields.badge}
                    </span>
                  </span>
                </div>
              </div>
            )}
            <h1
              className="bg-clip-text bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-transparent h1"
              data-aos="fade-down"
            >
              {fields?.title ?? "The API Security Framework"}
            </h1>
            <p
              className="mb-8 text-slate-300 text-lg"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {fields?.subtitle ??
                "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."}
            </p>
            {cta && (
              <div
                className="sm:inline-flex sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mx-auto sm:max-w-none max-w-xs"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <a
                    className="group hover:bg-white bg-linear-to-r from-white/80 via-white to-white/80 w-full text-slate-900 transition duration-150 ease-in-out btn"
                    href={cta.button1url}
                  >
                    {cta.button1text}{" "}
                    <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">
                      -&gt;
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    className="bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full text-slate-200 hover:text-white transition duration-150 ease-in-out btn"
                    href={cta.button2url}
                  >
                    <svg
                      className="fill-slate-300 mr-3 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                    </svg>
                    <span>{cta.button2text}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
