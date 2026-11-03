
import { useState } from 'react';

import {
  Award,
  FileText,
  Eye,
  ExternalLink,
  X,
  GraduationCap,
} from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      number: '01',
      title: 'Sertifikat Kominfo',
      category: 'Certificate',
      file: '/certificates/Irfan Maulana (Depan).pdf',
      description: 'Certificate document.',
    },
    {
      number: '02',
      title: 'Irfan Maulana',
      category: 'Certificate',
      file: '/certificates/IRFAN MAULANA.pdf',
      description: 'Certificate document.',
    },
    {
      number: '03',
      title: 'Sertifikat Dinas Bogor',
      category: 'Professional Experience',
      file: '/certificates/Sertifikat Dinas Bogor (AI).pdf',
      description: 'Certificate from Dinas Bogor.',
    },
    {
      number: '04',
      title: 'Sertifikat HTML - Loket 23',
      category: 'Training & Development',
      file: '/certificates/Sertifikat HTML_Loket 23.pdf',
      description: 'HTML training certificate.',
    },
    {
      number: '05',
      title: 'Sertifikat Irfan Maulana',
      category: 'Certificate',
      file: '/certificates/Sertifikat_Irfan Maulana .pdf',
      description: 'Certificate document.',
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0b16] px-6 pt-36 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400 mb-3">
            My Achievements
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Certificates &{' '}
            <span className="text-purple-400">
              Achievements
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            A collection of certificates, professional experiences,
            training programs, and achievements.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
              <Award size={28} />
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                {certificates.length}
              </p>
              <p className="text-sm text-gray-400">
                Total Certificates
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <GraduationCap size={28} />
            </div>

            <div>
              <p className="text-lg font-bold text-white">
                Learning & Growth
              </p>
              <p className="text-sm text-gray-400">
                Continuous Development
              </p>
            </div>
          </div>
        </div>

        {/* CERTIFICATE COUNT */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            My Certificates
          </h2>

          <span className="text-sm text-gray-500">
            {certificates.length} Documents
          </span>
        </div>

        {/* CERTIFICATE GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {certificates.map((certificate) => (
            <div
              key={certificate.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-white/[0.07]"
            >

              {/* PREVIEW COVER */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-linear-to-br from-[#17152c] to-[#252044]">

                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-purple-500 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500 blur-3xl" />
                </div>

                <div className="relative flex flex-col items-center gap-4 text-purple-300 transition duration-500 group-hover:scale-110">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
                    <FileText size={48} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest">
                    CERTIFICATE
                  </span>
                </div>

                <span className="absolute right-4 top-4 rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-white">
                  PDF
                </span>

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white">
                    <Eye size={17} />
                    View Certificate
                  </span>
                </div>
              </div>

              {/* INFORMATION */}
              <div className="p-6">

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-400">
                    {certificate.category}
                  </span>

                  <span className="text-2xl font-bold text-white/10">
                    {certificate.number}
                  </span>
                </div>

                <h3 className="mb-3 min-h-[48px] text-lg font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="mb-5 text-sm text-gray-400">
                  {certificate.description}
                </p>

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300 transition duration-300 hover:bg-purple-500 hover:text-white"
                >
                  <Eye size={17} />
                  View Certificate
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* PDF PREVIEW MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11111f] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

              <div>
                <p className="text-xs text-purple-400">
                  {selectedCertificate.category}
                </p>

                <h3 className="mt-1 font-semibold text-white">
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500"
                aria-label="Close preview"
              >
                <X size={21} />
              </button>

            </div>

            {/* PDF VIEWER */}
            <div className="flex min-h-[300px] flex-1 items-center justify-center bg-white">
              <iframe
                src={selectedCertificate.file}
                title={selectedCertificate.title}
                className="h-[75vh] w-full"
              />
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">

              <span className="text-xs text-gray-400">
                Live Preview · PDF
              </span>

              <a
                href={selectedCertificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
              >
                Open in New Tab
                <ExternalLink size={15} />
              </a>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Certificates;
