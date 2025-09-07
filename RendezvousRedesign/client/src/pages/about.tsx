import { motion } from "framer-motion";
import GlassCard from "@/components/glass-card";
// Placeholder images - replace with actual images
const nurseImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=faces";
const medicalDocImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop";
import { 
  UserCheck, 
  Shield, 
  GraduationCap, 
  Users, 
  Award, 
  Heart,
  Home as HomeIcon,
  Brain,
  CheckCircle,
  Star,
  Clock,
  Phone,
  Clipboard,
  HandHeart,
  Pill,
  Activity,
  MapPin,
  FileText
} from "lucide-react";

const About = () => {
  const staffQualities = [
    { icon: UserCheck, label: "Directly Employed", description: "All carers employed directly by us" },
    { icon: Shield, label: "Background Checked", description: "Thorough background checks on all staff" },
    { icon: GraduationCap, label: "Expertly Trained", description: "Comprehensive training and ongoing development" },
    { icon: Users, label: "Constantly Supported", description: "Regular supervision and support for all staff" },
    { icon: Award, label: "Fully Regulated", description: "CQC regulated and monitored service" },
    { icon: Heart, label: "Selectively Recruited", description: "Chosen for kindness and compassion" }
  ];

  const homeCareBenefits = [
    {
      icon: UserCheck,
      title: "One-to-one Care",
      description: "Personal support from your own carer with undivided attention"
    },
    {
      icon: HomeIcon,
      title: "Familiar Environment",
      description: "Remain in the comfortable surroundings of your own home"
    },
    {
      icon: Heart,
      title: "Personalised Support",
      description: "Tailored support plan for your individual needs and activities"
    },
    {
      icon: Activity,
      title: "Maintain Routines",
      description: "Continue with your favorite activities from board games to shopping"
    },
    {
      icon: Users,
      title: "Family Time",
      description: "Spend quality time with family and friends in your home or theirs"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Approach",
      description: "Every aspect of your support needs included in your care package"
    }
  ];

  const supportServices = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Dignified support with personal care tasks including non-intimate washing and emollient application"
    },
    {
      icon: HomeIcon,
      title: "Housework Support",
      description: "Assistance with household chores and maintaining a comfortable living environment"
    },
    {
      icon: Activity,
      title: "Mobility Support",
      description: "Help getting in and out of bed, moving around your home, and short walks"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert support with prescription management, collection, and supervised administration"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Accompaniment for shopping, visiting family and friends, and social engagements"
    },
    {
      icon: Brain,
      title: "Mental Health Specialist Care",
      description: "Specialized support for various mental health conditions with experienced staff"
    }
  ];

  const whenToConsider = [
    "Struggling with otherwise 'normal' routines",
    "Unwilling to move to a care home",
    "Feeling lonely or isolated",
    "Living with a mental health condition",
    "Needing help in the community"
  ];

  const mentalHealthConditions = [
    "Depression",
    "Anxiety disorders", 
    "Obsessive-compulsive disorder",
    "Schizophrenia",
    "Complex mental health conditions"
  ];

  const whyNotAgency = [
    { title: "All carers employed directly", description: "Not agency workers" },
    { title: "No hidden fees", description: "Transparent pricing structure" },
    { title: "CQC regulated care service", description: "Independently monitored quality" },
    { title: "Carer job security", description: "Stable employment for consistent care" }
  ];

  const arrangeSteps = [
    {
      step: "1",
      title: "Speak to Our Team", 
      description: "Call our team to talk through your options and any questions you may have about our services."
    },
    {
      step: "2",
      title: "Assessment of Care Needs",
      description: "Our specialist health needs assessor will visit you to discuss your requirements and learn about the type of support that best fits your needs."
    },
    {
      step: "3", 
      title: "Identify Right Support Worker",
      description: "We will identify the right support worker that is trained to meet your specific needs and preferences."
    }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      <section className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text" data-testid="about-title">
                About Rendezvous Care
              </h1>
              <p className="text-2xl text-muted-foreground mb-4">
                Nurturing Mental Well-being for 25 Years in West Sussex
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Rendezvous Care Services is a distinguished domiciliary care provider that has been dedicated to supporting individuals with mental health illnesses for the past 25 years. Operating in the heart of West Sussex, our commitment to compassionate care has earned us a stellar reputation as a trusted partner in promoting mental well-being.
              </p>
            </GlassCard>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="story-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Since 1998, our dedicated domiciliary care team has helped adults of working age with mental conditions to maintain their independence. For over 25 years, we've supported adults with mental health conditions in West Sussex maintaining their independence and supported them in their community.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Covering the western regions of West Sussex, we've been the domiciliary care provider of choice to many families for almost three decades.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">Independently Regulated</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every aspect of our care activity is independently regulated and monitored by the Care Quality Commission. We only hire carers to our teams who are naturally kind and compassionate, ensuring you receive care from someone competent with the necessary skills to support your overall well-being.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative">
                    <img 
                      src={nurseImage} 
                      alt="Professional nurse providing compassionate care to elderly patient"
                      className="rounded-2xl shadow-2xl w-full max-w-sm object-cover glass-card"
                      style={{ aspectRatio: '4/3' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="mission-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Mission & Values</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  At Rendezvous Care Services, our mission is simple yet profound – to enhance the quality of life for individuals coping with mental health challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in providing personalized, dignified, and client-centered care that empowers each individual on their unique journey towards recovery and stability. Our team is driven by values of empathy, respect, and a genuine commitment to fostering a nurturing environment.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* What is Domiciliary Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="domiciliary-care-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">What is Domiciliary Care?</h2>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Domiciliary care is a support option that lets you receive personalised care in your own home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Also known as 'care at home', domiciliary care gives you the opportunity to receive expert support in your own home. The package of care required will be individualised based on a thorough specialist assessment of needs – every individual will have their own package of care needs, which makes it important to have full flexibility over the support you receive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {homeCareBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
                      data-testid={`benefit-${index}`}
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="text-primary" size={32} />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="services-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">How Can a Carer Support Me at Home?</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                At RCS, we've got over 25 years' experience in providing transformative domiciliary care to customers in West Sussex. Our domiciliary care offers the support, reassurance, and companionship that may be needed for you to continue living independently at home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard hover className="p-8 h-full" data-testid={`service-card-${index}`}>
                        <motion.div 
                          className={`w-16 h-16 bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 rounded-2xl flex items-center justify-center mb-6`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className={`text-${index % 2 === 0 ? 'primary' : 'secondary'}`} size={32} />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Staff Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="staff-quality-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">What Makes Our Support Workers Exceptional</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
                We're very proud of our exceptional support workers who are always going above and beyond to ensure every customer receives the brilliant support that they deserve. Our workforce is what makes Rendezvous Care a brilliant domiciliary care employer and we are continuously trying to keep their credentials in check at all times.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffQualities.map((quality, index) => {
                  const Icon = quality.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      data-testid={`quality-${index}`}
                    >
                      <GlassCard className="p-8 h-full">
                        <motion.div 
                          className={`w-20 h-20 bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className={`text-${index % 2 === 0 ? 'primary' : 'secondary'}`} size={32} />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-3">{quality.label}</h3>
                        <p className="text-sm text-muted-foreground">{quality.description}</p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* When to Consider Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="when-consider-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">How Do I Know When I Need Support and Care?</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-4xl mx-auto">
                The aim of domiciliary care is to maintain independent living that you are used to. There is no set time, health condition or diagnosis to consider help at home from a professional domiciliary care provider. It is just that moment in time when you feel that you need extra support to carry out your daily tasks and maintain your day to day comfort.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">You may wish to explore domiciliary care support when:</h3>
                  <div className="space-y-4">
                    {whenToConsider.map((reason, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <CheckCircle className="text-primary flex-shrink-0" size={24} />
                        <span className="text-muted-foreground">{reason}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Mental Health Conditions We Support:</h3>
                  <div className="space-y-4">
                    {mentalHealthConditions.map((condition, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Brain className="text-secondary flex-shrink-0" size={24} />
                        <span className="text-muted-foreground">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Our Approach to Mental Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="approach-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Approach to Mental Health Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      <Heart className="text-primary" size={24} />
                      Person-Centered Care
                    </h3>
                    <p className="text-muted-foreground">We understand mental illness can affect people in different ways, with various different challenges. At Rendezvous Care, our mental health care is always person-centered.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      <Users className="text-secondary" size={24} />
                      Good Listeners
                    </h3>
                    <p className="text-muted-foreground">When you're living with a mental health condition, open communication is key. We encourage regular feedback and reviews with individuals, their family and their support network.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      <CheckCircle className="text-primary" size={24} />
                      Tailored to Your Needs
                    </h3>
                    <p className="text-muted-foreground">We know that your independence is important, so our staff will work around your routine to deliver personalised care. Our home care packages are completely flexible.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      <Award className="text-secondary" size={24} />
                      Experienced Provider
                    </h3>
                    <p className="text-muted-foreground">When you partner with Rendezvous Care for domiciliary care, you're choosing a care provider with over 25 years' experience in providing specialist support in West Sussex.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Why We're NOT a Care Agency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="not-agency-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">We are NOT a Care Agency</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
                We are well known as one of the respected domiciliary care providers in West Sussex, and the reason for that is because we're a private care provider, rather than a care agency. This means you'll get certain guarantees from us that many care agencies don't provide:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyNotAgency.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* How to Arrange Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="arrange-care-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">How to Arrange Care or Request an Assessment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {arrangeSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <GlassCard className="p-8 text-center h-full" data-testid={`arrange-step-${index}`}>
                      <motion.div 
                        className={`w-16 h-16 bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className={`text-${index % 2 === 0 ? 'primary' : 'secondary'} font-bold text-2xl`}>
                          {step.step}
                        </span>
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* CQC Regulation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-12" data-testid="cqc-section">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Fully Regulated by the Care Quality Commission (CQC)</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <motion.div 
                  className="flex justify-center lg:order-1"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative">
                    <img 
                      src={medicalDocImage} 
                      alt="Professional medical documentation and heart rate monitoring equipment"
                      className="rounded-2xl shadow-2xl w-full max-w-sm object-cover glass-card"
                      style={{ aspectRatio: '4/3' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </motion.div>
                <div className="lg:col-span-2 lg:order-2">
                  <div className="max-w-4xl">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      At RCS, our domiciliary care service is fully managed and regulated by the Care Quality Commission (CQC).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      From your first contact with RCS and our enthusiastic team, every aspect of your domiciliary care service is monitored and regulated by the CQC. You have the peace of mind that your care is approved by the health and social care regulatory body.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This is a guarantee that we will always uphold the care standards required. Our comprehensive documentation and monitoring systems ensure complete transparency and accountability in all aspects of our care delivery.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Looking Forward */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <GlassCard className="p-12" data-testid="future-section">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Looking Forward</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                As we celebrate our 25th anniversary, we look back with pride at the lives we've touched and forward with a renewed commitment to excellence. Rendezvous Care Services remains steadfast in its dedication to being a beacon of hope for those navigating the complexities of mental health.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;