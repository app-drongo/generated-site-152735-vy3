// Template-enhanced component
// Generated: 2025-08-19T09:35:39.183Z
// Section: about
// Category: about
// Template ID: about-c001

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Client-Centric Approach",
      description: "We put your needs first, tailoring our services to help you achieve your unique business goals."
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinking",
      description: "Our team of experts constantly explores new strategies and technologies to drive transformative change."
    },
    {
      icon: Heart,
      title: "Trusted Partnerships",
      description: "We build long-lasting relationships with our clients, becoming an extension of your team."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "With a presence in over 25 countries, we leverage worldwide insights to benefit your organization."
    }
  ]

  const stats = [
    { value: "2005", label: "Founded", icon: Award },
    { value: "1,000+", label: "Clients Served", icon: Users },
    { value: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "25+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      bio: "Seasoned executive with a proven track record of driving strategic growth for leading organizations."
    },
    {
      name: "Michael Chen",
      role: "Chief Strategist & Co-Founder", 
      image: "MC",
      bio: "Renowned expert in management consulting, helping businesses navigate complex challenges."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Consulting",
      image: "ER",
      bio: "Trusted advisor to C-suite executives, delivering transformative solutions tailored to client needs."
    },
    {
      name: "David Kim",
      role: "Director of Operations",
      image: "DK",
      bio: "Operational excellence champion, ensuring seamless project delivery and client satisfaction."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acme Consulting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevating Businesses Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Strategic Insights and Innovative Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acme Consulting is a leading management consulting firm dedicated to transforming organizations 
            and driving sustainable growth. Our team of experts partners with clients worldwide to unlock 
            their full potential and achieve their strategic objectives.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Acme Consulting was founded in 2005 by a team of seasoned management consultants 
                who recognized the need for a more client-centric, innovative approach to business 
                transformation. Driven by a passion for helping organizations unlock their full potential, 
                we set out to redefine the consulting industry.
              </p>
              <p>
                Over the past 17 years, we have grown to become a trusted partner to over 1,000 
                clients worldwide, spanning a diverse range of industries. Our comprehensive suite 
                of services, combined with our deep industry expertise and global reach, has 
                enabled us to deliver transformative results for our clients time and time again.
              </p>
              <p>
                Today, Acme Consulting continues to push the boundaries of what's possible, 
                constantly exploring new strategies and technologies to help our clients stay 
                ahead of the curve. We are proud to be at the forefront of the consulting industry, 
                driving innovation and delivering sustainable growth for businesses around the world.
              </p>
            </div>
            <Button className="group">
              Learn More About Our History
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Acme Consulting has been an invaluable partner in our journey to transform 
                      and scale our business. Their strategic insights and innovative solutions have 
                      been instrumental in driving our success."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO, XYZ Corporation</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our actions and shape the way we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Consulting Experts</h3>
            <p className="text-muted-foreground">
              The talented individuals who drive our success and deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View Our Full Consulting Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acme Consulting has been a true partner in our growth journey. Their strategic insights 
                and innovative solutions have helped us navigate complex challenges and achieve 
                unprecedented success."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, ABC Corporation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}