
import { MembershipTier, ServiceCategory } from './types';

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: "Executive Elite",
    price: "$199/mo",
    benefits: [
      "Bi-Weekly Maintenance Detail",
      "Exterior Wash (pH-neutral method)",
      "Interior Vacuum & Surface Wipe-down",
      "Priority Scheduling (within 48 hours)",
      "Dedicated Account Manager",
      "Quarterly Paint Protection Boost",
      "10% Member-Exclusive Discounts"
    ]
  },
  {
    name: "Platinum Prestige",
    price: "$299/mo",
    isFeatured: true,
    benefits: [
      "Weekly Maintenance Detail",
      "Monthly Deep Interior Conditioning",
      "Bi-annual Ceramic Coating Maintenance",
      "Expedited Scheduling (within 24 hours)",
      "One Complimentary Full Detail per year",
      "15% Member-Exclusive Discounts",
      "All Executive Elite Benefits"
    ]
  },
  {
    name: "Diamond Concierge",
    price: "$399+/mo",
    benefits: [
      "Unlimited Maintenance Details (up to 4/mo)",
      "Quarterly Full Interior & Exterior Protection",
      "White-Glove Pickup/Drop-off (15-mile radius)",
      "Pre-Event Preparation Service",
      "Quarterly Vehicle Health Report",
      "20% Member-Exclusive Discounts",
      "Fully Customizable Service Options"
    ]
  }
];

export const SERVICE_MENU: ServiceCategory[] = [
  {
    title: "Exterior Perfection",
    items: [
      { name: "Full Signature Detail", description: "Exterior wash, clay bar, light polish, sealant application, and deep wheel clean.", price: "$220 - $320+" },
      { name: "Paint Correction (1-Step)", description: "Removes light swirl marks and scratches, enhancing gloss and clarity.", price: "$450 - $750+" },
      { name: "Paint Correction (Multi-Step)", description: "Advanced restoration for deeper scratches and heavy swirl marks.", price: "$800 - $1500+" },
      { name: "Ceramic Coating", description: "Superior gloss and hydrophobicity with 1-5 years of scratch resistance.", price: "$700 - $2000+" }
    ]
  },
  {
    title: "Interior Sanctuary",
    items: [
      { name: "Full Interior Detail", description: "Steam cleaning, leather conditioning, dashboard console detail, and odor elimination.", price: "$180 - $280+" },
      { name: "Leather Rejuvenation", description: "Intensive cleaning and protection for all leather surfaces.", price: "$150 - $300+" },
      { name: "Odor Elimination", description: "Professional ozone or enzyme treatment for stubborn smells.", price: "$100 - $250" }
    ]
  },
  {
    title: "Protective Enhancements",
    items: [
      { name: "Glassparency Application", description: "Glass treatment for visibility and water repellency.", price: "$150 - $250" },
      { name: "Advanced Wheel & Caliper", description: "Deep cleaning and sealant protection for wheels and brake calipers.", price: "$100 - $200" },
      { name: "Engine Bay Detail", description: "Thorough cleaning and dressing of the engine compartment.", price: "$100 - $180" }
    ]
  }
];
