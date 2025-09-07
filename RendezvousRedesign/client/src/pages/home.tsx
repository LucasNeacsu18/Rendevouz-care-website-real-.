import { motion } from "framer-motion";
import { Link } from "wouter";
import GlassCard from "@/components/glass-card";
const logoImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop";
import { 
  Heart, 
  Home as HomeIcon, 
  Pill, 
  Users, 
  Brain, 
  Shield, 
  UserCheck, 
  GraduationCap, 
  Clock,
  ArrowRight,
  Phone
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Dignified support with personal care tasks including non-intimate washing and emollient application.",
      color: "primary"
    },
    {
      icon: HomeIcon,
      title: "Housework Support",
      description: "Assistance with household chores and maintaining a comfortable living environment.",
      color: "secondary"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert support with prescription management, collection, and supervised administration.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Mobility Support",
      description: "Help with movement around your home and accompaniment on short walks.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Accompaniment for shopping, social visits, and community engagements.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Mental Health Focus",
      description: "Specialized support for adults with mental health conditions in West Sussex.",
      color: "secondary"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Independently Regulated",
      description: "Every aspect of our care activity is independently regulated and monitored by the Care Quality Commission."
    },
    {
      icon: UserCheck,
      title: "Directly Employed Staff",
      description: "All our carers are directly employed, background checked, and receive comprehensive training and ongoing support."
    },
    {
      icon: GraduationCap,
      title: "Expertly Trained",
      description: "Our staff receive induction training, regular refresher courses, and work supernumerary for at least two weeks."
    },
    {
      icon: Heart,
      title: "Naturally Compassionate",
      description: "We only hire carers who are naturally kind, compassionate, and have the emotional intelligence to provide excellent care."
    },
    {
      icon: UserCheck,
      title: "Person-Centered Care",
      description: "Our care is always tailored to your individual needs, maintaining your independence and working around your routine."
    },
    {
      icon: Clock,
      title: "Flexible Support",
      description: "Our home care packages are completely flexible, with staff visiting as often as you need without affecting your schedule."
    }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-6 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img 
                src={logoImage} 
                alt="Rendezvous Care Logo" 
                className="h-24 w-24 object-contain logo-transparent"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <motion.h1 
                className="text-6xl md:text-7xl font-bold hero-text"
                data-testid="hero-title"
              >
                Rendezvous Care
              </motion.h1>
            </motion.div>
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Domiciliary Care Services
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Supporting people with mental health illness since 1998
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/about">
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-learn-more"
                >
                  Learn More <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="glass-card px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-contact"
                >
                  Get In Touch <Phone size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "25+", label: "Years of Experience" },
              { value: "CQC", label: "Regulated & Monitored" },
              { value: "100%", label: "Direct Employment" },
              { value: "Good", label: "CQC Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -5, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, 1, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.2 * (index + 1) },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.5 },
                  rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.5 },
                  rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.5 }
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="services-title">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive domiciliary care tailored to your individual needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard hover className="p-8" data-testid={`service-card-${index}`}>
                    <motion.div 
                      className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`text-2xl text-${service.color}`} size={32} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="features-title">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-8 flex items-start space-x-4" data-testid={`feature-card-${index}`}>
                    <motion.div 
                      className={`w-12 h-12 bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`text-${index % 2 === 0 ? 'primary' : 'secondary'}`} size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
