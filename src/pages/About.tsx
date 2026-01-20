import { Users, Award, Globe, Heart, Shield, Sparkles, MapPin, Calendar } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        About Travelalot
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Making Dream Vacations
                        <span className="block text-blue-600 mt-2">A Reality</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Since 2015, we've been helping travelers explore the world with confidence,
                        offering curated experiences and personalized service that turns every journey
                        into an unforgettable adventure.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, value: '500K+', label: 'Happy Travelers' },
                            { icon: MapPin, value: '150+', label: 'Destinations' },
                            { icon: Calendar, value: '10+', label: 'Years Experience' },
                            { icon: Award, value: '50+', label: 'Awards Won' }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Travelalot was born from a simple belief: travel should be accessible,
                                    enjoyable, and transformative for everyone. What started as a small team
                                    of passionate travel enthusiasts has grown into one of the most trusted
                                    names in the travel industry.
                                </p>
                                <p>
                                    We understand that every traveler is unique, with different dreams,
                                    budgets, and preferences. That's why we've built a platform that caters
                                    to all kinds of journeys—from budget backpacking adventures to luxury
                                    getaways, from solo expeditions to family vacations.
                                </p>
                                <p>
                                    Today, we're proud to serve over half a million travelers annually,
                                    helping them discover new cultures, create lasting memories, and see
                                    the world in ways they never imagined.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop"
                                    alt="Travel team"
                                    className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do and every journey we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: 'Passion for Travel',
                                description: 'We live and breathe travel. Our team consists of experienced travelers who understand the joy and transformative power of exploring new places.'
                            },
                            {
                                icon: Shield,
                                title: 'Trust & Safety',
                                description: 'Your safety and peace of mind are paramount. We partner only with verified providers and offer 24/7 support throughout your journey.'
                            },
                            {
                                icon: Globe,
                                title: 'Sustainable Tourism',
                                description: 'We believe in responsible travel that respects local cultures and preserves the environment for future generations to enjoy.'
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
                                    <value.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-10 text-white">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-blue-50 leading-relaxed">
                                To inspire and enable people to explore the world by providing exceptional
                                travel experiences, expert guidance, and unbeatable value. We exist to make
                                travel planning effortless and every journey extraordinary.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-10 text-white">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-purple-50 leading-relaxed">
                                To become the world's most trusted travel companion, connecting millions of
                                travelers with authentic experiences and creating a global community united
                                by the shared love of exploration and discovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Passionate travelers and industry experts dedicated to making your journey perfect
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            { name: 'Aelbert Cheong', role: 'Founder & CEO', image: 'https://github.com/aelberthcheong.png' },
                            { name: 'Fendy', role: 'Head of Operations', image: 'https://github.com/fendygg2.png' },
                            { name: 'Sean Ryo Valens', role: 'Customer Experience Lead', image: 'https://github.com/VinceSin.png' },
                            { name: 'Vincent', role: 'Lead Developer', image: 'https://github.com/ProveMe66.png' },
                            { name: 'Devin Gunawan', role: 'Travel Curator', image: 'https://github.com/Devinn-G.png' }
                        ].map((member, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="mb-4 relative overflow-hidden rounded-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}