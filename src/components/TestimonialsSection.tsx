import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ilia Topuria',
    role: 'Sons of Mayhem',
    avatar: '🏍️',
    rating: 5,
    text: 'Gee City ist ein Top Mid Core Server, mit tollen Spielern und noch besseren Admins. Sie kümmern sich um alles in kürzester Zeit und geben allen ein Familiäres Gefühl. Macht weiter so !!!'
  },
  {
    name: 'Ava',
    role: 'Tätowiererin',
    avatar: '🪡',
    rating: 5,
    text: 'Ich bin vor gut 2 Monaten auf den Server als kompletter Anfänger gekommen mit meiner besten Freundin. Schnell haben wir uns wohl gefühlt und es war klar, wir bleiben hier. So familiäres und klasse RP hat uns einfach festgehalten.Es war einfach nie langweilig. Von Anfang an wurden wir begleitet und in die Rp-Welt bestens eingeführt. TOP!'
  },
  {
    name: 'Linda Hannjo',
    role: 'Polizistin',
    avatar: '👮‍♂️',
    rating: 5,
    text: 'Als RP-Neuling hätte ich mir keinen besseren Server wünschen können – liebevoll, hilfsbereit und voller Herzblut. Die Community ist großartig, der Einstieg wurde mir leicht gemacht, und ich fühle mich rundum willkommen. Nach zwei Monaten bin ich einfach nur begeistert'
  },
  {
    name: 'Paul Mirov',
    role: 'PD, Gentlemens Club',
    avatar: '👮‍♂️🥃',
    rating: 5,
    text: 'Ich war schon auf so vielen Servern und keiner hat mir bis jetzt so gut gefallen wie GeeCity. Die Leute und das Team sind einfach der Hammer und auch bei wenig Leuten kann man jeden Tag etwas Neues erleben. Ich hoffe das GeeCity noch richtig groß wird, mit euch als Team bringen wir GeeCity auf die 1!'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Was unsere Community sagt
            <span className="text-neon-red animate-pulse"> 💬</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
            Echte Erfahrungen von echten Spielern
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-red to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card interactive-glow group p-6 relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-neon-red transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="font-rajdhani text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="font-rajdhani text-gray-300 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </blockquote>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;