'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Photographie de Mariage',
    description: 'Capturez chaque moment précieux de votre jour J avec notre service de photographie de mariage professionnel.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    price: 'À partir de 750 000 FCFA',
    includes: ['Séance complète', 'Album photo', 'Photos retouchées', 'Galerie en ligne']
  },
  {
    title: 'Photographie Portrait',
    description: 'Des portraits artistiques qui capturent votre personnalité unique et votre essence.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    price: 'À partir de 100 000 FCFA',
    includes: ['Séance 1h', '10 photos retouchées', 'Galerie privée']
  },
  {
    title: 'Photographie d\'Événements',
    description: 'Documentez vos événements spéciaux avec des photos mémorables qui racontent votre histoire.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    price: 'À partir de 250 000 FCFA',
    includes: ['Couverture 4h', 'Photos HD', 'Livraison express']
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
              alt="Image d'en-tête"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-900/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div 
              className="mt-8 sm:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/20">
                Photographie Professionnelle
              </span>
            </motion.div>
            <motion.h1 
              className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Capturer les Beaux Moments de la Vie
            </motion.h1>
            <motion.p 
              className="mt-6 text-base sm:text-lg leading-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Nous sommes passionnés par la création de souvenirs durables à travers notre art photographique.
              Notre équipe de photographes professionnels est là pour immortaliser vos moments les plus précieux.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Réserver une Séance
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/portfolio';
                }}
                className="w-full sm:w-auto text-sm font-semibold leading-6 text-white"
              >
                Voir le Portfolio <span aria-hidden="true">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            À Propos de Nous
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Depuis 2014, nous capturons les moments les plus précieux de la vie de nos clients.
            Notre passion pour la photographie et notre engagement envers l'excellence nous permettent
            de créer des souvenirs durables qui racontent votre histoire.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {[
            { title: 'Années d\'Expérience', value: '10+' },
            { title: 'Clients Satisfaits', value: '500+' },
            { title: 'Photos Capturées', value: '10k+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.h3>
              <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nos Services Spécialisés
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Découvrez notre gamme complète de services photographiques, conçus pour répondre à tous vos besoins.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative w-full aspect-[16/9]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="bg-gray-100 object-cover"
                />
              </motion.div>
              <div className="p-6 flex flex-col items-center flex-1 w-full">
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="mt-4 text-base sm:text-lg leading-6 text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  className="mt-6 text-2xl font-bold text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.price}
                </motion.div>
                <motion.ul 
                  className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {service.includes.map((item, i) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div 
                  className="mt-8 w-full flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full rounded-md bg-gray-900 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-gray-700 dark:hover:bg-gray-100"
                  >
                    Réserver Maintenant
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/portfolio';
                    }}
                    className="w-full rounded-md bg-white dark:bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Voir le Portfolio
                  </motion.button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notre Portfolio
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Découvrez notre collection de moments capturés, témoignant de notre passion pour la photographie.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {[
            {
              image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
              title: 'Mariage',
              category: 'Événementiel'
            },
            {
              image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
              title: 'Portrait',
              category: 'Portrait'
            },
            {
              image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
              title: 'Événement',
              category: 'Événementiel'
            }
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-white p-4"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ce que Disent Nos Clients
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Découvrez les témoignages de nos clients satisfaits qui nous ont fait confiance pour leurs moments spéciaux.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {[
            {
              content: 'Les photos de mariage sont absolument magnifiques !',
              author: 'Marie Laurent',
              role: 'Cliente Mariage',
            },
            {
              content: 'Professionnel, créatif et incroyablement talentueux.',
              author: 'Pierre Dubois',
              role: 'Client Portrait',
            },
            {
              content: 'Le dévouement de l\'équipe pour capturer le cliché parfait est remarquable.',
              author: 'Sophie Martin',
              role: 'Cliente Événement',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative h-16 w-16 rounded-full overflow-hidden mb-4 sm:mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.p 
                className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400 text-center mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "{testimonial.content}"
              </motion.p>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base sm:text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                  {testimonial.author}
                </h3>
                <p className="text-sm sm:text-base leading-6 text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
            Vous avez une question ou souhaitez réserver une séance ? Nous aimerions avoir de vos nouvelles.
          </p>
        </motion.div>
        <motion.form 
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              service: formData.get('service'),
              message: formData.get('message'),
            };

            // Afficher l'état de chargement
            const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });

              if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
              }

              // Afficher le message de succès
              const successMessage = document.getElementById('success-message');
              if (successMessage) {
                successMessage.classList.remove('hidden');
                setTimeout(() => {
                  successMessage.classList.add('hidden');
                }, 5000);
              }

              // Réinitialiser le formulaire
              form.reset();
            } catch (error) {
              // Afficher le message d'erreur
              const errorMessage = document.getElementById('error-message');
              if (errorMessage) {
                errorMessage.classList.remove('hidden');
                setTimeout(() => {
                  errorMessage.classList.add('hidden');
                }, 5000);
              }
            } finally {
              // Restaurer le bouton
              submitButton.disabled = false;
              submitButton.textContent = originalText;
            }
          }}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:bg-gray-800 dark:focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:bg-gray-800 dark:focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Téléphone
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:bg-gray-800 dark:focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="service"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Service
              </label>
              <div className="mt-2.5">
                <select
                  name="service"
                  id="service"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:bg-gray-800 dark:focus:ring-gray-500 sm:text-sm sm:leading-6"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
            <motion.div 
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:bg-gray-800 dark:focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div 
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Envoyer le Message
              </motion.button>
            </motion.div>
          </div>
        </motion.form>

        {/* Messages de succès et d'erreur */}
        <motion.div 
          id="success-message" 
          className="hidden mt-4 p-4 rounded-md bg-green-50 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </motion.div>
        <motion.div 
          id="error-message" 
          className="hidden mt-4 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
        </motion.div>
      </motion.section>
    </div>
  );
}