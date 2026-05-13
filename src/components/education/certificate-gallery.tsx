"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineDocumentText, HiXMark } from "react-icons/hi2";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  note: string;
  image: string;
};

type CertificateGalleryProps = {
  certificates: Certificate[];
};

function getInitialCertificate(certificates: Certificate[]) {
  return certificates.find((certificate) => certificate.image) ?? certificates[0];
}

export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const initialCertificate = useMemo(
    () => getInitialCertificate(certificates),
    [certificates],
  );
  const [selectedTitle, setSelectedTitle] = useState(initialCertificate?.title ?? "");
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const selectedCertificate =
    certificates.find((certificate) => certificate.title === selectedTitle) ?? initialCertificate;

  useEffect(() => {
    if (!isViewerOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isViewerOpen]);

  if (!selectedCertificate) {
    return null;
  }

  return (
    <>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-panel-strong rounded-[2rem] p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Selected document
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                {selectedCertificate.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {selectedCertificate.issuer} - {selectedCertificate.year}
              </p>
            </div>

            {selectedCertificate.image ? (
              <button
                type="button"
                onClick={() => setIsViewerOpen(true)}
                className="button-secondary sm:w-auto"
              >
                Open Full View
                <HiOutlineArrowUpRight className="text-base" />
              </button>
            ) : null}
          </div>

          <div className="mt-6 rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-cyan-300/[0.04] p-3 sm:p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-3 sm:p-4">
              <div className="flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-3 sm:min-h-[26rem] sm:p-5 lg:min-h-[34rem]">
                {selectedCertificate.image ? (
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    width={1400}
                    height={1000}
                    className="h-auto max-h-[18rem] w-auto max-w-full object-contain sm:max-h-[24rem] lg:max-h-[32rem]"
                  />
                ) : (
                  <div className="flex max-w-md flex-col items-center text-center text-slate-400">
                    <HiOutlineDocumentText className="text-4xl text-slate-500" />
                    <p className="mt-4 text-base text-white">Document preview coming soon.</p>
                    <p className="mt-2 text-sm text-slate-500">{selectedCertificate.note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="body-copy mt-5 text-sm">{selectedCertificate.note}</p>
        </div>

        <div className="grid gap-4">
          {certificates.map((certificate) => {
            const isSelected = certificate.title === selectedCertificate.title;

            return (
              <button
                key={certificate.title}
                type="button"
                onClick={() => setSelectedTitle(certificate.title)}
                className={`w-full text-left transition-all duration-300 ${
                  isSelected ? "scale-[1.01]" : ""
                }`}
              >
                <div
                  className={`rounded-[1.75rem] border p-3 sm:p-4 ${
                    isSelected
                      ? "border-cyan-300/35 bg-white/[0.09] shadow-[0_18px_50px_rgba(56,189,248,0.12)]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-white/10 bg-slate-950/75 p-2 sm:h-28 sm:w-28">
                      {certificate.image ? (
                        <Image
                          src={certificate.image}
                          alt={certificate.title}
                          width={320}
                          height={240}
                          className="h-auto max-h-full w-auto max-w-full object-contain"
                        />
                      ) : (
                        <HiOutlineDocumentText className="text-3xl text-slate-500" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        {certificate.year}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">
                        {certificate.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
                      <p className="body-copy mt-3 text-sm">
                        {certificate.image
                          ? "Tap to preview this document in the framed viewer."
                          : "Document image will be added later."}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isViewerOpen && selectedCertificate.image ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-[#020711]/80 p-4 backdrop-blur-xl sm:p-6"
            onClick={() => setIsViewerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex h-full w-full max-w-5xl items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="surface-panel-strong w-full rounded-[2rem] p-4 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Full document view
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                      {selectedCertificate.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {selectedCertificate.issuer} - {selectedCertificate.year}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsViewerOpen(false)}
                    aria-label="Close document viewer"
                    className="interactive-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white"
                  >
                    <HiXMark className="text-xl" />
                  </button>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-3 sm:p-4">
                  <div className="flex min-h-[60vh] items-center justify-center overflow-auto rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-3 sm:p-5">
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      width={1600}
                      height={1200}
                      className="h-auto max-h-[72vh] w-auto max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
