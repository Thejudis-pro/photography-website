'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Années d\'Expérience', value: '10+' },
  { label: 'Séances Photos', value: '500+' },
  { label: 'Clients Satisfaits', value: '1000+' },
  { label: 'Prix Gagnés', value: '25+' },
];

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="rounded-full bg-gray-900/10 px-3 py-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-900/10 dark:ring-white/10">
                À Propos de Nous
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Capturer les Beaux Moments de la Vie
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Avec plus d'une décennie d'expérience en photographie professionnelle, nous avons consacré notre vie à
              capturer l'essence des moments spéciaux. Notre passion pour la photographie nous pousse à créer
              des images intemporelles qui racontent votre histoire unique.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Réserver une Séance
              </a>
              <a href="/portfolio" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Voir le Portfolio <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/about-hero.jpg"
                alt="Photographe au travail"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Notre Parcours en Chiffres
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Une décennie de capture de souvenirs et de création d'impressions durables.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col bg-gray-400/5 p-8"
              >
                <dt className="text-sm leading-6 text-gray-600 dark:text-gray-400">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Notre Histoire
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Fondée en 2014, PhotoArt est née d'une simple passion pour la capture des moments précieux de la vie.
            Ce qui a commencé comme un passe-temps s'est transformé en une entreprise photographique florissante qui
            sert des clients du monde entier. Notre parcours a été marqué par un apprentissage continu, l'innovation
            et un engagement inébranlable envers l'excellence.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Nous croyons que chaque photographie raconte une histoire, et nous nous engageons à raconter la vôtre de
            la manière la plus authentique et la plus belle possible. Notre équipe de photographes expérimentés
            combine expertise technique et vision artistique pour créer des images qui seront chéries pour les
            générations à venir.
          </p>
        </div>
      </div>
    </div>
  );
} 