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
} from "lucide-react";
import "./index.css";

const experience = [
  {
    role: "Paediatrician",
    place: "Cloudnine Hospital",
    location: "Gurgaon, Haryana",
    dates: "Sept 2024 – May 2025",
    points: [
      "Practised in a tertiary maternity and neonatal care setting.",
      "Managed OPD and IPD paediatric cases, attended high-risk deliveries, and provided neonatal resuscitation and stabilisation.",
      "Collaborated with neonatology, obstetrics, and emergency teams to deliver comprehensive newborn and paediatric care.",
    ],
  },
  {
    role: "Paediatrician",
    place: "Private Practice",
    location: "Rewa, Madhya Pradesh",
    dates: "Sept 2023 – Sept 2024",
    points: [
      "Successfully ran a private paediatric clinic.",
      "Provided care from birth to adolescence, including routine check-ups, immunisations, and treatment of acute and chronic illnesses.",
      "Served as a visiting doctor at Apollo Hospital Rewa for deliveries and emergency NICU care.",
    ],
  },
  {
    role: "Senior Resident, Paediatrics",
    place: "Shyam Shah Medical College",
    location: "Rewa, Madhya Pradesh",
    dates: "Sept 2021 – Aug 2023",
    points: [
      "Managed complex paediatric and neonatal cases including asthma, nephrotic syndrome, type 1 diabetes, prematurity, neonatal jaundice, RDS, MAS, and septicemia.",
      "Performed intubations, ABG analysis, ventilator management, and newborn resuscitation.",
      "Independently ran REIC OPD and managed neurodevelopmental cases including autism, ADHD, cerebral palsy, epilepsy, and intellectual disability.",
      "Trained MBBS students, nurses, and paramedical staff through clinical demonstrations and multimedia teaching sessions.",
    ],
  },
  {
    role: "Pediatrics Resident",
    place: "Gandhi Medical College",
    location: "Bhopal, Madhya Pradesh",
    dates: "July 2018 – Aug 2021",
    points: [
      "Rotated through NICU and PICU with experience in neonatal resuscitation and high-risk deliveries.",
      "Ran adolescent, neurodevelopment, asthma, hematology, and thalassemia clinical postings.",
      "Performed double-volume exchange transfusion, peritoneal dialysis, and umbilical catheter insertion.",
      "Provided vaccination, nutrition advice, follow-up care, anthropometric assessment, and developmental milestone evaluation.",
    ],
  },
];

const achievements = [
  "GMC (UK) Licensed",
  "Ordinary Member, Royal College of Paediatrics and Child Health (MRCPCH), UK",
  "Gold medalist in MBBS with 17 gold medals",
  "2nd rank in state university MD Paediatrics exam",
  "Prize in paper presentation at MP Pedicon 2021",
  "IAP Quiz runner-up in Central Zone ECon",
  "Certified in neonatal ventilation by Medtrain",
];

const skills = [
  "Pediatric & neonatal examination",
  "Growth and developmental assessment",
  "Vaccination and preventive care",
  "NRP, PALS and BLS trained",
  "Neonatal resuscitation",
  "Intubation",
  "Surfactant administration",
  "Umbilical catheterisation",
  "PICC line insertion",
  "NICU and PICU care",
];

const certifications = [
  "IMPACT: Integrated Module for Pediatric Acute Care Training Pediatric Ventilation",
  "Bayley Scales of Infant and Toddler Development, Third Edition",
  "National Tuberculosis Elimination Workshop",
  "Nurturing Care for Early Childhood Development (NC-ECD)",
];

function Button({ children, href, variant = "primary" }) {
  const cls =
    variant === "primary"
      ? "bg-sky-700 text-white hover:bg-sky-800"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition ${cls}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-sky-100 bg-white/85 shadow-lg shadow-sky-50 ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{children}</span>;
}

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-rose-50 text-slate-900">
      <nav className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-slate-950">Dr. Akanksha Dubey</a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#experience" className="hover:text-sky-700">Experience</a>
            <a href="#skills" className="hover:text-sky-700">Skills</a>
            <a href="#education" className="hover:text-sky-700">Education</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
          <a href="mailto:akku.ssmc@gmail.com" className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">Contact</a>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-8 top-40 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
              <Stethoscope className="h-4 w-4" /> MBBS · MD Paediatrics · MRCPCH (UK)
            </div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              Compassionate paediatric care for newborns, children, and adolescents.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Dr. Akanksha Dubey is a dedicated paediatrician with extensive experience in neonatal care, paediatric OPD/IPD management, NICU and PICU practice, developmental assessment, vaccination, and family-centred clinical care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#experience">View Experience</Button>
              <Button href="mailto:akku.ssmc@gmail.com" variant="secondary">Email Dr. Akanksha</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>GMC UK Licensed</Pill>
              <Pill>MRCPCH UK</Pill>
              <Pill>17 MBBS Gold Medals</Pill>
              <Pill>NICU & PICU Experience</Pill>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Card className="overflow-hidden rounded-[2rem] border-0 shadow-2xl">
              <div className="bg-gradient-to-br from-sky-700 to-slate-950 p-8 text-white">
                <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-4xl font-bold ring-1 ring-white/30">AD</div>
                <h3 className="text-3xl font-bold">Dr. Akanksha Dubey</h3>
                <p className="mt-2 text-sky-100">Paediatrician · Neonatal & Child Health Care</p>
              </div>
              <div className="space-y-5 p-8">
                {[
                  [BriefcaseMedical, "Clinical Focus", "Neonates, infants, children, adolescents, developmental assessment, acute care, and preventive paediatrics."],
                  [Award, "Academic Distinction", "Gold medalist in MBBS and 2nd rank in state university MD Paediatrics examination."],
                  [HeartPulse, "Hands-on Paediatric Care", "Experience with resuscitation, ventilation, intubation, NICU/PICU care, and paediatric procedures."],
                ].map(([Icon, title, text]) => (
                  <div className="flex items-start gap-4" key={title}>
                    <Icon className="mt-1 h-5 w-5 text-sky-700" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="About"
            title="Patient-centred paediatrics with strong neonatal and developmental care experience"
            description="Dr. Akanksha combines clinical training, academic excellence, and practical experience across tertiary hospitals, medical colleges, NICU/PICU settings, private practice, and community-focused child health care."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Baby, title: "Neonatal Care", text: "High-risk deliveries, newborn resuscitation, stabilization, premature baby care, neonatal jaundice, RDS, MAS, and septicemia management." },
              { icon: ShieldCheck, title: "Preventive Paediatrics", text: "Vaccination, growth monitoring, developmental milestones, nutrition advice, family counselling, and disease prevention." },
              { icon: BookOpen, title: "Teaching & Training", text: "Clinical classes and demonstrations for MBBS students, nurses, and paramedical staff, including newborn care training." },
            ].map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <item.icon className="mb-5 h-9 w-9 text-sky-700" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Accomplishments" title="Recognised clinical and academic excellence" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div key={achievement} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <p className="text-sm leading-6 text-slate-100">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Experience" title="Clinical experience across tertiary hospitals, medical colleges, NICU/PICU, and private practice" />
          <div className="mt-14 space-y-6">
            {experience.map((job) => (
              <Card key={`${job.place}-${job.dates}`}>
                <div className="grid gap-6 p-7 md:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{job.dates}</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950">{job.role}</h3>
                    <p className="mt-2 font-semibold text-slate-700">{job.place}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" /> {job.location}</p>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Skills" title="Core clinical skills" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}
          </div>
        </div>
      </section>

      <section id="education" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card>
            <div className="p-8">
              <GraduationCap className="mb-5 h-10 w-10 text-sky-700" />
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-sky-200 pl-5">
                  <h3 className="text-xl font-bold">M.D. Paediatrics</h3>
                  <p className="mt-1 text-slate-600">Gandhi Medical College, Bhopal</p>
                  <p className="mt-1 text-sm text-slate-500">May 2018 – Aug 2021</p>
                </div>
                <div className="border-l-4 border-sky-200 pl-5">
                  <h3 className="text-xl font-bold">Bachelor of Medicine, Bachelor of Surgery (MBBS)</h3>
                  <p className="mt-1 text-slate-600">Shyam Shah Medical College, Rewa</p>
                  <p className="mt-1 text-sm text-slate-500">July 2012 – Mar 2017</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <Award className="mb-5 h-10 w-10 text-sky-700" />
              <h2 className="text-3xl font-bold">Certifications & Research</h2>
              <div className="mt-8">
                <h3 className="font-bold text-slate-950">Research Thesis</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Study of electrolyte imbalance in patients admitted in PICU with respiratory and neurological diseases.</p>
              </div>
              <div className="mt-8 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-sky-700 to-slate-950 p-8 text-center text-white shadow-2xl shadow-sky-100 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sky-100">For professional enquiries, clinical observership opportunities, or academic collaboration, please contact Dr. Akanksha Dubey.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:akku.ssmc@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-sky-50">
              <Mail className="h-5 w-5" /> akku.ssmc@gmail.com
            </a>
            <a href="tel:+918809536668" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">
              <Phone className="h-5 w-5" /> +91 88095 36668
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-sky-100 bg-white/70 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dr. Akanksha Dubey. All rights reserved.
      </footer>
    </main>
  );
}
