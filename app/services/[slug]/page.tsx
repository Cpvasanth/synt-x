import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
// import FaqSection from "../../component/FaqSection";


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-black text-white min-h-screen py-28 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/services"
          className="text-white hover:underline mb-10 inline-block"
        >
          ← Back to Services
        </Link>

        {/* Title & Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-3">{service.icon} {service.name}</h1>
          <p className="text-gray-300 text-lg max-w-3xl">{service.description}</p>
        </div>

        {/* Service Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={service.image}
            alt={service.name}
            width={1200} // Adjust width as needed
            height={600} // Adjust height as needed
            layout="responsive" // Makes image responsive
            objectFit="cover" // Covers the area without distortion
          />
        </div>

        {/* Long Description (optional - consider adding this if you have it in your data) */}
        {service.longDescription && (
          <section className="mb-20 text-gray-200 text-lg leading-relaxed">
            <h2 className="text-4xl font-bold mb-6">Overview</h2>
            <p>{service.longDescription}</p>
          </section>
        )}

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-yellow-300 font-bold text-3xl leading-none">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-xl">{step.title}</p>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Feature Comparison Table */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10">Compare Packages</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 border border-white/20">Features</th>
                  <th className="p-4 border border-white/20 text-center">
                    Standard Pack
                  </th>
                  <th className="p-4 border border-white/20 text-center">
                    Custom Pack
                  </th>
                </tr>
              </thead>
              <tbody>
                {service.features.map((item, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="p-4">{item.label}</td>
                    <td className="p-4 text-center text-xl">
                      {item.standard ? "✅" : "❌"}
                    </td>
                    <td className="p-4 text-center text-xl">
                      {item.custom ? "✅" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        {/* <div className="text-center">
          <Link
            href="/contact"
            className="text-black bg-yellow-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
          >
            Get A Quote →
          </Link>
        </div> */}
      </div>
      {/* <FaqSection /> */}
    </main>
  );
}