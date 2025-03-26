'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 'wedding',
    title: 'Photographie de Mariage',
    description:
      'Capturez chaque moment précieux de votre jour J avec nos forfaits complets de photographie de mariage.',
    features: [
      'Couverture complète de la journée',
      'Second photographe',
      'Séance de fiançailles',
      'Galerie en ligne',
      'Images haute résolution',
      'Album de mariage',
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'portrait',
    title: 'Photographie Portrait',
    description:
      'Séances portrait professionnelles pour particuliers, familles et occasions spéciales.',
    features: [
      'Séance d\'1 heure',
      'Plusieurs changements de tenues',
      'Retouche professionnelle',
      'Livraison numérique',
      'Options d\'impression',
      'Galerie en ligne',
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'event',
    title: 'Photographie d\'Événements',
    description:
      'Couverture complète pour événements d\'entreprise, fêtes et occasions spéciales.',
    features: [
      'Couverture de l\'événement',
      'Moments spontanés',
      'Photos de groupe',
      'Délai rapide',
      'Livraison numérique',
      'Prêt pour les réseaux sociaux',
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    title: 'Photographie Commerciale',
    description:
      'Services photographiques professionnels pour entreprises, produits et supports marketing.',
    features: [
      'Photographie de produits',
      'Photos d\'entreprise',
      'Photographie de marque',
      'Licence commerciale',
      'Fichiers haute résolution',
      'Livraison rapide',
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  },
];

const pricing = [
  {
    name: 'Basique',
    price: '299€',
    description: 'Parfait pour les petits événements et séances portrait basiques',
    features: [
      'Séance de 2 heures',
      '50 photos retouchées',
      'Livraison numérique',
      'Galerie en ligne',
      'Retouche basique',
    ],
  },
  {
    name: 'Standard',
    price: '499€',
    description: 'Idéal pour la plupart des séances portrait et petits événements',
    features: [
      'Séance de 4 heures',
      '100 photos retouchées',
      'Livraison numérique',
      'Galerie en ligne',
      'Retouche avancée',
      'Droits d\'impression',
    ],
  },
  {
    name: 'Premium',
    price: '799€',
    description: 'Couverture complète pour mariages et grands événements',
    features: [
      'Couverture complète de la journée',
      'Second photographe',
      '200+ photos retouchées',
      'Livraison numérique',
      'Galerie en ligne',
      'Retouche professionnelle',
      'Droits d\'impression',
      'Album photo',
    ],
  },
];

export default function Services() {
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
                Nos Services
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Services Photographiques Professionnels
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Des portraits intimes aux grands événements, nous proposons une large gamme de services photographiques pour
              capturer vos moments spéciaux. Choisissez le forfait parfait pour vos besoins.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Découvrez notre gamme complète de services photographiques conçus pour répondre à vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={2432}
                  height={1442}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    {service.title}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                    <span className="absolute inset-0" />
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tarifs Simples et Transparents
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Choisissez le forfait parfait pour vos besoins photographiques. Tous les forfaits incluent le retraitement
            professionnel et la livraison numérique.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {pricing.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                    /séance
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/contact"
                className="mt-8 block rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Réserver
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 