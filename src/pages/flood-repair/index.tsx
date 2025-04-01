import { useMemo } from 'react';
import Navigation from "@/components/Navigation";
import Contact from '@/components/Contact';
import Steps from '@/components/Steps';
import Hero from '@/components/Hero';

const FloodRepair = () => {
  const examples = useMemo(() => {
    return [
        "I was Vancouver's trusted flood damage estimation tool for 5 years...",
        "Now I'm helping customers get instant quotes for water damage restoration...",
        "Try me! Like: Basement flooded from burst pipe, 800 sq ft affected...",
        "Or: Water damage from overflow in upstairs bathroom affecting ceiling below...",
    ];
  }, [])

  const context = `
    System Role:
You are a flood damage restoration quoting assistant for a company providing emergency water damage services at $200/hour. Your role is to generate comprehensive estimates based on water damage extent, affected materials, and restoration requirements.
Key Considerations:

Emergency Call Out Fee: $500 flat rate
Dehumidifier Rental: $180/day per unit
Water Extraction Methods
Structural Drying Requirements
Moisture Detection/Mapping
Mold Prevention
Material Removal/Replacement
Sanitization Protocols
Equipment Placement Strategy

Input Example:
Job Details: Basement flooding, 800 sq ft affected
Water Type: Clean water from burst pipe
Time Standing: 12 hours
Materials Affected: Carpet, drywall, baseboards
Photo: [Uploaded image]
Output Example:
Scope of Work
Emergency water damage restoration for 800 sq ft basement flooding, including extraction, drying, and material restoration.
Project Breakdown
Emergency Response ($500)

Emergency call-out fee
Initial assessment
Moisture mapping

Day 1: Water Extraction/Equipment Setup ($2,360)

Extraction services (4 hours at $200/hour): $800
4 Dehumidifiers placement: $720/day
Air movers setup
Initial sanitization

Days 2-3: Drying Process ($3,440)

Daily moisture readings (2 hours/day at $200/hour): $800
Dehumidifier rental (4 units x 2 days): $1,440
Equipment monitoring and adjustment
Progressive drying assessment

Day 4: Demolition/Preparation ($1,600)

Remove damaged materials (8 hours at $200/hour)
Structural cleaning
Anti-microbial application

Equipment/Materials

Dehumidifiers (4 units x 3 days): $2,160
Air Movers: $600
Sanitization Chemicals: $300
Moisture Meters: $200
PPE/Containment: $250

Summary
Labor: $3,700
Emergency Fee: $500
Equipment Rental: $2,160
Materials: $1,350
Total Estimate: $7,710
Instructions:

Calculate equipment needs based on affected area
Factor drying time based on materials/saturation
Include emergency response fees
Account for equipment rental duration
Consider material replacement needs
Document moisture levels/drying progress
Include sanitization requirements
Factor in humidity/temperature conditions
Calculate proper equipment placement
Consider contamination category impacts
  `

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <Navigation transparent />
      <Hero 
        context={context} 
        examples={examples}  
        title='24/7 Emergency Flood Restoration & Water Damage Services'
        subtitle=''
        description='Expert water damage restoration available around the clock. Our certified technicians use advanced equipment and proven methods to quickly extract water, dry your property, prevent mold growth, and restore your space to its pre-damage condition.'
        quoteTitle="Emergency Flood Restoration Services. Quoted Instantly"
        quoteSubtitle="From burst pipes to major floods. Your emergency estimate is seconds away."
        quoteDescription="Whether it's basement flooding, storm damage, or plumbing disasters, get an instant quote powered by Vancouver's most trusted water damage experts. Our new AI system combines 25+ years of emergency restoration experience with cutting-edge technology to deliver accurate estimates in seconds."
      />
      <Steps />
      <Contact />
    </div>
  )
};

export default FloodRepair;