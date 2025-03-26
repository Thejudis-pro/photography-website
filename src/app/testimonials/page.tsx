'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content:
      "Les photos de mariage sont absolument magnifiques ! Ils ont capturé chaque moment spécial à la perfection. L'attention aux détails et la créativité sont exceptionnelles.",
    author: {
      name: 'Sarah Johnson',
      role: 'Cliente Mariage',
      image: '/testimonials/sarah.jpg',
    },
  },
  {
    content:
      "Professionnel, créatif et incroyablement talentueux. Nos portraits de famille ont dépassé toutes nos attentes.",
    author: {
      name: 'Michael Chen',
      role: 'Client Portrait Familial',
      image: '/testimonials/michael.jpg',
    },
  },
  {
    content:
      "Le dévouement de l'équipe pour capturer le cliché parfait est remarquable. Ils ont rendu nos photos d'événement d'entreprise magnifiques.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Cliente Entreprise',
      image: '/testimonials/emily.jpg',
    },
  },
  {
    content:
      "Service exceptionnel du début à la fin. Les photos de fiançailles sont magnifiques et exactement ce que nous recherchions.",
    author: {
      name: 'David et Lisa Thompson',
      role: 'Clients Séance Fiançailles',
      image: '/testimonials/david-lisa.jpg',
    },
  },
];

const featuredWork = [
  {
    title: 'Magie du Jour J',
    description: 'Capturer la joie et l\'amour d\'une belle cérémonie de mariage',
    image: '/testimonials/wedding-featured.jpg',
  },
  {
    title: 'Moments en Famille',
    description: 'Préserver les précieux souvenirs familiaux pour les générations futures',
    image: '/testimonials/family-featured.jpg',
  },
  {
    title: 'Excellence Corporate',
    description: 'Photographie professionnelle pour événements d\'entreprise et marque',
    image: '/testimonials/corporate-featured.jpg',
  },
];

export default function Testimonials() {
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
                Témoignages Clients
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Ce que Disent Nos Clients
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Découvrez ce que nos clients disent de leur expérience avec nous. Nous sommes fiers d'avoir
              contribué à capturer leurs moments spéciaux.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
            Avis Clients
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
                  <svg
                    className="absolute -top-4 left-4 h-8 w-8 text-gray-200 dark:text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-400">
                    {testimonial.content}
                  </p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {testimonial.author.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Travaux en Vedette
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Découvrez certains de nos travaux récents que nos clients adorent.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredWork.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={2432}
                  height={1442}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                    <span className="absolute inset-0" />
                    {work.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 