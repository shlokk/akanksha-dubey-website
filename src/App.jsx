import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Stethoscope,
  GraduationCap,
  BriefcaseMedical,
  Baby,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity,
  Users,
  Hospital,
  Star,
} from "lucide-react";

const experience = [
  {
    role: "Paediatrician",
    place: "Cloudnine Hospital",
    location: "Gurgaon, Haryana",
    dates: "2024 – 2025",
    highlight: "Tertiary maternity and neonatal care",
    points: [
      "Managed paediatric OPD/IPD care in a high-volume maternity and neonatal setting.",
      "Attended high-risk deliveries and supported neonatal resuscitation, stabilisation, and early newborn care.",
      "Worked closely with neonatology, obstetrics, and emergency teams for coordinated child health care.",
    ],
  },
  {
    role: "Paediatrician",
    place: "Private Practice",
    location: "Rewa, Madhya Pradesh",
    dates: "2023 – 2024",
    highlight: "Independent paediatric clinic",
    points: [
      "Ran an independent paediatric clinic caring for children from birth through adolescence.",
      "Provided preventive visits, immunisations, growth monitoring, and acute/chronic illness care.",
      "Served as visiting doctor for deliveries and emergency NICU support at Apollo Hospital Rewa.",
    ],
  },
  {
    role: "Senior Resident, Paediatrics",
    place: "Shyam Shah Medical College",
    location: "Rewa, Madhya Pradesh",
    dates: "2021 – 2023",
    highlight: "NICU, PICU, REIC OPD and teaching",
    points: [
      "Managed neonatal, paediatric, respiratory, renal, endocrine, and neurodevelopmental cases.",
      "Handled ventilation, intubation, ABG interpretation, newborn resuscitation, and procedural care.",
      "Independently ran REIC OPD for autism, ADHD, cerebral palsy, epilepsy, and intellectual disability.",
      "Trained MBBS students, nurses, and paramedical staff through clinical demonstrations.",
    ],
  },
  {
    role: "Pediatrics Resident",
    place: "Gandhi Medical College",
    location: "Bhopal, Madhya Pradesh",
    dates: "2018 – 2021",
    highlight: "Residency across NICU, PICU and subspecialty clinics",
    points: [
      "Rotated through NICU and PICU with exposure to high-risk deliveries and neonatal emergencies.",
      "Ran adolescent, neurodevelopment, asthma, hematology, and thalassemia postings.",
      "Performed double-volume exchange transfusion, peritoneal dialysis, and umbilical catheter insertion.",
    ],
  },
];

const achievements = [
  { label: "GMC", text: "UK licensed physician" },
  { label: "MRCPCH", text: "Royal College of Paediatrics and Child Health, UK" },
  { label: "17", text: "MBBS gold medals" },
  { label: "#2", text: "State university MD Paediatrics rank" },
];

const careAreas = [
  {
    icon: Baby,
    title: "Newborn & neonatal care",
    text: "High-risk delivery support, newborn stabilisation, prematurity, neonatal jaundice, respiratory distress, sepsis, and NICU care.",
  },
  {
    icon: Activity,
    title: "Acute paediatric care",
    text: "OPD/IPD care, asthma, nephrotic syndrome, type 1 diabetes, infections, respiratory and neurological presentations.",
  },
  {
    icon: Users,
    title: "Growth & development",
    text: "Developmental milestone assessment, autism, ADHD, cerebral palsy, epilepsy, intellectual disability, and family counselling.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive child health",
    text: "Vaccination, nutrition counselling, growth monitoring, adolescent care, and parent education.",
  },
];

const skills = [
  "Neonatal resuscitation",
  "NICU & PICU care",
  "Paediatric examination",
  "Growth assessment",
  "Developmental assessment",
  "Vaccination",
  "Intubation",
  "Surfactant administration",
  "Umbilical catheterisation",
  "PICC line insertion",
  "NRP trained",
  "PALS & BLS trained",
];

const certifications = [
  "IMPACT: Integrated Module for Pediatric Acute Care Training Pediatric Ventilation",
  "Bayley Scales of Infant and Toddler Development, Third Edition",
  "National Tuberculosis Elimination Workshop",
  "Nurturing Care for Early Childhood Development (NC-ECD)",
];

function SoftCard({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/70 bg-white/75 shadow-xl shadow-slate-200/50 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-teal-800">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function ContactButton({ href, children, primary = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
        primary
          ? "bg-slate-950 text-white shadow-xl shadow-slate-300 hover:bg-slate-800"
          : "border border-slate-200 bg-white text-slate-900 shadow-lg shadow-slate-100 hover:bg-slate-50"
      }`}
    >
      {children}
    </a>
  );
}

export default function AkankshaDubeyWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf7] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-teal-200/35 blur-3xl" />
        <div className="absolute right-[-12rem] top-80 h-[34rem] w-[34rem] rounded-full bg-rose-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-sky-200/35 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#fbfaf7]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3 font-black tracking-tight text-slate-950">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm text-white shadow-lg shadow-slate-300">AD</span>
            <span>Dr. Akanksha Dubey</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#care" className="hover:text-teal-700">Care</a>
            <a href="#journey" className="hover:text-teal-700">Journey</a>
            <a href="#skills" className="hover:text-teal-700">Skills</a>
            <a href="#education" className="hover:text-teal-700">Education</a>
          </div>
          <a href="mailto:akku.ssmc@gmail.com" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800">
            Contact
          </a>
        </div>
      </nav>

      <section id="home" className="relative px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-lg shadow-slate-100">
              <Stethoscope className="h-4 w-4" /> MBBS · MD Paediatrics · MRCPCH (UK) · GMC Licensed
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
              Child health care with clinical depth and a gentle touch.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-650">
              Dr. Akanksha Dubey is a paediatrician trained across NICU, PICU, newborn care, developmental clinics, and general paediatrics — combining strong academic distinction with calm, family-centred care.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactButton href="#journey" primary>
                View clinical journey <ArrowRight className="h-4 w-4" />
              </ContactButton>
              <ContactButton href="mailto:akku.ssmc@gmail.com">
                <Mail className="h-4 w-4" /> Email Dr. Akanksha
              </ContactButton>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-teal-200/70 via-white to-rose-200/70 blur-2xl" />
            <SoftCard className="relative overflow-hidden">
              <div className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 p-8 text-white md:p-10">
                <div className="absolute right-8 top-8 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-50 ring-1 ring-white/15">Paediatrics</div>
                <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white/12 text-5xl font-black ring-1 ring-white/20">AD</div>
                <h2 className="mt-8 text-4xl font-black tracking-tight">Dr. Akanksha Dubey</h2>
                <p className="mt-3 text-lg text-teal-50">Paediatrician · Neonatal & Child Health Care</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {achievements.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/8 p-5">
                      <p className="text-3xl font-black text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-teal-50/90">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
                {[
                  [Hospital, "Hospital care", "NICU, PICU, OPD and IPD"],
                  [Baby, "Newborns", "High-risk delivery support"],
                  [BookOpen, "Teaching", "Students, nurses and staff"],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-3xl bg-slate-50 p-5">
                    <Icon className="h-6 w-6 text-teal-700" />
                    <p className="mt-4 font-black text-slate-950">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </SoftCard>
          </motion.div>
        </div>
      </section>

      <section id="care" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Care focus"
            title="A broad paediatric foundation, from birth through adolescence"
            text="The website now presents her work as a care story — not as a plain résumé — while still preserving the important credentials and clinical depth."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {careAreas.map((area) => (
              <SoftCard key={area.title} className="p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-100/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-teal-50 text-teal-800 ring-1 ring-teal-100">
                  <area.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-7 text-xl font-black text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{area.text}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-200">Professional summary</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Compassionate, academically distinguished, and clinically hands-on.</h2>
            </div>
            <p className="text-lg leading-9 text-slate-200">
              Her work spans neonatal intensive care, paediatric emergencies, outpatient child health, preventive care, developmental assessment, and teaching. She brings the perspective of a gold-medalist physician, MD Paediatrics graduate, MRCPCH member, and GMC-licensed doctor.
            </p>
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Clinical journey"
            title="Experience shaped across hospitals, clinics, and academic medicine"
            text="A timeline format makes her career easier to scan and more visually engaging than a conventional résumé list."
          />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-teal-300 via-slate-200 to-rose-200 md:block" />
            <div className="space-y-7">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.place}-${job.dates}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative md:pl-12"
                >
                  <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-teal-100 md:flex">
                    <span className="h-3 w-3 rounded-full bg-teal-600" />
                  </div>
                  <SoftCard className="overflow-hidden">
                    <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                      <div className="bg-gradient-to-br from-teal-50 to-white p-7 md:p-8">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">{job.dates}</p>
                        <h3 className="mt-4 text-2xl font-black text-slate-950">{job.role}</h3>
                        <p className="mt-2 text-lg font-bold text-slate-700">{job.place}</p>
                        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" /> {job.location}</p>
                        <div className="mt-6 rounded-2xl bg-white/80 p-4 text-sm font-semibold leading-6 text-teal-900 ring-1 ring-teal-100">{job.highlight}</div>
                      </div>
                      <div className="p-7 md:p-8">
                        <ul className="space-y-4">
                          {job.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-7 text-slate-650">
                              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SoftCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Clinical strengths" title="Hands-on skills and child-health expertise" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-sm font-bold text-slate-700 shadow-lg shadow-slate-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <SoftCard className="p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-50 text-sky-800 ring-1 ring-sky-100">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-3xl font-black text-slate-950">Education</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">2018 – 2021</p>
                <h3 className="mt-3 text-xl font-black">M.D. Paediatrics</h3>
                <p className="mt-1 text-slate-600">Gandhi Medical College, Bhopal</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">2012 – 2017</p>
                <h3 className="mt-3 text-xl font-black">MBBS</h3>
                <p className="mt-1 text-slate-600">Shyam Shah Medical College, Rewa</p>
              </div>
            </div>
          </SoftCard>

          <SoftCard className="p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-rose-50 text-rose-800 ring-1 ring-rose-100">
              <Award className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-3xl font-black text-slate-950">Research & certifications</h2>
            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Research thesis</p>
              <p className="mt-3 text-lg font-bold leading-8">Study of electrolyte imbalance in patients admitted in PICU with respiratory and neurological diseases.</p>
            </div>
            <div className="mt-7 space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-100">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                  {cert}
                </div>
              ))}
            </div>
          </SoftCard>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-700 via-slate-950 to-slate-950 text-white shadow-2xl shadow-teal-100">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-teal-200">Contact</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Professional enquiries</h2>
              <p className="mt-5 text-lg leading-8 text-teal-50/90">For observership opportunities, academic communication, or professional enquiries, please reach out by email or phone.</p>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-white/8 p-8 md:p-12">
              <a href="mailto:akku.ssmc@gmail.com" className="inline-flex items-center gap-3 rounded-3xl bg-white px-5 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50">
                <Mail className="h-5 w-5" /> akku.ssmc@gmail.com
              </a>
              <a href="tel:+918809536668" className="inline-flex items-center gap-3 rounded-3xl border border-white/20 px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                <Phone className="h-5 w-5" /> +91 88095 36668
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/50 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dr. Akanksha Dubey · Paediatrician
      </footer>
    </main>
  );
}